import React, { useEffect, useState } from "react";
import { format } from "d3-format";
import { timeFormat } from "d3-time-format";
import {
  elderRay,
  discontinuousTimeScaleProviderBuilder,
  Chart,
  ChartCanvas,
  BarSeries,
  CandlestickSeries,
  ElderRaySeries,
  OHLCTooltip,
  SingleValueTooltip,
  lastVisibleItemBasedZoomAnchor,
  XAxis,
  YAxis,
  CrossHairCursor,
  EdgeIndicator,
  MouseCoordinateX,
  MouseCoordinateY,
  ZoomButtons,
} from "react-financial-charts";
import Select from "react-select";
import { useRecoilValue } from "recoil";
import { useQuery } from "../../constants/breakpoints";
import { apiLinkState } from "../../atoms";
import { getHistorical } from "../../utils";
import axios from "axios";

interface IProps {
  coin: "HIVE" | "HBD";
}

interface ChartData {
  date: string;
  open: any;
  low: any;
  high: any;
  close: any;
  volume: any;
}

const timeFrames = [
  {
    value: "60000",
    label: "1m",
  },
  {
    value: "300000",
    label: "5m",
  },
  {
    value: "900000",
    label: "15m",
  },
  {
    value: "3600000",
    label: "1h",
  },
  {
    value: "14400000",
    label: "4h",
  },
  {
    value: "86400000",
    label: "1d",
  },
];

export const DEXChart: React.FC<IProps> = ({ coin }) => {
  const [initialData, setInitialData] = useState<ChartData[]>();
  const [barWidth, setBarWidth] = useState("60000");
  const apiLink: string = useRecoilValue(apiLinkState);
  const { isTablet, isSmDesktop, isDesktop, isDesktopLg } = useQuery();

  useEffect(() => {
    getHistorical(coin.toLowerCase(), barWidth, apiLink).then((data) => {
      setInitialData(data);
    });
  }, [coin, barWidth]);

  const zoomButtonStyles = {
    fill: "#383E55",
    fillOpacity: 0.75,
    strokeWidth: 0,
    textFill: "#9EAAC7",
  };

  const ScaleProvider =
    discontinuousTimeScaleProviderBuilder().inputDateAccessor(
      (d) => new Date(d.date)
    );
  const height = 700;
  const width = (() => {
    if (isTablet) return 490;
    if (isSmDesktop) return 700;
    if (isDesktop) return 900;
    if (isDesktopLg) return 1500;
    return 1250;
  })();
  const margin = { left: 0, right: 48, top: 0, bottom: 24 };
  const elder = elderRay();

  const { data, xScale, xAccessor, displayXAccessor } = ScaleProvider(
    initialData ?? []
  );
  const pricesDisplayFormat = format(".2f");
  const max = xAccessor(data[data.length - 1]);
  const min = xAccessor(data[Math.max(0, data.length - 100)]);
  const xExtents = [min, max + 5];

  const gridHeight = height - margin.top - margin.bottom;

  const elderRayHeight = 100;
  const elderRayOrigin = (_: any, h: number) => [0, h - elderRayHeight];
  const barChartHeight = gridHeight / 4;
  const barChartOrigin = (_: any, h: number) => [
    0,
    h - barChartHeight - elderRayHeight,
  ];
  const chartHeight = gridHeight - elderRayHeight;
  const dateTimeFormat = "%d %b";
  const timeDisplayFormat = timeFormat(dateTimeFormat);

  const barChartExtents = (data: { volume: any }) => {
    return data.volume;
  };

  const candleChartExtents = (data: { high: any; low: any }) => {
    return [data.high, data.low];
  };

  const yEdgeIndicator = (data: { close: any }) => {
    return data.close;
  };

  const volumeColor = (data: { close: number; open: number }) => {
    return data.close > data.open
      ? "rgba(38, 166, 154, 0.3)"
      : "rgba(239, 83, 80, 0.3)";
  };

  const volumeSeries = (data: { volume: any }) => {
    return data.volume;
  };

  const openCloseColor = (data: { close: number; open: number }) => {
    return data.close > data.open ? "#26a69a" : "#ef5350";
  };

  return data.length ? (
    <>
      <div className="flex my-5 justify-center w-full">
        <div className="bg-gray-500 p-5 rounded-xl">
          <ChartCanvas
            height={height}
            ratio={3}
            width={width}
            margin={margin}
            data={data}
            displayXAccessor={displayXAccessor}
            seriesName="Data"
            xScale={xScale}
            xAccessor={xAccessor}
            xExtents={xExtents}
            zoomAnchor={lastVisibleItemBasedZoomAnchor}
          >
            <Chart
              id={2}
              height={barChartHeight}
              origin={barChartOrigin}
              yExtents={barChartExtents}
            >
              <BarSeries fillStyle={volumeColor} yAccessor={volumeSeries} />
            </Chart>
            <Chart id={3} height={chartHeight} yExtents={candleChartExtents}>
              <XAxis showGridLines showTickLabel={false} />
              <YAxis showGridLines tickFormat={pricesDisplayFormat} />
              <CandlestickSeries />
              <MouseCoordinateY
                rectWidth={margin.right}
                displayFormat={pricesDisplayFormat}
              />
              <EdgeIndicator
                itemType="last"
                rectWidth={margin.right}
                fill={openCloseColor}
                lineStroke={openCloseColor}
                displayFormat={pricesDisplayFormat}
                yAccessor={yEdgeIndicator}
              />
              <ZoomButtons {...zoomButtonStyles} />
              <OHLCTooltip textFill={openCloseColor} origin={[8, 16]} />
            </Chart>
            <Chart
              id={4}
              height={elderRayHeight}
              yExtents={[0, elder.accessor()]}
              origin={elderRayOrigin}
              padding={{ top: 8, bottom: 8 }}
            >
              <XAxis showGridLines gridLinesStrokeStyle="#e0e3eb" />
              <YAxis ticks={4} tickFormat={pricesDisplayFormat} />

              <MouseCoordinateX displayFormat={timeDisplayFormat} />
              <MouseCoordinateY
                rectWidth={margin.right}
                displayFormat={pricesDisplayFormat}
              />

              <ElderRaySeries yAccessor={elder.accessor()} />

              <SingleValueTooltip
                yAccessor={elder.accessor()}
                yLabel="Elder Ray"
                yDisplayFormat={(d: any) =>
                  `${pricesDisplayFormat(d.bullPower)}, ${pricesDisplayFormat(
                    d.bearPower
                  )}`
                }
                origin={[8, 16]}
              />
            </Chart>
            <CrossHairCursor />
          </ChartCanvas>
        </div>
      </div>
      <div className="mx-auto max-w-sm">
        <Select
          defaultValue={timeFrames[0]}
          onChange={(e) => {
            setBarWidth(e?.value ?? timeFrames[0].value);
          }}
          options={timeFrames}
        />
      </div>
    </>
  ) : (
    <div>
      <h1>Loading</h1>
    </div>
  );
};

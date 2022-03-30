import axios from "axios";
import { useTranslation } from "next-export-i18n";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { apiLinkState } from "../../atoms";
import { FaHive } from "react-icons/fa";

export const DLUXInfocard = ({ coin }: { coin: string }) => {
  const [bidPrice, setBidPrice] = useState<{
    dollars: number;
    larynx: number;
  }>({ dollars: 0, larynx: 0 });
  const [askPrice, setAskPrice] = useState<{
    dollars: number;
    larynx: number;
  }>({ dollars: 0, larynx: 0 });
  const [lastPrice, setLastPrice] = useState<{
    dollars: number;
    larynx: number;
  }>({ dollars: 0, larynx: 0 });
  const [volumePrice, setVolumePrice] = useState<{
    dollars: number;
    larynx: number;
  }>({ dollars: 0, larynx: 0 });
  const [dexData, setDexData] = useState<{ markets: any }>();
  const { t } = useTranslation();

  const apiLink: string = useRecoilValue(apiLinkState);

  useEffect(() => {
    let hiveCost = 0;
    let hbdCost = 0;

    const fetchCoins = async () => {
      const { data: hiveData } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/hive",
        {
          headers: {
            accept: "application/json",
          },
        }
      );
      const { data: hbdData } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/hive_dollar",
        {
          headers: {
            accept: "application/json",
          },
        }
      );
      hiveCost = hiveData.market_data.current_price.usd;
      hbdCost = hbdData.market_data.current_price.usd;
    };

    fetchCoins();
    if (coin) {
      axios.get(`${apiLink}dex`).then(({ data }) => {
        setDexData(data);
        if (coin === "HIVE") {
          if (data.markets.hive.sells.length && data.markets.hive.buys.length) {
            setBidPrice({
              larynx: parseFloat(data.markets.hive.buys[0].rate),
              dollars:
                parseFloat(data.markets.hive.tick) *
                hiveCost *
                data.markets.hive.buys[0].rate,
            });
            setAskPrice({
              larynx: parseFloat(data.markets.hive.sells[0].rate),
              dollars:
                parseFloat(data.markets.hive.tick) *
                hiveCost *
                data.markets.hive.sells[0].rate,
            });
          } else {
            setBidPrice({
              larynx: 0,
              dollars: 0,
            });
            setAskPrice({
              larynx: 0,
              dollars: 0,
            });
          }

          setLastPrice({
            larynx: data.markets.hive.tick,
            dollars: parseFloat(data.markets.hive.tick) * hiveCost,
          });
        } else if (coin === "HBD") {
          if (data.markets.hbd.sells.length && data.markets.hbd.buys.length) {
            setBidPrice({
              larynx: data.markets.hbd.sells[0].rate,
              dollars:
                parseFloat(data.markets.hbd.tick) *
                hbdCost *
                data.markets.hbd.sells[0].rate,
            });
            setAskPrice({
              larynx: data.markets.hbd.buys[0].rate,
              dollars:
                parseFloat(data.markets.hbd.tick) *
                hbdCost *
                data.markets.hbd.sells[0].rate,
            });
          } else {
            setBidPrice({
              larynx: 0,
              dollars: 0,
            });
            setAskPrice({
              larynx: 0,
              dollars: 0,
            });
          }

          setLastPrice({
            larynx: data.markets.hbd.tick,
            dollars: parseFloat(data.markets.hbd.tick) * hiveCost,
          });
        }
      });
    }
  }, [coin]);

  useEffect(() => {
    axios
      .get(`${apiLink}api/recent/${coin}_LARYNX?limit=1000%27`)
      .then(({ data }: any) => {
        const agoTime = new Date().getTime() - 86400000;

        const dollars = data.recent_trades.reduce(
          (
            a: number,
            b: { trade_timestamp: number; target_volume: string }
          ) => {
            if (b.trade_timestamp > agoTime)
              return a + Math.floor(parseFloat(b.target_volume));
            else return a;
          },
          0
        );

        const larynx = data.recent_trades.reduce(
          (a: number, b: { trade_timestamp: number; base_volume: string }) => {
            console.log(a);

            if (b.trade_timestamp > agoTime)
              return a + Math.floor(parseFloat(b.base_volume));
            else return a;
          },
          0
        );

        setVolumePrice({
          larynx,
          dollars,
        });
      });
  }, [coin]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-white text-xl">
      <div className="mx-3 flex flex-col justify-center items-center gap-3">
        <h1 className="px-5 py-2 bg-gray-500 rounded-xl">{t("bid")}</h1>
        <div className="flex flex-col justify-center items-center text-md">
          <h1 className="flex items-center gap-1">
            <FaHive /> {bidPrice.larynx}
          </h1>
          <h1>$ {bidPrice.dollars.toFixed(6)}</h1>
        </div>
      </div>
      <div className="mx-3 flex flex-col justify-center items-center gap-3">
        <h1 className="px-5 py-2 bg-gray-500 rounded-xl">{t("ask")}</h1>
        <div className="flex flex-col justify-center items-center text-md">
          <h1 className="flex items-center gap-1">
            <FaHive /> {askPrice.larynx}
          </h1>{" "}
          <h1>$ {askPrice.dollars.toFixed(6)}</h1>
        </div>
      </div>
      <div className="mx-3 flex flex-col justify-center items-center gap-3">
        <h1 className="px-5 py-2 bg-gray-500 rounded-xl">{t("last")}</h1>
        <div className="flex flex-col justify-center items-center text-md">
          <h1 className="flex items-center gap-1">
            <FaHive /> {lastPrice.larynx}
          </h1>
          <h1>$ {lastPrice.dollars.toFixed(6)}</h1>
        </div>
      </div>
      <div className="mx-3 flex flex-col justify-center items-center gap-3">
        <h1 className="px-5 py-2 bg-gray-500 rounded-xl">{t("hourVolume")}</h1>
        <div className="flex flex-col justify-center items-center text-md">
          <h1 className="flex items-center gap-1">
            <FaHive /> {volumePrice.larynx}
          </h1>
          <h1>$ {volumePrice.dollars}</h1>
        </div>
      </div>
    </div>
  );
};

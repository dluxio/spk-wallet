import axios from "axios";
import { useTranslation } from "next-export-i18n";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { apiLinkState } from "../../atoms";
import { OrderHistoryElement } from "./OrderHistoryElement";

export const OrderHistory = ({
  type,
  coin,
}: {
  coin: "HIVE" | "HBD";
  type: "buy" | "sell";
}) => {
  const [orders, setOrders] = useState<any>([]);
  const apiLink: string = useRecoilValue(apiLinkState);
  const { t } = useTranslation();

  useEffect(() => {
    axios.get(`${apiLink}dex`).then(({ data: { markets } }) => {
      if (markets && markets.hive && markets.hbd) {
        if (coin === "HIVE") {
          if (type === "buy") {
            setOrders(
              markets.hive.buys.length <= 1
                ? markets.hive.buys.sort((a: any, b: any) =>
                    parseFloat(a.rate) < parseFloat(b.rate) ? -1 : 1
                  )
                : markets.hive.buys.sort((a: any, b: any) =>
                    parseFloat(a.rate) > parseFloat(b.rate) ? -1 : 1
                  )
            );
          } else {
            setOrders(
              markets.hive.sells.length <= 1
                ? markets.hive.sells.sort((a: any, b: any) =>
                    parseFloat(a.rate) < parseFloat(b.rate) ? -1 : 1
                  )
                : markets.hive.sells.sort((a: any, b: any) =>
                    parseFloat(a.rate) < parseFloat(b.rate) ? -1 : 1
                  )
            );
          }
        } else {
          if (type === "sell") {
            setOrders(
              markets.hbd.sells.length <= 1
                ? markets.hbd.sells.sort((a: any, b: any) =>
                    parseFloat(a.rate) < parseFloat(b.rate) ? -1 : 1
                  )
                : markets.hbd.sells.sort((a: any, b: any) =>
                    parseFloat(a.rate) > parseFloat(b.rate) ? -1 : 1
                  )
            );
          } else {
            setOrders(
              markets.hbd.buys.length <= 1
                ? markets.hbd.buys.sort((a: any, b: any) =>
                    parseFloat(a.rate) < parseFloat(b.rate) ? -1 : 1
                  )
                : markets.hbd.buys.sort((a: any, b: any) =>
                    parseFloat(a.rate) > parseFloat(b.rate) ? -1 : 1
                  )
            );
          }
        }
      }
    });
  }, [coin]);

  return (
    <div className="text-white text-xl w-full">
      <div className="flex gap-3">
        <h1 className={type === "sell" ? "text-red-500" : "text-green-500"}>
          {t(type)}
        </h1>
        <h1>{t("orders")}</h1>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-3">
        {type === "sell" ? (
          <>
            <h1>
              {t("ask").toUpperCase()} ({coin})
            </h1>
            <h1>LARYNX</h1>
            <h1>
              {t("total").toUpperCase()} ({coin})
            </h1>
            <h1>
              {t("depth").toUpperCase()} ({coin})
            </h1>
          </>
        ) : (
          <>
            <h1>
              {t("depth").toUpperCase()} ({coin})
            </h1>
            <h1>
              {t("total").toUpperCase()} ({coin})
            </h1>
            <h1>LARYNX</h1>
            <h1>
              {t("bid").toUpperCase()} ({coin})
            </h1>
          </>
        )}
      </div>
      <div className="mt-2">
        {orders &&
          orders.map((order: any, i: number) => (
            <OrderHistoryElement i={i} order={order} orders={orders} />
          ))}
      </div>
    </div>
  );
};

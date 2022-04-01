import { useTranslation } from "next-export-i18n";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import {
  balanceState,
  dlux_ccState,
  prefixState,
  userState,
} from "../../atoms";
import { dexBuy, dexSell } from "../../utils";

export const Order = ({ type, coin }: { type: string; coin: string }) => {
  const [orderType, setOrderType] = useState("limit");
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const user: any = useRecoilValue(userState);
  const prefix: string = useRecoilValue(prefixState);
  const cc: string = useRecoilValue(dlux_ccState);
  const { t } = useTranslation();
  const balances = useRecoilValue(balanceState);

  const handlePlaceOrder = () => {
    if (type === "sell" && orderType === "market") {
      dexSell({ larynx: quantity * 1000, hive: 0 }, user.name, prefix);
    } else if (type === "sell" && orderType === "limit") {
      coin === "HIVE"
        ? dexSell(
            { larynx: quantity * 1000, hive: total * 1000 },
            user.name,
            prefix
          )
        : dexSell(
            { larynx: quantity * 1000, hbd: total * 1000 },
            user.name,
            prefix
          );
    } else if (type === "buy" && orderType === "market") {
      dexBuy(
        {
          coin,
          amount: total * 1000,
          buyData: {
            hours: 720,
          },
        },
        user.name,
        cc
      );
    } else if (type === "buy" && orderType === "limit") {
      dexBuy(
        {
          coin,
          amount: total * 1000,
          buyData: {
            rate: parseFloat((total / quantity).toFixed(6)),
            hours: 720,
          },
        },
        user.name,
        cc
      );
    }
  };

  return (
    <div className="flex flex-col md:w-20 flex-grow bg-gray-500 border-2 border-gray-300 p-3 rounded-md">
      <div className="text-white text-xl flex gap-3">
        <h1 className={type === "sell" ? "text-red-500" : "text-green-500"}>
          {t(type)}
        </h1>
        <h1>LARYNX</h1>
      </div>
      <div className="flex flex-col sm:flex-row items-center  mr-5 justify-between mt-2 text-white font-light">
        <h1>{t("orderType")}</h1>
        <div className="flex justify-center">
          <button
            onClick={() => setOrderType("limit")}
            className={`p-2 ${
              orderType === "limit" && "bg-gray-600"
            } rounded-l-full bg-gray-300 text-gray-400 transition-all`}
          >
            {t("limit")}
          </button>
          <button
            onClick={() => setOrderType("market")}
            className={`p-2 ${
              orderType === "market" && "bg-gray-600"
            } rounded-r-full bg-gray-300 text-gray-400 transition-all`}
          >
            {t("market")}
          </button>
        </div>
      </div>
      <div className="flex text-white gap-3 flex-col mr-3 mt-5">
        {orderType === "limit" && (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col mr-5">
                <h1>{t("qty")}</h1>
                <h1 className="font-light text-sm">LARYNX</h1>
              </div>
              <input
                min={0}
                step={0.001}
                max={balances.LARYNX}
                className="rounded-xl outline-none w-1/2 px-3 py-1 bg-gray-300 text-gray-500"
                type="number"
                value={quantity.toString().replace(/^0+/, "")}
                onChange={(e) => setQuantity(+e.target.value)}
              />
            </div>
          </>
        )}
        {orderType === "market" && type === "sell" && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col mr-5">
              <h1>{t("qty")}</h1>
              <h1 className="font-light text-sm">LARYNX</h1>
            </div>
            <input
              min={0}
              step={0.001}
              max={balances.LARYNX}
              className="rounded-xl outline-none px-3 py-1 w-1/2 bg-gray-300 text-gray-500"
              type="number"
              value={quantity.toString().replace(/^0+/, "")}
              onChange={(e) => setQuantity(+e.target.value)}
            />
          </div>
        )}
        {orderType === "limit" && type === "sell" && (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col mr-5">
                <h1>{t("total")}</h1>
                <h1 className="font-light text-sm">{coin}</h1>
              </div>
              <input
                min={0}
                step={0.001}
                max={balances.HIVE}
                className="rounded-xl outline-none px-3 py-1 w-1/2  bg-gray-300 text-gray-500"
                type="number"
                value={total.toString().replace(/^0+/, "")}
                onChange={(e) => setTotal(+e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col mr-5">
                <h1>{t("price")}</h1>
                <h1 className="font-light text-sm">{coin}</h1>
              </div>
              <h1 className="rounded-xl outline-none px-3 py-1 w-1/2  bg-gray-300 text-gray-500">
                {total && quantity ? (total / quantity).toFixed(3) : 0}
              </h1>
            </div>
          </>
        )}
        {type === "buy" && (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col mr-5">
                <h1>{t("total")}</h1>
                <h1 className="font-light text-sm">{coin}</h1>
              </div>
              <input
                step={0.001}
                max={balances.HIVE}
                className="rounded-xl outline-none px-3 py-1 w-1/2 bg-gray-300 text-gray-500"
                type="number"
                value={total.toString().replace(/^0+/, "")}
                onChange={(e) => setTotal(+e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col mr-5">
                <h1>{t("price")}</h1>
                <h1 className="font-light text-sm">{coin}</h1>
              </div>
              <h1 className="rounded-xl outline-none px-3 py-1 w-1/2  bg-gray-300 text-gray-500">
                {total && quantity ? (total / quantity).toFixed(3) : 0}
              </h1>
            </div>
          </>
        )}
      </div>
      <div className="flex align-center px-4 justify-end">
        <h1 className="text-white w-auto text-center">
          Available:{" "}
          <b>
            {type === "sell"
              ? `${balances.LARYNX} LARYNX`
              : `${
                  coin === "HIVE"
                    ? balances.HIVE.toFixed(2)
                    : balances.HBD.toFixed(2)
                } ${coin}`}
          </b>
        </h1>
        <h1
          onClick={() =>
            type === "sell"
              ? setQuantity(balances.LARYNX)
              : setTotal(coin === "HIVE" ? balances.HIVE : balances.HBD)
          }
          className="pl-2 text-white hover:text-gray-400 cursor-pointer transition-all"
        >
          (MAX)
        </h1>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handlePlaceOrder}
          className={`${
            type === "sell"
              ? "bg-red-500 focus:ring-red-600"
              : "bg-green-500 focus:ring-green-600"
          } text-white mx-4 mt-2 px-4 py-2 rounded-xl focus:ring-2 `}
        >
          {t(type)}
        </button>
      </div>
    </div>
  );
};

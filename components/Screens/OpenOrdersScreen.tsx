import React, { useEffect, useState } from "react";
import { useTranslation } from "next-export-i18n";
import { BsTrashFill } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import axios from "axios";
import { apiLinkState, prefixState, userState } from "../../atoms";
import { deleteOrder } from "../../utils";

export const OpenOrdersScreen = () => {
  const [openOrders, setOpenOrders] = useState([]);
  const user: any = useRecoilValue(userState);
  const { t } = useTranslation();
  const prefix: string = useRecoilValue(prefixState);
  const apiLink = useRecoilValue(apiLinkState);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${apiLink}@${user.name}`);
      if (data.contracts.length) {
        console.log(data.contracts);
        setOpenOrders(
          data.contracts.map((order: any) => {
            let fillPercent = 0;

            if (order.partials) {
              const filled = order.partials.reduce((a: number, c: any) => {
                return a + c.coin;
              }, 0);

              fillPercent =
                filled / (order.hive ? order.hive : order.hbd + filled);
            }

            return {
              ...order,
              type: order.type.split(":")[1],
              fillPercent,
            };
          })
        );
      }
    })();
  }, []);

  const handleDeleteOrder = async (txid: string) => {
    await deleteOrder(user.name, txid, prefix);
  };

  return (
    <div className="mx-10 my-2">
      {openOrders.length ? (
        openOrders.map(
          ({ amount, hive, hbd, rate, fee, txid, type, fillPercent }, i) => (
            <div
              className={`${
                i % 2 !== 0 ? "bg-transparent" : "bg-gray-400"
              } p-2 px-4 flex justify-between align-center text-white`}
            >
              <div className="items-center flex gap-4">
                <h1
                  className={
                    type === "sell" ? "text-red-500" : "text-green-500"
                  }
                >
                  {type === "sell" ? "SELL" : "BUY"}
                </h1>
                <h1>
                  {hive ? "HIVE" : "HBD"}:{" "}
                  <b>
                    {hive
                      ? parseFloat(
                          parseFloat(
                            (+hive / Math.pow(10, 3)).toString()
                          ).toFixed(3)
                        ).toFixed(2)
                      : parseFloat(
                          parseFloat(
                            (+hbd / Math.pow(10, 3)).toString()
                          ).toFixed(3)
                        ).toFixed(2)}
                  </b>
                </h1>
                <h1>
                  LARYNX:{" "}
                  <b>
                    {parseFloat(
                      parseFloat(
                        (+amount / Math.pow(10, 3)).toString()
                      ).toFixed(3)
                    ).toFixed(2)}
                  </b>
                </h1>
                <h1>
                  PRICE:{" "}
                  <b>
                    {rate} {hive ? "HIVE" : "HBD"}
                  </b>
                </h1>
                <h1>
                  FEE:{" "}
                  <b>
                    {parseFloat(
                      parseFloat((+fee / Math.pow(10, 3)).toString()).toFixed(3)
                    ).toFixed(2)}{" "}
                    LARYNX
                  </b>
                </h1>
                <h1>
                  FILLED: <b>{fillPercent}%</b>
                </h1>
              </div>
              <button
                onClick={() => handleDeleteOrder(txid)}
                className="px-4 py-2 rounded-lg border-2 text-white bg-red-500 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-700"
              >
                <BsTrashFill />
              </button>
            </div>
          )
        )
      ) : (
        <h1 className="text-xl text-center text-white">
          {t("no_open_orders")}
        </h1>
      )}
    </div>
  );
};

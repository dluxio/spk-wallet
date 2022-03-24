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
      console.log(data);
      if (data.contracts.length && data.contracts[0].partials.length) {
        setOpenOrders(data.contracts[0].partials);
      }
    })();
  }, []);

  const handleDeleteOrder = async (txid: string) => {
    await deleteOrder(user.name, txid, prefix);
  };

  return (
    <div className="mx-10 my-2">
      {openOrders.length ? (
        openOrders.map(({ coin, token, txid }, i) => (
          <div
            className={`${
              i % 2 === 0 ? "bg-transparent" : "bg-gray-400"
            } p-2 flex justify-between align-center text-white`}
          >
            <div>
              <h1>
                HIVE/HBD: <b>{coin}</b>
              </h1>
              <h1>
                LARYNX: <b>{token}</b>
              </h1>
            </div>
            <button
              onClick={() => handleDeleteOrder(txid)}
              className="px-4 py-2 rounded-lg border-2 text-white bg-red-500 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-700"
            >
              <BsTrashFill />
            </button>
          </div>
        ))
      ) : (
        <h1 className="text-xl text-center text-white">
          {t("no_open_orders")}
        </h1>
      )}
    </div>
  );
};

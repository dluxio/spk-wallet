import React, { useState, useEffect } from "react";
import { Order } from "./Order";
import { DLUXInfocard } from "./DLUXInfocard";
import { OrderHistory } from "./OrderHistory";
import { useRecoilState, useRecoilValue } from "recoil";
import { apiLinkState, dlux_ccState } from "../../atoms";
import axios from "axios";
import { TransactionHistory } from "./TransactionHistory";
import { useQuery } from "../../constants/breakpoints";
import { DEXChart } from "./Chart";

export const DEX = () => {
  const { isMobile } = useQuery();
  const [coin, setCoin] = useState<"HIVE" | "HBD">("HIVE");
  const [_cc, setCC] = useRecoilState(dlux_ccState);
  const apiLink = useRecoilValue(apiLinkState);

  useEffect(() => {
    axios.get(`${apiLink}api/protocol`).then(({ data }) => {
      setCC(data.multisig);
    });
  }, []);

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col  justify-center items-center gap-9">
        <div className="flex justify-center">
          <button
            onClick={() => setCoin("HIVE")}
            className={`p-2 ${
              coin === "HIVE" && "bg-gray-500"
            } rounded-l-full bg-gray-400 text-white transition-all`}
          >
            HIVE
          </button>
          <button
            onClick={() => setCoin("HBD")}
            className={`p-2 ${
              coin === "HBD" && "bg-gray-500"
            } rounded-r-full bg-gray-400 text-gray-200 transition-all`}
          >
            HBD
          </button>
        </div>
        <div className="flex flex-col sm:mx-10 bg-gray-400 mb-3 border-2 rounded-xl border-gray-200 p-5 justify-center">
          <div className="flex flex-wrap justify-center">
            <DLUXInfocard coin={coin} />
          </div>
          {!isMobile && <DEXChart />}
          <div className="flex flex-col my-5 gap-2 md:flex-row md:justify-between md:gap-10">
            <Order coin={coin} type="buy" />
            <Order coin={coin} type="sell" />
          </div>
          <div className="flex flex-col gap-2 xl:flex-row xl:gap-10 w-full mb-4">
            <OrderHistory coin={coin as "HIVE" | "HBD"} type="buy" />
            <OrderHistory coin={coin as "HIVE" | "HBD"} type="sell" />
          </div>
          <div className="mt-5">
            <TransactionHistory coin={coin as "HIVE" | "HBD"} />
          </div>
        </div>
      </div>
    </div>
  );
};

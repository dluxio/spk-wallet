import axios from "axios";
import { useTranslation } from "next-export-i18n";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { apiLinkState } from "../../atoms";
import { useQuery } from "../../constants/breakpoints";
import { TransactionHistoryItem } from "./TransactionHistoryItem";

export const TransactionHistory = ({ coin }: { coin: "HIVE" | "HBD" }) => {
  const { isMobile } = useQuery();
  const [tickerID, setTickerID] = useState("HIVE_DLUX");
  const [transactions, setTransactions] = useState([]);
  const apiLink: string = useRecoilValue(apiLinkState);
  const { t } = useTranslation();

  useEffect(() => {
    axios.get(`${apiLink}api/pairs`).then(({ data }) => {
      coin === "HIVE"
        ? setTickerID(data[0].ticker_id)
        : setTickerID(data[1].ticker_id);
    });
  }, []);

  useEffect(() => {
    if (tickerID) {
      axios
        .get(`${apiLink}api/historical/${tickerID}?depth=200`)
        .then(({ data }) => {
          if (data.buy) {
            const sumOfOrders = data.buy.concat(data.sell);
            const sortedTransactions = sumOfOrders.sort((x: any, y: any) => {
              return y.trade_timestamp - x.trade_timestamp;
            });

            setTransactions(sortedTransactions);
          }
        });
    }
  }, [tickerID]);

  return (
    <div className="flex flex-col text-white">
      <h1 className="text-xl">{t("tradeHistory")}</h1>
      <div className="grid mt-2 mb-1 text-xl grid-cols-4 sm:grid-cols-5">
        {!isMobile && <h1>{t("date").toUpperCase()}</h1>}
        <h1>{t("type").toUpperCase()}</h1>
        <h1>LARYNX</h1>
        <h1>{coin}</h1>
        <h1>
          {t("total").toUpperCase()} ({coin})
        </h1>
      </div>
      {transactions.map((transaction: any, i: number) => (
        <TransactionHistoryItem transaction={transaction} i={i} />
      ))}
    </div>
  );
};

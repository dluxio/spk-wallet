import React, { useEffect, useState } from "react";
import { useQuery } from "../../constants/breakpoints";

export const TransactionHistoryItem = ({
  transaction,
  i,
}: {
  transaction: any;
  i: number;
}) => {
  const { isMobile } = useQuery();

  return (
    <div
      className={`${
        i % 2 === 0 ? "bg-gray-500" : ""
      } text-xl px-2 py-1 grid grid-cols-4 sm:grid-cols-5`}
    >
      {!isMobile && (
        <h1 className="w-2/3">
          {new Date(transaction.trade_timestamp).toUTCString()}
        </h1>
      )}
      <h1
        className={
          transaction.type === "buy" ? "text-green-500" : "text-red-500"
        }
      >
        {transaction.type.toUpperCase()}
      </h1>
      <h1>{Number(parseFloat(transaction.base_volume).toFixed(5))}</h1>
      <h1>{Number(parseFloat(transaction.price).toFixed(5))}</h1>
      <h1>
        {(
          parseFloat(transaction.base_volume) * parseFloat(transaction.price)
        ).toFixed(3)}
      </h1>
    </div>
  );
};

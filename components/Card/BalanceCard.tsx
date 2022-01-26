/* eslint-disable @next/next/no-img-element */
import React from "react";

export const BalanceCard = ({
  currency,
  balance,
}: {
  currency: string;
  balance: number;
}) => {
  return (
    <div className="bg-gray-700 px-5 py-3 text-white  rounded-xl border-2 border-gray-800">
      <div className="flex items-center justify-between">
        {currency === "DLUX" && (
          <img
            src="https://www.dlux.io/img/dlux-hive-logo-alpha.svg"
            width={45}
            height={45}
            alt="logo"
          />
        )}
        {currency === "HIVE" && (
          <img
            src="https://cryptologos.cc/logos/hive-blockchain-hive-logo.png"
            width={45}
            height={45}
            alt="logo"
          />
        )}
        <h1 className="text-xl mr-3">{currency}</h1>
      </div>
      <h1 className="w-full text-center font-bold">
        {currency === "HIVE" ? balance : (balance / 1000).toFixed(2)}
      </h1>
    </div>
  );
};

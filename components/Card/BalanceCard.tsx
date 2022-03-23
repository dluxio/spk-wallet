import React from "react";
import { LarynxInfo } from "../Utils/LarynxInfo";
import { HiveInfo } from "../Utils/HiveInfo";

export const BalanceCard = ({
  currency,
  balance,
}: {
  currency: string;
  balance: number | { LARYNX: number; GOV: number };
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-400 w-full px-5 py-3 text-white  rounded-xl border-2 border-gray-100">
      <div className="flex items-center justify-between">
        {currency === "DLUX" && (
          <img
            src="https://spk.network/static/media/SPK.4d91f7a0.png"
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
        <h1 className="text-xl mr-3">
          {currency === "HIVE"
            ? balance
            : (balance as { LARYNX: number }).LARYNX / 1000}{" "}
          {currency === "DLUX" ? "LARYNX" : currency}
        </h1>
      </div>
      {currency === "DLUX" && (
        <LarynxInfo balance={balance as { LARYNX: number; GOV: number }} />
      )}
      {currency === "HIVE" && <HiveInfo balance={balance as number} />}
    </div>
  );
};

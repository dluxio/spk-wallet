import React, { useEffect, useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { apiLinkState, balanceState, userState } from "../../atoms";

import axios from "axios";
import { BalanceCard } from "../Card/BalanceCard";
import { useTranslation } from "next-export-i18n";

export const CryptoScreen = ({}) => {
  const [dluxBal, setDluxBal] = useState({ LARYNX: 0, GOV: 0 });
  const [hiveBal, setHiveBal] = useState(0);
  const [balances, setBalances] = useRecoilState(balanceState);
  const user: any = useRecoilValue(userState);
  const apiLink: string = useRecoilValue(apiLinkState);
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      setHiveBal(user ? parseFloat(user?.balance?.split(" ")[0]) : 0);

      const { data } = await axios.get(`${apiLink}@${user.name}`);
      setDluxBal({
        LARYNX: parseFloat(data.balance),
        GOV: parseFloat(data.gov),
      });

      setBalances({
        LARYNX: parseFloat(data.balance) / 1000,
        HIVE: user ? parseFloat(user?.balance?.split(" ")[0]) : 0,
      });
    })();
  }, [user]);

  return (
    <div className="w-full">
      <h1 className="text-white text-xl mx-10 my-2 text-center">
        {t("balances")}
      </h1>
      <div className="grid grid-cols-1 gap-5 px-10">
        <BalanceCard currency="DLUX" balance={dluxBal} />
      </div>
    </div>
  );
};

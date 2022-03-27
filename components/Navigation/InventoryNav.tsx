import React, { useEffect, useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { FaDollarSign, FaGift } from "react-icons/fa";
import { MdSwapVerticalCircle } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";
import { broadcastState, inventoryNavState, userState } from "../../atoms";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

import router from "next/router";
import { checkClaim } from "../../constants/api";
import { claim } from "../../utils";

export const InventoryNav = () => {
  const [claimType, setClaimType] = useState<boolean | string>(false);
  const { t } = useTranslation();
  const [_broadcasts, setBroadcasts] = useRecoilState<any>(broadcastState);
  const [navSelected, setNavSelected] = useRecoilState(inventoryNavState);
  const user = useRecoilValue<any>(userState);

  useEffect(() => {
    if (localStorage.getItem("spk_inv_nav")) {
      setNavSelected(localStorage.getItem("spk_inv_nav")!);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("spk_inv_nav", navSelected);
  }, [navSelected]);

  useEffect(() => {
    if (user) {
      checkClaim(user.name).then((response) => {
        setClaimType(response);
      });
    }
  }, [user]);

  const handleClaim = async () => {
    const response: any = await claim(user.name, claimType as string);
    if (response) {
      if (response.success) {
        setBroadcasts((prevState: any) => [...prevState, response]);
      }
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between">
      <div className="flex mx-10 my-10 text-white gap-8 text-xl">
        <div
          onClick={() => setNavSelected("tokens")}
          className={`flex flex-col items-center cursor-pointer ${
            navSelected === "tokens" && "selected"
          }`}
        >
          <FaDollarSign size={25} />
          <p className="text-md mt-1">{t("tokens")}</p>
        </div>
        <div
          onClick={() => setNavSelected("open_orders")}
          className={`flex flex-col items-center cursor-pointer ${
            navSelected === "open_orders" && "selected"
          }`}
        >
          <GiOpenBook size={25} />
          <p className="text-md mt-1">{t("orders")}</p>
        </div>
        <div
          onClick={() => setNavSelected("dex")}
          className={`flex flex-col items-center cursor-pointer ${
            navSelected === "dex" && "selected"
          }`}
        >
          <MdSwapVerticalCircle size={25} />
          <p className="text-md mt-1">DEX</p>
        </div>
        {claimType && (
          <button
            onClick={handleClaim}
            className="p-2 px-4 flex jsutify-center items-center bg-gradient-to-r from-blue-400 to-red-500 rounded-xl"
          >
            <FaGift size="2rem" />
          </button>
        )}
      </div>
    </div>
  );
};

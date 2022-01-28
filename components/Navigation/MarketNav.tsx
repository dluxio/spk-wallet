import React from "react";

import { useRecoilState } from "recoil";
import { FaRocket, FaNewspaper } from "react-icons/fa";
import { marketNavState } from "../../atoms";
import { useTranslation } from "next-export-i18n";

export const MarketNav = () => {
  const [marketNavSelected, setMarketNavSelected] =
    useRecoilState(marketNavState);
  const { t } = useTranslation();
  return (
    <div className="flex justify-center sm:justify-start text-white mx-10 my-10 text-whtie gap-8 text-xl">
      {/* <div
        onClick={() => setMarketNavSelected("exchange")}
        className={`flex flex-col items-center cursor-pointer ${marketNavSelected === "exchange" && "border-b-2 border-blue-500"
          }`}
      >
        <FaShoppingBag size={25} color="#fff" />
        <p className="text-md mt-1">{t("market")}</p>
      </div> */}
      <div
        onClick={() => setMarketNavSelected("apps")}
        className={`flex flex-col items-center cursor-pointer ${
          marketNavSelected === "apps" && "selected"
        }`}
      >
        <FaRocket size={25} />
        <p className="text-md mt-1">{t("apps")}</p>
      </div>
      <div
        onClick={() => setMarketNavSelected("news")}
        className={`flex flex-col items-center cursor-pointer ${
          marketNavSelected === "news" && "selected"
        }`}
      >
        <FaNewspaper size={25} />
        <p className="text-md mt-1">{t("news")}</p>
      </div>
    </div>
  );
};

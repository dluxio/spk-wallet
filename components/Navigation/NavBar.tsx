import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { FcGlobe } from "react-icons/fc";
import { FaBars } from "react-icons/fa";
import { useHiveKeychainCeramic } from "@spknetwork/auth-react";
import { Client } from "@hiveio/dhive";
import {
  useLanguageQuery,
  useTranslation,
  LanguageSwitcher,
} from "next-export-i18n";

import { userState, broadcastState, refreshState } from "../../atoms";
import { Login } from "../Login";
import { Spinner } from "../Spinner";
import { hiveApi, placeHolder } from "../../constants";
import { redoProfilePicture } from "../../utils";
import { useQuery } from "../../constants/breakpoints";

export const NavBar = () => {
  const client = new Client(hiveApi);
  const { isMobile } = useQuery();
  const [profDropdown, setProfDropdown] = useState(false);
  const [languageSelect, setLanguageSelect] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [signing, setSigning] = useState(false);
  const [user, setUser] = useRecoilState<any>(userState);
  const [pfpData, setPfp] = useState<any>(placeHolder);
  const router = useRouter();
  const url = router.pathname.split("/")[1];
  const broadcasts: any = useRecoilValue(broadcastState);
  const refresh: string = useRecoilValue(refreshState);
  const { t } = useTranslation();
  const connector = useHiveKeychainCeramic();
  const [query] = useLanguageQuery();

  const removeLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("ally-supports-cache");
    localStorage.removeItem("hive.ceramic.id");
    localStorage.removeItem("hive.ceramic.secret");
  };

  const handleLogout = () => {
    setUser(null);
    removeLocalStorage();
    setProfDropdown(false);
  };

  const handleSettings = () => {
    router.push({ pathname: "/settings", query });
    setProfDropdown(false);
  };

  useEffect(() => {
    if (user) {
      setSigning(false);
      setProfDropdown(false);
      client.database.getAccounts([user.name]).then((response: any) => {
        if (response[0]) {
          const metadata = JSON.parse(
            response[0].posting_json_metadata
          ).profile;

          setPfp(metadata);
        }
      });
    }
  }, [user, refresh]);

  useEffect(() => {
    if (pfpData) {
      const uid = pfpData.pfp?.split(":");
      const script = pfpData.set?.s;

      if (pfpData.pfp !== placeHolder) {
        if (uid && script) {
          redoProfilePicture({ script, uid });
        }
      }
    } else {
      setPfp(placeHolder);
    }
  }, [pfpData]);

  useEffect(() => {
    const getUser = async () => {
      const userStor = window.localStorage.getItem("user");

      if (userStor) {
        setUser(JSON.parse(userStor));
      }
    };

    if (!user && window !== undefined) {
      getUser();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white text-black shadow-xl px-5 py-2 font-normal flex justify-between items-center z-50">
      <div
        onClick={() => router.push("/")}
        className="w-16 cursor-pointer"
        id="logo"
      >
        <img src="/logo.svg" alt="logo" />
      </div>
      {/* {!isMobile ? (
        <div className="flex gap-10 flex-grow justify-center items-center">
          <p
            className={`${
              (url === "inventory" ||
                url === "create-nft" ||
                url === "trades" ||
                url === "nft") &&
              "selected"
            } ${user ? "navLink" : "text-gray-600 cursor-not-allowed"}`}
            onClick={() => {
              if (user) {
                router.push({ pathname: "/inventory", query });
              }
            }}
          >
            {t("wallet")}
          </p>
          <p
            className={`${url === "" && "selected"} navLink`}
            onClick={() => router.push({ pathname: "/", query })}
          >
            {t("home")}
          </p>
        </div>
      ) : (
        <div className="flex-grow-0">
          <div className="absolute left-4 top-4">
            <FaBars
              color={"#FFF"}
              size={25}
              onClick={() => setDropdown((prevState) => !prevState)}
            />
          </div>
        </div>
      )} */}

      {user && (
        <div className="flex gap-7 items-center">
          <FcGlobe
            size={30}
            className="cursor-pointer"
            onClick={() => {
              setLanguageSelect(!languageSelect);
              profDropdown === true && setProfDropdown(false);
            }}
          />
          <div className="flex items-center gap-5">
            <h1
              className="navLink w-full"
              onClick={() => {
                setProfDropdown(!profDropdown);
                languageSelect === true && setLanguageSelect(false);
              }}
            >
              {user.name}
            </h1>
            <div className="flex items-center w-full ">
              <div
                className="cursor-pointer"
                onClick={() => router.push(`/@${user.name}`)}
              >
                <img
                  width={50}
                  src={
                    pfpData.profile_image ? pfpData.profile_image : placeHolder
                  }
                  alt="profile"
                />
              </div>
            </div>
          </div>

          <div
            className={`${
              profDropdown ? "" : "hidden"
            } absolute bg-gray-200 top-14 right-10 px-2 pt-2 rounded-xl flex flex-col z-40`}
          >
            <a onClick={handleSettings} className="btn">
              {t("settings")}
            </a>
            {/* <a onClick={handleTrades} className="btn">
              {t("pendingTrades")}
            </a> */}
            <a className="btn" onClick={handleLogout}>
              {t("logout")}
            </a>
          </div>
        </div>
      )}
      {!user && (
        <div className="flex gap-7 items-center">
          <FcGlobe
            size={30}
            className="cursor-pointer"
            onClick={() => setLanguageSelect(!languageSelect)}
          />
          <div onClick={() => setSigning(true)} className="flex mr-5 navLink">
            <h1>{t("login")}</h1>
          </div>
        </div>
      )}
      {signing && <Login handleClose={() => setSigning(false)} />}
      {languageSelect && (
        <div
          className={`${
            languageSelect ? "" : "hidden"
          } absolute bg-gray-200 top-14 ${
            user ? "right-32" : "right-24"
          } px-2 pt-2 rounded-xl flex flex-col z-40`}
        >
          <LanguageSwitcher lang="en">
            <a className={`btn ${query.lang === "en" ? "bg-gray-400" : ""}`}>
              English
            </a>
          </LanguageSwitcher>
          <LanguageSwitcher lang="de">
            <a className={`btn ${query.lang === "de" ? "bg-gray-400" : ""}`}>
              Deutsche
            </a>
          </LanguageSwitcher>
          <LanguageSwitcher lang="es">
            <a className={`btn ${query.lang === "es" ? "bg-gray-400" : ""}`}>
              Español
            </a>
          </LanguageSwitcher>
          <LanguageSwitcher lang="fr">
            <a className={`btn ${query.lang === "fr" ? "bg-gray-400" : ""}`}>
              Français
            </a>
          </LanguageSwitcher>
          <LanguageSwitcher lang="lt">
            <a className={`btn ${query.lang === "lt" ? "bg-gray-400" : ""}`}>
              Lietuvių
            </a>
          </LanguageSwitcher>
          <LanguageSwitcher lang="pt">
            <a className={`btn ${query.lang === "pr" ? "bg-gray-400" : ""}`}>
              Português
            </a>
          </LanguageSwitcher>

          <LanguageSwitcher lang="cn">
            <a className={`btn ${query.lang === "cn" ? "bg-gray-400" : ""}`}>
              中文
            </a>
          </LanguageSwitcher>
        </div>
      )}
      {dropdown && (
        <div className="absolute top-14 p-2 bg-white rounded-xl text-center z-50">
          <p
            className={`${
              url === "" && "selected"
            } navLink text-black hover:text-gray-800`}
            onClick={() => router.push("/")}
          >
            {t("home")}
          </p>
          <p
            className={`${
              (url === "inventory" ||
                url === "create-nft" ||
                url === "trades") &&
              "selected"
            } ${
              user
                ? "navLink text-black hover:text-gray-800"
                : "text-gray-600 pb-2 cursor-not-allowed"
            }`}
            onClick={() => {
              if (user) {
                router.push("/inventory");
              }
            }}
          >
            {t("inventory")}
          </p>
          {/* <p
            className={`${
              url === "auction" && "selected"
            } navLink text-black hover:text-gray-800`}
            onClick={() => router.push("/auction")}
          >
            {t("auctionHouse")}
          </p>
          <p
            className={`${
              url === "listings" && "selected"
            } navLink text-black hover:text-gray-800`}
            onClick={() => router.push("/listings")}
          >
            {t("listings")}
          </p> */}
        </div>
      )}
      <div className={"fixed bottom-5 right-5 grid-cols-1"}>
        {broadcasts.map((broadcast: any) => (
          <Spinner key={broadcast.id} broadcast={broadcast} time={63} />
        ))}
      </div>
    </div>
  );
};

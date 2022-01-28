import React, {
  MouseEventHandler,
  MutableRefObject,
  useRef,
  useState,
  useEffect,
} from "react";

import { useRecoilState } from "recoil";
import { userState } from "../atoms";

import { ImCross } from "react-icons/im";

import hive from "@hiveio/hive-js";
import { useTranslation } from "next-export-i18n";
import { useHiveKeychainCeramic } from "@spknetwork/auth-react";

type LoginProps = {
  handleClose: MouseEventHandler;
};

export const Login = ({ handleClose }: LoginProps) => {
  const usernameRef: MutableRefObject<any> = useRef(null);
  const [errors, setErrors] = useState({ user: "" });
  const [user, setUser] = useRecoilState<any>(userState);
  const { t } = useTranslation();
  const connector = useHiveKeychainCeramic();

  useEffect(() => {
    const ceramicClient = async () => {
      const response = await connector.login();
      const didId = response?.context?.did?.id;

      if (didId) {
        let profile = await connector.idx.get(didId);
        if (!profile) {
          if (connector.idx.authenticated) {
            profile = await connector.idx.set(
              "basicProfile",
              JSON.parse(user.json_metadata)
            );
          }
        }
      }
    };

    if (user && window !== undefined) {
      ceramicClient();
    }
  }, [user]);

  const handleSubmit = async (e: any) => {
    if (e.key === "Enter" || !e.key) {
      hive.api.getAccounts(
        [usernameRef.current.value],
        async (err: any, result: any) => {
          if (err) throw new Error(err);
          if (result.length) {
            setUser(result[0]);
            localStorage.setItem("user", JSON.stringify(result[0]));
          } else {
            setErrors({ user: "hello" });
          }
        }
      );
    }
  };

  return (
    <div className="fixed  top-0 left-0 flex justify-center items-center h-screen w-screen bg-gray-700 bg-opacity-75 z-50">
      <div className="p-8 bg-gray-700 rounded-xl border-4 border-gray-800 relative">
        <button className="m-2 absolute top-0 right-0">
          <ImCross
            size={15}
            color="#fff"
            opacity={100}
            onClick={handleClose as MouseEventHandler}
          />
        </button>
        <h1 className="text-xl text-center mb-5">{t("inputUsername")}</h1>
        <div className="flex justify-center flex-col gap-3">
          <input
            type="text"
            placeholder="Username"
            ref={usernameRef}
            className="px-3 py-1 rounded-lg border bg-gray-500 border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onKeyDown={handleSubmit}
          />
          {errors.user && <h1 className="text-red-500">{t("userNotFound")}</h1>}

          <button
            onClick={handleSubmit}
            className="rounded-lg border border-white py-1 w-2/3 px-2 bg-gray-500 focus:ring-4 mx-auto focus:outline-none focus:ring-gray-700"
          >
            {t("login")}
          </button>
        </div>
      </div>
    </div>
  );
};

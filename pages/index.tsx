import React from "react";

import { useRecoilValue } from "recoil";
import { userState, inventoryNavState } from "../atoms";

import { InventoryNav } from "../components";

import { CryptoScreen } from "../components/Screens/CryptoScreen";
import { OpenOrdersScreen } from "../components/Screens/OpenOrdersScreen";
import { DEX } from "../components/DEX/DEX";
import dynamic from "next/dynamic";
import NoSSR from "react-no-ssr";

const Inventory = () => {
  const user: any = useRecoilValue(userState);
  const inventoryPage = useRecoilValue(inventoryNavState);

  return (
    <div>
      <title>{user ? `Inv-${user.name}` : "Inventory"}</title>
      {user && (
        <>
          <InventoryNav />
          <div className="">
            {inventoryPage === "tokens" && <CryptoScreen />}
            {inventoryPage === "open_orders" && <OpenOrdersScreen />}
            {inventoryPage === "dex" && (
              <NoSSR>
                <DEX />
              </NoSSR>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Inventory), { ssr: false });

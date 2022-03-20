import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: null,
});

export const inventoryNavState = atom({
  key: "inventoryNavState",
  default: "tokens",
});

export const marketNavState = atom({
  key: "marketNavState",
  default: "apps",
});

export const coinState = atom({
  key: "coinState",
  default: [],
});

export const prefixState = atom({
  key: "prefixState",
  default: "spkcc_",
});

export const broadcastState = atom({
  key: "broadcastState",
  default: [],
});

export const inventoryNFTState = atom({
  key: "InventoryNFTState",
  default: [],
});

export const refreshState = atom({
  key: "refreshState",
  default: "",
});

export const apiLinkState = atom({
  key: "apiLinkState",
  default: "https://spkcc.hive.pizza/",
});

export const ipfsLinkState = atom({
  key: "ipfsLinkState",
  default: "https://anywhere.ipfs.dlux.io/",
});

export const dlux_ccState = atom({
  key: "dlux_ccState",
  default: "",
});

export const dayVolumeState = atom({
  key: "dayVolumeState",
  default: {
    dlux: "0",
    dollars: "",
  },
});

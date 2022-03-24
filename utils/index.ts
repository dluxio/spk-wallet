import hive, { memo } from "@hiveio/hive-js";
import CeramicClient from "@ceramicnetwork/http-client";
import { SpkClient } from '@spknetwork/graph-client';
import axios from "axios";

const ceramic = new CeramicClient("https://ceramic-clay.3boxlabs.com")
const spkClient = new SpkClient('https://us-01.infra.3speak.tv', ceramic);

const _Rixits =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+=";

export const toNumber = (Base64: string) => {
  var result = 0;
  var base64 = Base64.split("");
  for (var e = 0; e < base64.length; e++) {
    result = result * 64 + _Rixits.indexOf(base64[e]);
  }
  return result;
};

export const parseDrop = (drop: any) => {
  let months = drop.total_claims.split("").map((a: string) => parseInt(a, 16));
  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months.map((month: number) => monthNames[month - 1]);
};

export const toBase64 = (number: number) => {
  if (
    number !== number || // NaN !== NaN, equal true
    number === null ||
    number === Number.POSITIVE_INFINITY
  )
    throw "The input is not valid";
  if (number < 0) throw "Can't represent negative numbers now";
  let rixit;
  let residual = Math.floor(number);
  let result = "";
  while (true) {
    rixit = residual % 64;
    result = _Rixits.charAt(rixit) + result;
    residual = Math.floor(residual / 64);
    if (residual == 0) break;
  }
  return result;
};

export const formatData = (data: any) => {
  return data.map((el: any) => {
    return {
      x: el[0],
      y: el[1],
    };
  });
};

export const getColor = (id: string) => {
  switch (id) {
    case "hive":
      return ["rgba(255, 99, 132)", "rgba(255, 99, 132, 0.5)"];
    case "ethereum":
      return ["rgba(211, 211, 211)", "rgba(211, 211, 211, 0.5)"];
    default:
      return ["rgba(123, 239, 178)", "rgba(123, 239, 178, 0.5)"];
  }
};

const generate_token = (length: number) => {
  //edit the token allowed characters
  var a =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  var b = [];
  for (var i = 0; i < length; i++) {
    var j = (Math.random() * (a.length - 1)).toFixed(0);
    b[i] = a[+j];
  }
  return b.join("");
};

export const login = async (username: string) => {
  return new Promise((res, rej) => {
    // @ts-ignore
    if (window.hive_keychain) {
      const buf = JSON.stringify(
        {
          token: generate_token(16),
        },
        null,
        0
      );

      // @ts-ignore
      window.hive_keychain.requestSignBuffer(
        username,
        buf,
        "Posting",
        (response: any) => {
          res(response);
        }
      );
    } else {
      rej("Hive keychain needs to be present");
    }
  });
};

const handleBroadcastRequest = async (
  operations: any,
  username: string,
  post: string = "active"
) => {
  return new Promise((res, rej) => {
    // @ts-ignore
    if (window.hive_keychain) {
      // @ts-ignore
      window.hive_keychain.requestBroadcast(
        username,
        [operations],
        post,
        (response: any) => {
          res(response);
        }
      );
    } else {
      rej("Didn't return response");
    }
  });
};

type AuctionData = {
  set: string;
  uid: string;
  price: number;
  time: number;
  type: string;
  kind: string;
};

export const Auction = async (
  username: string,
  auctionData: AuctionData,
  prefix: string = "dlux_"
) => {
  let id = `${prefix}`;

  if (auctionData.kind === "nft") {
    if (auctionData.type === "DLUX") {
      id += "nft_auction";
    } else id += "nft_hauction";
  } else {
    id += "ft_auction";
  }

  const operations = [
    "custom_json",
    {
      required_auths: [username],
      required_posting_auths: 0,
      id,
      json: JSON.stringify(
        auctionData.type === "DLUX"
          ? {
            set: auctionData.set,
            uid: auctionData.uid,
            price: auctionData.price,
            time: auctionData.time,
          }
          : {
            set: auctionData.set,
            uid: auctionData.uid,
            price: auctionData.price,
            time: auctionData.time,
            type: auctionData.type,
          }
      ),
    },
  ];

  return await handleBroadcastRequest(operations, username);
};

export const FTOpen = async (
  username: string,
  set: string,
  prefix: string = "dlux_"
) => {
  const id = `${prefix}nft_mint`;
  const operations = [
    "custom_json",
    {
      required_auths: [username],
      required_posting_auths: 0,
      id,
      json: JSON.stringify({
        set,
      }),
    },
  ];

  return await handleBroadcastRequest(operations, username);
};

type AirdropData = {
  to: string[];
  set: string;
};

export const FTAirdrop = async (
  username: string,
  ftData: AirdropData,
  prefix: string = "dlux_"
) => {
  const id = `${prefix}ft_airdrop`;
  hive.api.getAccounts([...ftData.to], async (err: any, result: any) => {
    if (err) throw new Error(err);
    if (result.length === ftData.to.length) {
      const operations = [
        "custom_json",
        {
          required_auths: [username],
          required_posting_auths: [],
          id,
          json: JSON.stringify(ftData),
        },
      ];

      return await handleBroadcastRequest(operations, username);
    } else {
      console.log("One or more users don't exist");
    }
  });
};

type GiveData = {
  to: string;
  set: string;
  uid?: string;
};

export const Give = async (
  username: string,
  giveData: GiveData,
  prefix: string = "dlux_"
) => {
  const id = `${prefix}${giveData.uid ? "nft_transfer" : "ft_transfer"}`;
  await hive.api.getAccounts([giveData.to], async (err: any, result: any) => {
    if (err) throw new Error(err);
    if (result !== []) {
      const operations = [
        "custom_json",
        {
          required_auths: [username],
          required_posting_auths: [],
          id,
          json: JSON.stringify(giveData),
        },
      ];

      return await handleBroadcastRequest(operations, username);
    } else {
      console.log("No user to send to");
    }
  });
};

type SellData = {
  price: number;
  set: string;
  uid?: string;
  qty?: number;
};

export const Sell = async (
  username: string,
  sellData: SellData,
  prefix: string = "dlux_"
) => {
  const id = `${prefix}${sellData.uid ? "nft_sell" : "ft_sell"}`;
  const operations = [
    "custom_json",
    {
      required_auths: [username],
      required_posting_auths: [],
      id,
      json: JSON.stringify(sellData),
    },
  ];

  return await handleBroadcastRequest(operations, username);
};

type MeltData = {
  set: string;
  uid: string;
};

export const NFTMelt = async (
  username: string,
  nftData: MeltData,
  prefix: string = "dlux_"
) => {
  const id = `${prefix}nft_melt`;
  const operations = [
    "custom_json",
    {
      required_auths: [username],
      required_posting_auths: [],
      id,
      json: JSON.stringify(nftData),
    },
  ];

  return await handleBroadcastRequest(operations, username);
};

type BuyData = {
  set: string;
  uid?: string;
  qty?: number;
};

export const NFTBuy = async (
  username: string,
  nftData: BuyData,
  prefix: string = "dlux_"
) => {
  const id = `${prefix}${!nftData.qty ? "nft_buy" : "ft_buy"}`;
  const operations = [
    "custom_json",
    {
      required_auths: [username],
      required_posting_auths: 0,
      id,
      json: JSON.stringify(nftData),
    },
  ];

  return await handleBroadcastRequest(operations, username);
};

type BidData = {
  set: string;
  uid: string;
  bid_amount: number;
};

export const NFTBid = async (
  username: string,
  nftData: BidData,
  prefix: string = "dlux_",
  kind: "ft" | "nft",
  type: "HIVE" | "HBD" | "DLUX",
  cc: string
) => {
  const id = `${prefix}${kind}_bid`;

  const amount = `${parseFloat((nftData.bid_amount / 1000).toFixed(3))} ${type === "HIVE" ? "HIVE" : "HBD"
    }`;

  const operations =
    type === "DLUX"
      ? [
        "custom_json",
        {
          required_auths: [username],
          required_posting_auths: [],
          id,
          json: JSON.stringify(nftData),
        },
      ]
      : [
        "transfer",
        {
          to: cc,
          amount,
          memo: `NFTbid ${nftData.set}:${nftData.uid}`,
        },
      ];

  return await handleBroadcastRequest(operations, username);
};

type NFTCreateData = {
  name: string;
  type: number;
  script: string;
  permlink: string;
  start: string;
  end: string;
  royalty: string;
  handling: string;
  max_fee: number;
  bond: number;
};

export const NFTCreate = async (
  username: string,
  prefix: string,
  formData: NFTCreateData
) => {
  const operations = [
    [
      "custom_json",
      {
        required_auths: [username],
        required_posting_auths: 0,
        id: `${prefix}nft_define`,
        json: JSON.stringify(formData),
      },
    ],
  ];

  return await handleBroadcastRequest(operations, username);
};

export const sendDLUX = async (
  data: { to: string; amount: number; memo: string },
  username: string
) => {
  const operations = [
    "custom_json",
    {
      required_auths: [username],
      id: "spkcc_send",
      required_posting_auths: 0,
      json: JSON.stringify({
        ...data,
        from: username,
        amount: data.amount * 1000,
      }),
    },
  ];

  return await handleBroadcastRequest(operations, username);
};

export const sendHIVE = async (
  data: { to: string; amount: number; memo: string },
  username: string
) => {
  const operations = [
    "transfer",
    {
      required_auths: [username],
      id: "spkcc_send",
      required_posting_auths: 0,
      json: JSON.stringify({
        ...data,
        from: username,
        amount: `${data.amount.toFixed(3)} HIVE`,
      }),
    },
  ];

  return await handleBroadcastRequest(operations, username);
};

export const gov = async (amount: number, username: string, up: boolean) => {
  const operations = [
    "custom_json",
    {
      required_auths: [username],
      id: up ? "spkcc_gov_up" : "spkcc_gov_down",
      required_posting_auths: 0,
      json: JSON.stringify({ amount: amount * 1000 }),
    },
  ];

  return await handleBroadcastRequest(operations, username);
};

type PFPData = {
  set: string;
  uid: string;
};

export const SetPFP = async (
  username: string,
  prefix: string,
  pfpData: PFPData
) => {
  const operations = [
    "custom_json",
    {
      required_auths: 0,
      required_posting_auths: [username],
      id: `${prefix}nft_pfp`,
      json: JSON.stringify(pfpData),
    },
  ];

  return await handleBroadcastRequest(operations, username, "posting");
};

type ReserveData = {
  price?: number;
  to: string;
  set: string;
  uid?: string;
};

export const ReserveTrade = async (
  username: string,
  prefix: string,
  reserveData: ReserveData
) => {
  await hive.api.getAccounts(
    [reserveData.to],
    async (err: any, result: any) => {
      if (err) throw new Error(err);
      if (result[0]) {
        const id = reserveData.uid
          ? `${prefix}nft_reserve_transfer`
          : `${prefix}ft_escrow`;
        const operations = [
          "custom_json",
          {
            required_auths: [username],
            required_posting_auths: [],
            id,
            json: JSON.stringify(reserveData),
          },
        ];

        return await handleBroadcastRequest(operations, username);
      }
    }
  );
};

export const ReserveRespond = async (
  username: string,
  prefix: string,
  reserveData: { set: string; uid?: string; price: number; kind: string },
  response: "cancel" | "complete"
) => {
  const id =
    reserveData.kind === "fts"
      ? `${prefix}ft_escrow_${response}`
      : response === "complete"
        ? `${prefix}nft_reserve_${response}`
        : `${prefix}nft_transfer_${response}`;

  const operations = [
    "custom_json",
    {
      required_auths: [username],
      required_posting_auths: 0,
      id,
      json: JSON.stringify({
        uid: reserveData.uid,
        price: reserveData.price,
        set: reserveData.set,
      }),
    },
  ];

  return await handleBroadcastRequest(operations, username);
};

export const getUserPosts = async (did: string) => {
  const response = await spkClient.getDocumentsForUser(did)
  return response;
}

export const handleSellCancel = async (
  nft: { set: string; uid: string; kind: string },
  username: string,
  prefix: string
) => {
  const id = `${prefix}${nft.kind}_sell_cancel`;

  const operations = [
    "custom_json",
    {
      required_auths: [username],
      required_posting_auths: 0,
      id,
      json: JSON.stringify({
        uid: nft.uid,
        set: nft.set,
      }),
    },
  ];

  return await handleBroadcastRequest(operations, username);
};

export const redoProfilePicture = (nft: { script: string; uid: string }) => {
  fetch(`https://ipfs.io/ipfs/${nft.script}?${nft.uid}`)
    .then((response) => response.text())
    .then((data) => {
      const code = `(//${data}\n)("${nft.uid}")`;
      const SVG = eval(code);
      const element = document.getElementById(`profile-picture`);
      if (element) element.innerHTML = SVG.HTML;
    });
};

export const redoAccountPicture = (nft: { script: string; uid: string }) => {
  fetch(`https://ipfs.io/ipfs/${nft.script}?${nft.uid}`)
    .then((response) => response.text())
    .then((data) => {
      const code = `(//${data}\n)("${nft.uid}")`;
      const SVG = eval(code);
      const element = document.getElementById(`account-picture`);
      if (element) element.innerHTML = SVG.HTML;
    });
};

export const vote = async (
  voter: string,
  author: string,
  permlink: string,
  weight: number
) => {
  const operations = [
    "vote",
    {
      voter,
      author,
      permlink,
      weight,
    },
  ];

  return await handleBroadcastRequest(operations, voter);
};

export const comment = async (data: {
  author: string;
  title: string;
  body: string;
  parent_author: string;
  parent_permlink: string;
  permlink: string;
  json_metadata: string;
}) => {
  const operations = [
    "comment",
    {
      ...data,
    },
  ];

  return await handleBroadcastRequest(operations, data.author);
};

export const replyComment = async (data: {
  author: string;
  body: string;
  parent_author: string;
  parent_permlink: string;
  permlink: string;
}) => {
  const operations = [
    "comment",
    {
      ...data,
    },
  ];

  return await handleBroadcastRequest(operations, data.author);
};

export const dexSell = async (
  data: { larynx: number; hive?: number; hbd?: number },
  username: string,
  prefix: string
) => {
  const operations = [
    "custom_json",
    {
      required_auths: [username],
      id: `${prefix}dex_sell`,
      required_posting_auths: 0,
      json: JSON.stringify({ ...data, hours: 720 }),
    },
  ];

  return await handleBroadcastRequest(operations, username);
};

export const dexBuy = async (
  data: {
    coin: string;
    amount: number;
    buyData: { rate?: number; hours: number };
  },
  username: string,
  to: string
) => {
  const operations = [
    "transfer",
    {
      from: username,
      to,
      amount: `${parseFloat((data.amount / 1000).toString()).toFixed(3)} ${
        data.coin
      }`,
      memo: JSON.stringify(data.buyData),
    },
  ];

  return await handleBroadcastRequest(operations, username);
};

export const claim = async (username: string, claimType: string) => {
  console.log(username, claimType)

  const operations = [
    "custom_json",
    {
      required_auths: 0,
      id: claimType,
      required_posting_auths: [username],
      json:
        claimType === "spk_claim"
          ? JSON.stringify({ larynx: true })
          : JSON.stringify({}),
    },
  ];

  return await handleBroadcastRequest(operations, username);
}

export const validateWitnessKey = ({ pubKey, prevKey, toPubKey }: { pubKey: string; prevKey: string; toPubKey: string }) => {
  try {
    return memo.encode(prevKey, toPubKey, '#' + pubKey)
  } catch (e) {
    console.error(e)
    return ''
  }
}

export type ISettings = {
  dexFee: number;
  domain: string;
  pubKey: string;
  prevKey: string;
}

export const witnessSettings = async (data: ISettings, username: string) => {
  const operations = [
    'custom_json',
    {
      required_auths: [username],
      required_posting_auths: 0,
      id: 'dlux_node_add',
      json: JSON.stringify(data)
    }
  ]

  const response = await axios.get('https://token.dlux.io/api/protocol')
  const memoKey = response.data.memoKey;

  if (validateWitnessKey({
    pubKey: data.pubKey,
    prevKey: data.prevKey,
    toPubKey: memoKey
  })) {
    return await handleBroadcastRequest(operations, username);
  } else {
    return 'Incorrect key pair'
  }
}

export const addRoyalties = async (
  royaltieString: string,
  set: string,
  username: string,
  prefix: string
) => {
  const operations = [
    "custom_json",
    {
      required_auths: [username],
      id: `${prefix}dex_sell`,
      required_posting_auths: 0,
      json: JSON.stringify({ set, distro: royaltieString }),
    },
  ];

  return await handleBroadcastRequest(operations, username);
};

export const ftBuyTransfer = async (
  ftData: { amount: string; memo: string },
  username: string,
  to: string
) => {
  const operations = [
    "transfer",
    {
      from: username,
      to,
      amount: ftData.amount,
      memo: ftData.memo,
    },
  ];

  return await handleBroadcastRequest(operations, username);
};

export const parseData = (data: any) => {
  const result: { x: Date; y: any[] }[] = [];

  if (data) {
    Object.keys(data).map((key) => {
      result.push({
        x: new Date(+key),
        y: [data[key].o, data[key].t, data[key].b, data[key].c],
      });
    });
  }

  return {
    series: [
      {
        data: result,
      },
    ],
  };
};

export const deleteOrder = async (
  username: string,
  txid: string,
  prefix: string
) => {
  const operations = [
    "custom_json",
    {
      required_auths: [username],
      id: `${prefix}dex_clear`,
      required_posting_auths: 0,
      json: JSON.stringify({ txid }),
    },
  ];

  return await handleBroadcastRequest(operations, username);
};
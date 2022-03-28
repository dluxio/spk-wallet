import axios from "axios";
import React, { useEffect, useState } from "react";

import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { FaLock, FaUnlock } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { apiLinkState, userState } from "../../atoms";
import { parseDrop } from "../../utils";
import { GovModal } from "../Modals/GovModal";
import { Send } from "../Modals/SendForm";

export const LarynxInfo = ({
  balance,
}: {
  balance: { LARYNX: number; GOV: number };
}) => {
  const user = useRecoilValue<any>(userState);
  const apiLink = useRecoilValue(apiLinkState);
  const [send, setSend] = useState(false);
  const [showStake, setShowStake] = useState(false);
  const [gov, setGov] = useState({ show: false, up: false });
  const [showActions, setShowActions] = useState(false);
  const [claimInfo, setClaimInfo] = useState({
    availiblePerMonth: 0,
    lastClaim: "Feburary",
    totalClaims: "",
  });

  useEffect(() => {
    axios.get(`${apiLink}@${user.name}`).then(({ data }) => {
      const response = parseDrop(data.drop);
      setClaimInfo({
        availiblePerMonth:
          data.drop.availible.amount /
          Math.pow(10, data.drop.availible.precision),
        lastClaim: response.slice(-1)[0],
        totalClaims: response.join(", "),
      });
    });

    axios.get(`${apiLink}markets`).then(({ data }) => {
      if (Object.keys(data.markets.node).includes(user.name)) {
        setShowStake(true);
      }
    });
  }, []);

  return (
    <div className="flex flex-col mt-3 pt-3 border-t-2 border-gray-300">
      {send && (
        <Send
          currency="LARYNX"
          balance={balance.LARYNX / 1000}
          handleClose={() => setSend(false)}
        />
      )}
      {gov.show && (
        <GovModal
          balance={gov.up ? balance.LARYNX / 1000 : balance.GOV}
          handleClose={() => setGov({ ...gov, show: false })}
          up={gov.up}
        />
      )}
      <div className="flex flex-col sm:flex-row justify-between gap-5">
        <div>
          <h1>
            LARYNX Token ({balance.LARYNX ? balance.LARYNX / 1000 : "0.000"}{" "}
            Bal)
          </h1>
          <h1 className="pl-2 text-gray-600">Miner token for SPK Network.</h1>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setSend(true)}
            className="px-4 py-3 flex items-center gap-3 rounded-lg border-2 text-white bg-gradient-to-b from-red-500 to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Send
            <BiPaperPlane size="1.5rem" />
          </button>
        </div>
      </div>
      {showStake && (
        <div className="flex flex-col sm:flex-row justify-between gap-10 border-t-2 border-gray-300 mt-2 pt-2">
          <div>
            <h1>LARYNXG ({balance.GOV ? balance.GOV / 1000 : "0.000"} Bal)</h1>
            <h1 className="text-gray-600 pl-2">
              Stake and run SCC node for DEX rewards.
              <ul className="list-disc ml-8">
                <li>Increased rewards from DEX</li>
                <li>Instant Power Up</li>
                <li>4 Week Power Down</li>
                <li>1 Week Convert</li>
              </ul>
            </h1>
          </div>
          <div className="flex relative flex-col items-center lg:items-end">
            <button
              onClick={() => setShowActions(!showActions)}
              className="px-3 py-3 flex items-center gap-3 rounded-lg border-2 text-white bg-transparent border-gray-700 bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-700"
            >
              Actions{" "}
              {showActions ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
            </button>
            {showActions && (
              <div className="bg-gray-600 rounded-xl p-3 absolute top-14">
                <button
                  onClick={() => setGov({ show: true, up: true })}
                  className="flex justify-between items-center whitespace-nowrap gap-2 bg-gray-500 w-full px-2 py-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700"
                >
                  Lock LARYNXG <FaLock />
                </button>
                <button
                  onClick={() => setGov({ show: true, up: false })}
                  className="flex mt-2 items-center whitespace-nowrap gap-2 bg-gray-500 w-full px-2 py-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700"
                >
                  Unlock LARYNXG <FaUnlock />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="flex-col sm:flex-row justify-between gap-10 border-t-2 border-gray-300 mt-2 pt-2">
        <h1 className="mt-1 text-md">Claim info:</h1>
        <ul className="text-gray-600 ml-3">
          <li>When can you claim: At the start of every month</li>
          <li>Available per month: {claimInfo.availiblePerMonth} LARYNX</li>
          <li>Last claim: {claimInfo.lastClaim}</li>
          <li>Total claims: {claimInfo.totalClaims}</li>
        </ul>
      </div>
    </div>
  );
};

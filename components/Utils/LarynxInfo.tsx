import axios from "axios";
import React, { useEffect, useState } from "react";

import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { FaLock, FaUnlock } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms";
import { API } from "../../constants/api";
import { GovModal } from "../Modals/GovModal";
import { Send } from "../Modals/SendForm";

const monthNames = [
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

export const LarynxInfo = ({
  balance,
}: {
  balance: { LARYNX: number; GOV: number };
}) => {
  const user = useRecoilValue<any>(userState);
  const [send, setSend] = useState(false);
  const [gov, setGov] = useState({ show: false, up: false });
  const [showActions, setShowActions] = useState(false);
  const [claimInfo, setClaimInfo] = useState({
    availiblePerMonth: 0,
    lasClaim: "Feburary",
    totalClaims: 0,
  });

  useEffect(() => {
    axios.get(`${API}@${user.name}`).then(({ data }) => {
      console.log(data);
      setClaimInfo({
        availiblePerMonth:
          data.drop.availible.amount /
          Math.pow(10, data.drop.availible.precision),
        lasClaim: monthNames[+data.drop.last_claim - 1],
        totalClaims: data.drop.total_claims,
      });
    });
  }, []);

  return (
    <div className="flex flex-col mt-3 pt-3 border-t-2 border-gray-500">
      {send && (
        <Send
          currency="LARYNX"
          balance={balance.LARYNX / 1000}
          handleClose={() => setSend(false)}
        />
      )}
      {gov.show && (
        <GovModal
          balance={balance.GOV}
          handleClose={() => setGov({ ...gov, show: false })}
          up={gov.up}
        />
      )}
      <div className="flex flex-col sm:flex-row justify-between gap-5">
        <div>
          <h1>LARYNX Token ({(balance.LARYNX / 1000).toFixed(2)} Bal)</h1>
          <h1 className="mt-2 text-gray-400">
            Utility token for smart contracts, also called a (SMT)
          </h1>
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
      <div className="flex flex-col sm:flex-row justify-between gap-10 border-t-2 border-gray-600 mt-2 pt-2">
        <div>
          <h1>LARYNX Proof of stake ({(balance.GOV / 1000).toFixed(2)} Bal)</h1>
          <h1 className="mt-4">Claim info:</h1>
          <ul className="text-gray-400 ml-3">
            <li>Availible per month: {claimInfo.availiblePerMonth} LARYNX</li>
            <li>Last claim: {claimInfo.lasClaim}</li>
            <li>Total claims: {claimInfo.totalClaims}</li>
          </ul>
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
                Lock LARYNX <FaLock />
              </button>
              <button
                onClick={() => setGov({ show: true, up: false })}
                className="flex mt-2 items-center whitespace-nowrap gap-2 bg-gray-500 w-full px-2 py-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-700"
              >
                Unlock LARYNX <FaUnlock />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

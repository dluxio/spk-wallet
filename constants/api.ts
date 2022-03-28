import axios from "axios";
import { useRecoilValue } from "recoil";
import { apiLinkState, userState } from "../atoms";

export const useClaim = () => {
  const apiLink = useRecoilValue(apiLinkState);
  const user: any = useRecoilValue(userState);

  (async () => {
    if (user) {
      const { data } = await axios.get(apiLink + `@${user.name}`);
      const currentMonth = new Date().getMonth();

      console.log(data);

      if (data.claim)
        return {
          claimType: "spkcc_shares_claim",
          amount: data.claim / Math.pow(10, 3),
        };
      if (currentMonth + 1 !== +data.drop.last_claim) {
        return {
          claimType: "spkcc_claim",
          amount:
            data.drop.availible.amount /
            Math.pow(10, data.drop.availible.precision),
        };
      }
    }
  })();

  return { claimType: "", amount: 0 };
};
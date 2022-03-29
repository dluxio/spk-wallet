import axios from "axios";

export const getClaim = async (apiLink: string, username: string) => {
  if (username) {
    const { data } = await axios.get(apiLink + `@${username}`);
    const currentMonth = new Date().getMonth();

    if (data.claim) {
      return {
        claimType: "spkcc_shares_claim",
        amount: data.claim / Math.pow(10, 3),
      };
    } else if (currentMonth + 1 !== +data.drop.last_claim) {
      return {
        claimType: "spkcc_claim",
        amount:
          data.drop.availible.amount /
          Math.pow(10, data.drop.availible.precision),
      };
    }
  }
};

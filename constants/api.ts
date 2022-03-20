import axios from "axios";

export const API = 'https://spkcc.hive.pizza/';

export const checkClaim = async (username: string) => {
  const { data } = await axios.get(API + `@${username}`);
  const currentMonth = new Date().getMonth();

  if (data.claim) return "spk_claim";
  if (currentMonth !== +data.drop.last_claim) {
    return "spkcc_claim";
  }

  return false;
}

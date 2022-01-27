import axios from "axios";

const API = 'https://dlux-test.herokuapp.com/';

export const checkClaim = async (username: string) => {
  const { data } = await axios.get(API + `@${username}`);
  const currentMonth = new Date().getMonth();

  if (currentMonth !== data.drop.last_claim) {
    return true;
  }

  return false;
}
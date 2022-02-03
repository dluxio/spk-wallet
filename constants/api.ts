import axios from "axios";

const API = 'https://dlux-test.herokuapp.com/';

export const checkClaim = async (username: string) => {
  const { data } = await axios.get(API + `@${username}`);
  const currentMonth = new Date().getMonth();

  console.log(data.drop.last_claim)
  console.log(currentMonth)
  console.log(+data.drop.last_claim === currentMonth)

  if (data.claim) return 'spk_claim';
  if (currentMonth !== +data.drop.last_claim) {
    return 'spkcc_claim';
  }

  return false;
}
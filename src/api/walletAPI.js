import axios from 'axios';
import { BASE_URL } from './index';

export const balance = async () => {
  try {
    const { data: balance } = await axios.get(BASE_URL + '/livestream/balance', {
      headers: {
        access_token: localStorage.access_token,
      },
    });
    console.log(balance, '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    return balance.message.balance;
  } catch (err) {
    console.log(err);
  }
};

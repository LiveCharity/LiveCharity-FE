import axios from 'axios';
import { BASE_URL } from '.';

export const loginAPI = async (userData) => {
  try {
    const { data } = await axios.post(BASE_URL + '/users/login', userData);
    localStorage.access_token = data.access_token;
    localStorage.username = data.username;
    localStorage.id = data.id;
  } catch (err) {
    console.log(err);
  }
};

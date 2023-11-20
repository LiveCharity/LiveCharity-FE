import {
  CAMPAIGN_FETCH_SUCCESS,
  CAMPAIGN_DETAIL_FETCH_SUCCESS,
  CAMPAIGN_PAGENATION_FETCH_SUCCESS,
} from './actionsType';
import { BASE_URL } from '../../api';

export function campaignFetchSuccess(payload) {
  return {
    type: CAMPAIGN_FETCH_SUCCESS,
    payload,
  };
}

export function campaignPagenationFetchSuccess(payload) {
  return {
    type: CAMPAIGN_PAGENATION_FETCH_SUCCESS,
    payload,
  };
}

export function campaignDetailFetchSuccess(payload) {
  return {
    type: CAMPAIGN_DETAIL_FETCH_SUCCESS,
    payload,
  };
}

export const campaignFetch = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + '/campaign');
      if (!response.ok) throw new Error('Something wrong');
      const data = await response.json();
      const action = campaignFetchSuccess(data);
      dispatch(action);
      return action;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const campaignPagenationFetch = (category, page) => {
  return async (dispatch) => {
    try {
      let url = '/campaign/pagenation';

      page ? (url += `?page=${page}`) : (url += `?page=1`);
      if (category) {
        url += `&search=${category}`;
      }
      const pages = '/campaign/pagenation?page=1&search=1';
      const response = await fetch(BASE_URL + url);
      if (!response.ok) throw new Error('Something wrong');
      const data = await response.json();
      const action = campaignPagenationFetchSuccess(data);
      dispatch(action);
      return action;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const campaignDetailFetch = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(BASE_URL + '/campaign/' + id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Something wrong');
      const data = await response.json();
      const action = campaignDetailFetchSuccess(data);
      dispatch(action);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

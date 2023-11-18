import { CAMPAIGN_FETCH_SUCCESS, CAMPAIGN_DETAIL_FETCH_SUCCESS } from './actionsType';
import { BASE_URL } from '../../api';

export function campaignFetchSuccess(payload) {
  return {
    type: CAMPAIGN_FETCH_SUCCESS,
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
      console.log(data, 'DATA DARI ACTION CAMPAIGN');
      const action = campaignFetchSuccess(data);
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
      // console.log(data)
      const action = campaignDetailFetchSuccess(data);
      // return data
      dispatch(action);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

import { CAMPAIGN_FETCH_SUCCESS, CAMPAIGN_DETAIL_FETCH_SUCCESS } from './actionsType';
// import { BASE_URL } from '../../api';
const  BASE_URL = 'http://localhost:3000';

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
  return async (dispatch, getState) => {
      try {
          const response = await fetch(BASE_URL + '/livestreaming')
          if (!response.ok) throw new Error("Something wrong")
          const data = await response.json()
          console.log(data, "DATA DARI ACTION CAMPAIGN")
          const action = campaignFetchSuccess(data)
          dispatch(action)
          return action
      } catch (error) {
          console.log(error)
          throw error
      }
  }
}
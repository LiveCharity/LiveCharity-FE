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

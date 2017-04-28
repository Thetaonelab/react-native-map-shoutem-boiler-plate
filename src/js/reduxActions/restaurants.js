import { RESTAURANT_DATA_LOADING, RESTAURANT_DATA_ARRIVED } from './index';
import { getRestaurantData } from '../apis/restaurants';


export function loadRestaurantData() {
  return dispatch => {
    dispatch({ type: RESTAURANT_DATA_LOADING })
    return getRestaurantData()
      .then(
      payload => dispatch({ type: RESTAURANT_DATA_ARRIVED, payload })
      )
  }
}


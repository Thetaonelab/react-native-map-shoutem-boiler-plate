import { RESTAURANT_DATA_LOADING, RESTAURANT_DATA_ARRIVED } from '../reduxActions';
import { createReducer } from './utils';


const initialState = { restaurantDataLoading: false, restaurantData: [] };

const handlers = {
    [RESTAURANT_DATA_LOADING]: (state, action) => ({ restaurantDataLoading: true, restaurantData: [] }),
    [RESTAURANT_DATA_ARRIVED]: (state, action) => ({ restaurantDataLoading: false, restaurantData: action.payload })
};

export default createReducer(initialState, handlers);
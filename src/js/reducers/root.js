import { combineReducers } from 'redux';
import restaurants from './restaurants';
import session from './session';

const combineReducer =  combineReducers({
  restaurants,
  session
});

export default combineReducer;
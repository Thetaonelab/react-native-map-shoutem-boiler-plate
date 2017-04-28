import { INITIALIZE } from '../reduxActions';
import { createReducer } from './utils';


const initialState = { init:false };

const handlers = {
    [INITIALIZE]: (state, action) => ({ init:true })
};

export default createReducer(initialState, handlers);
import { createStore, compose, applyMiddleware } from 'redux';
import _root from './reducers/root';
import thunk from 'redux-thunk';

const composeE = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let middleware = [ thunk ]

export default createStore(_root,{},composeE(applyMiddleware(...middleware)))
//export default composeE(applyMiddleware(...middleware))(createStore)(_root);

import { createStore, compose, applyMiddleware } from 'redux';
import _root from './reducers/root';
import thunk from 'redux-thunk';

//const _root = require('./reducers/root')
const composeE = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeE = compose;
console.log(_root)

let middleware = [ thunk ]

export default createStore(_root,{},composeE(applyMiddleware(...middleware)))
//export default composeE(applyMiddleware(...middleware))(createStore)(_root);

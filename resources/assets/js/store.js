import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';
const Store = createStore(
   
    applyMiddleware(thunk)
);
export default Store;
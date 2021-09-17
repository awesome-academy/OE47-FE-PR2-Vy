import { combineReducers } from 'redux';
import productReducer from './../../features/ProductSlice';
import filterReducer from './../../features/FilterSlice';

export default combineReducers({
    products: productReducer,
    filter: filterReducer
});

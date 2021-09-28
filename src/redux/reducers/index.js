import { combineReducers } from 'redux';
import productReducer from './../../features/ProductSlice';
import filterReducer from './../../features/FilterSlice';
import productDetailReducer from './../../features/ProductDetailSlice';
import cartReducer from './../../features/CartSlice';
import authReducer from './../../features/AuthSlice';

export default combineReducers({
    products: productReducer,
    filter: filterReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    auth: authReducer,
});

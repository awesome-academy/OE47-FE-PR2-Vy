import { combineReducers } from 'redux';
import productReducer from './../../features/ProductSlice';
import filterReducer from './../../features/FilterSlice';
import productDetailReducer from './../../features/ProductDetailSlice';
import cartReducer from './../../features/CartSlice';
import authReducer from './../../features/AuthSlice';
import userReducer from './../../features/UserSlice';

export default combineReducers({
    products: productReducer,
    filter: filterReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    auth: authReducer,
    user: userReducer,
});

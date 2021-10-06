import { combineReducers } from 'redux';
import productReducer from './../../features/ProductSlice';
import filterReducer from './../../features/FilterSlice';
import productDetailReducer from './../../features/ProductDetailSlice';
import cartReducer from './../../features/CartSlice';
import authReducer from './../../features/AuthSlice';
import userReducer from './../../features/UserSlice';
import orderReducer from './../../features/OrderSlice';
import commentReducer from './../../features/CommentSlice';
import manageOrderReducer from './../../features/ManageOrderSlice';
import manageProductReducer from './../../features/ManageProductSlice';
import manageUserReducer from './../../features/ManageUserSlice';

export default combineReducers({
    products: productReducer,
    filter: filterReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    auth: authReducer,
    user: userReducer,
    order: orderReducer,
    comment: commentReducer,
    comment: commentReducer,
    manageOrder: manageOrderReducer,
    manageProduct: manageProductReducer,
    manageUser: manageUserReducer,
});

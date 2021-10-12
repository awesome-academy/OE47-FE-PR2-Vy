import React, { useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Homepage from '../homepage/Homepage';
import Shop from './../homepage/Shop';
import Login from './../homepage/Login';
import Register from './../homepage/Register';
import Checkout from './../homepage/Checkout';
import Products from '../homepage/Products';
import ShoppingCart from './../homepage/ShoppingCart/ShoppingCart';
import PrivateRoute from './../../route/router/PrivateRoute';
import PublicRoute from './../../route/router/PublicRoute';
import ProtectedRoute from '../../route/router/ProtectedRoute';
import ManageOrders from '../admin/manage-order/ManageOrders';
import Profile from './../homepage/profile/Profile';
import ManageProducts from '../admin/manage-product/ManageProducts';
import ManageUsers from '../admin/manage-user/ManageUsers';
import Dashboard from './../admin/Dashboard';
import Wishlist from './../homepage/Wishlist';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../features/UserSlice';

const HomepageLayout = () => {
    const status = useSelector(state => state.user.status);
    const accessToken = localStorage.getItem('accessToken') || null;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfile(accessToken));
    }, [status]);

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <PublicRoute
                        exact
                        path="/"
                        component={Homepage}
                    />
                    <PublicRoute
                        exact
                        path="/shop"
                        component={Shop}
                    />
                    <PrivateRoute
                        exact
                        path="/wishlist"
                        component={Wishlist}
                    />
                    <PublicRoute
                        exact
                        path="/login"
                        component={Login}
                    />
                    <PublicRoute
                        exact
                        path="/register"
                        component={Register} />
                    <PrivateRoute
                        exact
                        path="/checkout"
                        component={Checkout} />
                    <PublicRoute
                        exact
                        path="/detail/:id/:name"
                        component={Products} />
                    <PrivateRoute
                        exact
                        path="/cart"
                        component={ShoppingCart}
                    />
                    <PrivateRoute
                        exact
                        path="/profile"
                        component={Profile}
                    />
                    <ProtectedRoute
                        exact
                        path="/admin"
                        component={Dashboard}
                    />
                    <ProtectedRoute
                        exact
                        path="/admin/manage-orders"
                        component={ManageOrders}
                    />
                    <ProtectedRoute
                        exact
                        path="/admin/manage-products"
                        component={ManageProducts}
                    />
                    <ProtectedRoute
                        exact
                        path="/admin/manage-users"
                        component={ManageUsers}
                    />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default HomepageLayout;

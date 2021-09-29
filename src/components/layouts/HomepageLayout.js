import React, { useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Blog from '../homepage/Blog';
import Contact from '../homepage/Contact';
import Homepage from '../homepage/Homepage';
import Shop from './../homepage/Shop';
import Login from './../homepage/Login';
import Register from './../homepage/Register';
import Checkout from './../homepage/Checkout';
import Products from '../homepage/Products';
import ShoppingCart from './../homepage/ShoppingCart/ShoppingCart';
import PrivateRoute from './../../route/router/PrivateRoute';
import { PublicRoute } from './../../route/router/PublicRoute';
import { useEffect } from 'react';
import Profile from './../homepage/Profile';

const HomepageLayout = (props) => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <PublicRoute exact path="/" component={Homepage} />
                    <PublicRoute exact path="/shop" component={Shop} />
                    <PublicRoute exact path="/blog" component={Blog} />
                    <PublicRoute exact path="/contact" component={Contact} />
                    <PublicRoute exact path="/login" component={Login} />
                    <PublicRoute exact path="/register" component={Register} />
                    <PublicRoute exact path="/checkout" component={Checkout} />
                    <PublicRoute exact path="/detail/:id/:name" component={Products} />
                    <PrivateRoute exact path="/cart" component={ShoppingCart} />
                    <PrivateRoute
                        exact
                        path="/profile"
                        component={Profile}
                    />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default HomepageLayout;

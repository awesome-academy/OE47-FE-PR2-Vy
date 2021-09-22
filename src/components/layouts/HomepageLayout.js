import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blog from '../homepage/Blog';
import Contact from '../homepage/Contact';

import Homepage from '../homepage/Homepage';
import Footer from '../homepage/partials/Footer';
import Header from '../homepage/partials/Header';
import Shop from './../homepage/Shop';
import Login from './../homepage/Login';
import Register from './../homepage/Register';
import ShoppingCar from './../homepage/ShoppingCart';
import Checkout from './../homepage/Checkout';

const HomepageLayout = (props) => {

    return (
        <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/cart" component={ShoppingCar} />
                    <Route exact path="/checkout" component={Checkout} />
                </Switch>

                <Footer />
            </BrowserRouter>

        </>
    );

}

export default HomepageLayout;

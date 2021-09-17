import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { router } from '../../../route/constants';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import DropdownCart from '../DropdownCart';
import { useDispatch, useSelector } from 'react-redux';
import { getCartLocalStorage } from '../../../features/CartSlice';
import PersonIcon from '@mui/icons-material/Person';

const Header = (props) => {
    const cart = useSelector(state => state.cart.products);
    const total = useSelector(state => state.cart.total);
    const loading = useSelector(state => state.cart.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartLocalStorage());
    }, []);

    return (
        <header className="header-section">
            <div className="header-top">
                <div className="container">
                    <div className="ht-left">
                        <div className="mail-service">
                            <i className=" fa fa-envelope" />
                            hello.colorlib@gmail.com
                        </div>
                        <div className="phone-service">
                            <i className="fa fa-phone" />
                            +65 11.188.888
                        </div>
                    </div>
                    <div className="ht-right">
                        <NavLink to={router.login} className="login-panel">
                            <PersonIcon />
                            <span>Login</span>
                        </NavLink>
                        <div className="lan-selector">
                            <img src="/images/flag-1.jpg" className="flag yt fnone" />
                            <img src="/images/flag-2.jpg" className="flag yu fnone" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="inner-header">
                    <div className="row">
                        <div className="col-lg-2 col-md-2">
                            <div className="logo">
                                <NavLink to={router.home}>
                                    <img src="/images/logo.png" alt="" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="advanced-search">
                                <button type="button" className="category-btn">All Categories</button>
                                <form action="#" className="input-group">
                                    <input type="text" placeholder="What do you need?" />
                                    <button type="button">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 text-right col-md-3">
                            <ul className="nav-right d-flex justify-content-end align-items-center" >
                                <li className="heart-icon">
                                    <NavLink to={router.wishlist}>
                                        <FavoriteBorderOutlinedIcon />
                                        <span>1</span>
                                    </NavLink>
                                </li>
                                <li className="cart-icon">
                                    <NavLink to={router.cart}>
                                        <ShoppingBasketOutlinedIcon />
                                        <span>{cart.length}</span>
                                    </NavLink>
                                    <DropdownCart
                                        cart={cart}
                                        loading={loading}
                                        total={total}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-item">
                <div className="container">
                    <nav className="nav-menu mobile-menu">
                        <ul>
                            <li><NavLink to={router.home}>Home</NavLink></li>
                            <li><NavLink to={router.shop}>Shop</NavLink></li>
                            <li><NavLink to={router.blog}>Blog</NavLink></li>
                            <li><NavLink to={router.contact}>Contact</NavLink></li>
                            <li><NavLink to={router.cart}>Shopping Cart</NavLink></li>
                            <li><NavLink to={router.cart}>My Profile</NavLink></li>
                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap">
                        <div className="slicknav_menu">
                            <a href="#" aria-haspopup="true" role="button" tabIndex={0} className="slicknav_btn slicknav_collapsed" style={{ outline: 'none' }}><span className="slicknav_menutxt">MENU</span><span className="slicknav_icon"><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /></span></a><nav className="slicknav_nav slicknav_hidden" style={{ display: 'none' }} aria-hidden="true" role="menu">
                                <ul>
                                    <li><a href="./index.html" role="menuitem">Home</a></li>
                                    <li><a href="./shop.html" role="menuitem">Shop</a></li>
                                    <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{ outline: 'none' }} /><a href="#">Collection</a>
                                        <span className="slicknav_arrow">►</span><ul className="dropdown slicknav_hidden" role="menu" style={{ display: 'none' }} aria-hidden="true">
                                            <li><a href="#" role="menuitem" tabIndex={-1}>Men's</a></li>
                                            <li><a href="#" role="menuitem" tabIndex={-1}>Women's</a></li>
                                            <li><a href="#" role="menuitem" tabIndex={-1}>Kid's</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./blog.html" role="menuitem">Blog</a></li>
                                    <li><a href="./contact.html" role="menuitem">Contact</a></li>
                                    <li className="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabIndex={-1} className="slicknav_item slicknav_row" style={{ outline: 'none' }} /><a href="#">Pages</a>
                                        <span className="slicknav_arrow">►</span><ul className="dropdown slicknav_hidden" role="menu" style={{ display: 'none' }} aria-hidden="true">
                                            <li><a href="./blog-details.html" role="menuitem" tabIndex={-1}>Blog Details</a></li>
                                            <li><NavLink to={router.cart}>Shopping Cart</NavLink></li>
                                            <li><NavLink to={router.checkout}>Checkout</NavLink></li>
                                            <li><NavLink to={router.register}>Register</NavLink></li>
                                            <li><NavLink to={router.login}>Login</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { routerHomepage } from '../../../route/constants';
import { useDispatch, useSelector } from 'react-redux';
import { getCartLocalStorage } from '../../../features/CartSlice';
import { Grid } from '@mui/material';
import DropdownCart from '../DropdownCart';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { getWishlist, handleLogoutUser } from './../../../features/UserSlice';
import CustomizedSnackbars from './../../alert/index';
import SearchProduct from './../SearchProduct';

const Header = () => {
    const cart = useSelector(state => state.cart.products);
    const total = useSelector(state => state.cart.total);
    const loading = useSelector(state => state.cart.loading);
    const profile = useSelector(state => state.user.profile);
    const wishlist = useSelector(state => state.user.wishlist);
    const dispatch = useDispatch();
    const history = useHistory();
    const [openAlert, setOpenAlert] = useState({
        open: false,
        text: '',
        severity: 'info'
    });

    useEffect(() => {
        dispatch(getCartLocalStorage());
        dispatch(getWishlist());
    }, []);

    const logoutUser = () => {
        dispatch(handleLogoutUser(profile.id));
        setOpenAlert({
            open: true,
            severity: 'success',
            text: 'LOGOUT SUCCESS!'
        });
        setTimeout(() => {
            history.push("/");
        }, 1000);
    }

    return (
        <header className="header-section">
            <div className="container">
                <div className="inner-header">
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <div className="logo">
                                <NavLink to={routerHomepage.home}>
                                    <img src="/images/logo.png" alt="" />
                                </NavLink>
                            </div>
                        </Grid>
                        <SearchProduct />
                        <Grid item xs={3}>
                            <ul className="nav-right d-flex justify-content-end align-items-center" >
                                <li className="heart-icon">
                                    <NavLink to={routerHomepage.wishlist}>
                                        <FavoriteBorderOutlinedIcon />
                                        <span>{wishlist.length}</span>
                                    </NavLink>
                                </li>
                                <li className="cart-icon">
                                    <NavLink to={routerHomepage.cart}>
                                        <ShoppingBasketOutlinedIcon />
                                        <span>{cart.length}</span>
                                    </NavLink>
                                    <DropdownCart
                                        cart={cart}
                                        loading={loading}
                                        total={total}
                                    />
                                </li>
                                {profile ?
                                    <div className="nav-depart">
                                        <div className="depart-btn login-panel avatar-user">
                                            <div className="avatar-user_container">
                                                {profile.image
                                                    ?
                                                    <img className="avatar-user_img" src={profile.image} alt="avatar-default-user" />
                                                    :
                                                    <img className="avatar-user_img" src="/images/avatar-default.jpg" alt="avatar-default-user" />
                                                }
                                            </div>
                                            <span>{`${profile.firstname} ${profile.lastname}`}</span>
                                        </div>
                                        <div className="depart-hover">
                                            {profile.role === "admin" && <NavLink to="/admin">Admin Page</NavLink>}
                                            <NavLink onClick={() => logoutUser()} to={routerHomepage.home}>Logout</NavLink>
                                        </div>
                                    </div>
                                    :
                                    <div className="login-panel">
                                        <PersonIcon />
                                        <NavLink to={routerHomepage.login}>Login</NavLink>
                                    </div>
                                }
                            </ul>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className="nav-item">
                <div className="container">
                    <nav className="nav-menu mobile-menu">
                        <ul>
                            <li><NavLink to={routerHomepage.home}>Home</NavLink></li>
                            <li><NavLink to={routerHomepage.shop}>Shop</NavLink></li>
                            <li><NavLink to={routerHomepage.cart}>Shopping Cart</NavLink></li>
                            <li><NavLink to={routerHomepage.profile}>My Profile</NavLink></li>
                            <li><NavLink to={routerHomepage.checkout}>Checkout</NavLink></li>
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
                                            <li><NavLink to={routerHomepage.cart}>Shopping Cart</NavLink></li>
                                            <li><NavLink to={routerHomepage.checkout}>Checkout</NavLink></li>
                                            <li><NavLink to={routerHomepage.register}>Register</NavLink></li>
                                            <li><NavLink to={routerHomepage.login}>Login</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <CustomizedSnackbars
                message={openAlert.text}
                severity={openAlert.severity}
                open={openAlert.open}
                setOpen={setOpenAlert}
            />
        </header>
    );
}

export default Header;

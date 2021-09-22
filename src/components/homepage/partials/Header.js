import React, { } from 'react';
import { NavLink } from 'react-router-dom';
import { router } from '../../../route/constants';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Header = (props) => {

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
                            <i className=" fa fa-phone" />
                            +65 11.188.888
                        </div>
                    </div>
                    <div className="ht-right">
                        <NavLink to={router.login} className="login-panel">
                            <i className="fa fa-user" />
                            Login
                        </NavLink>
                        <div className="lan-selector">
                            <div className="ddOutOfVision" id="countries_msddHolder" style={{ height: '0px', overflow: 'hidden', position: 'absolute' }}><select className="language_drop" name="countries" id="countries" style={{ width: '300px' }} tabIndex={-1}>
                                <option value="yt" data-image="./images/flag-1.jpg" data-imagecss="flag yt" data-title="English">English</option>
                                <option value="yu" data-image="img/flag-2.jpg" data-imagecss="flag yu" data-title="Bangladesh">German </option>
                            </select></div><div className="dd ddcommon borderRadius" id="countries_msdd" tabIndex={0} style={{ width: '300px' }}><div className="ddTitle borderRadiusTp"><span className="divider" /><span className="ddArrow arrowoff" /><span className="ddTitleText " id="countries_title"><img src="./images/flag-1.jpg" className="flag yt fnone" /><span className="ddlabel">English</span><span className="description" style={{ display: 'none' }} /></span></div><input id="countries_titleText" type="text" autoComplete="off" className="text shadow borderRadius" style={{ display: 'none' }} /><div className="ddChild ddchild_ border shadow" id="countries_child" style={{ zIndex: 1, position: 'absolute', visibility: 'visible', height: '51px', top: '24px', display: 'none' }}><ul><li className="enabled _msddli_ selected" title="English"><img src="./images/flag-1.jpg" className="flag yt fnone" /><span className="ddlabel">English</span><div className="clear" /></li><li className="enabled _msddli_" title="Bangladesh"><img src="img/flag-2.jpg" className="flag yu fnone" /><span className="ddlabel">German</span><div className="clear" /></li></ul></div></div>
                        </div>
                        <div className="top-social">
                            <a href="#"><i className="ti-facebook" /></a>
                            <a href="#"><i className="ti-twitter-alt" /></a>
                            <a href="#"><i className="ti-linkedin" /></a>
                            <a href="#"><i className="ti-pinterest" /></a>
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
                                    <img src="./images/logo.png" alt="" />
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
                                        <span>3</span>
                                    </NavLink>
                                    <div className="cart-hover">
                                        <div className="select-items">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className="si-pic"><img src="./images/products/product-1.jpg" alt="" /></td>
                                                        <td className="si-text">
                                                            <div className="product-selected">
                                                                <p>$60.00 x 1</p>
                                                                <h6>Kabino Bedside Table</h6>
                                                            </div>
                                                        </td>
                                                        <td className="si-close">
                                                            <i className="ti-close" />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="si-pic"><img src="./images/products/product-1.jpg" alt="" /></td>
                                                        <td className="si-text">
                                                            <div className="product-selected">
                                                                <p>$60.00 x 1</p>
                                                                <h6>Kabino Bedside Table</h6>
                                                            </div>
                                                        </td>
                                                        <td className="si-close">
                                                            <i className="ti-close" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="select-total">
                                            <span>total:</span>
                                            <h5>$120.00</h5>
                                        </div>
                                        <div className="select-button">
                                            <a href="#" className="primary-btn view-card">VIEW CARD</a>
                                            <a href="#" className="primary-btn checkout-btn">CHECK OUT</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="cart-price">$150.00</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-item">
                <div className="container">
                    <div className="nav-depart">
                        <div className="depart-btn">
                            <i className="ti-menu" />
                            <span>All departments</span>
                            <ul className="depart-hover">
                                <li className="active"><a href="#">Women’s Clothing</a></li>
                                <li><a href="#">Men’s Clothing</a></li>
                                <li><a href="#">Underwear</a></li>
                                <li><a href="#">Kid's Clothing</a></li>
                                <li><a href="#">Brand Fashion</a></li>
                                <li><a href="#">Accessories/Shoes</a></li>
                                <li><a href="#">Luxury Brands</a></li>
                                <li><a href="#">Brand Outdoor Apparel</a></li>
                            </ul>
                        </div>
                    </div>
                    <nav className="nav-menu mobile-menu">
                        <ul>
                            <li><NavLink to={router.home}>Home</NavLink></li>
                            <li><NavLink to={router.shop}>Shop</NavLink></li>
                            <li><NavLink to={router.blog}>Blog</NavLink></li>
                            <li><NavLink to={router.contact}>Contact</NavLink></li>
                            <li><a href="#">Pages</a>
                                <ul className="dropdown">
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                    <li><NavLink to={router.cart}>Shopping Cart</NavLink></li>
                                    <li><NavLink to={router.checkout}>Checkout</NavLink></li>
                                    <li><NavLink to={router.register}>Register</NavLink></li>
                                    <li><NavLink to={router.login}>Login</NavLink></li>
                                </ul>
                            </li>
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
                            </nav></div></div>
                </div>
            </div>
        </header>

    );

}

export default Header;
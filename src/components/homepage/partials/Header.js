import React, { } from 'react';
import { NavLink } from 'react-router-dom';

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
                        <a href="#" className="login-panel"><i className="fa fa-user" />Login</a>
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
                                <a href="./index.html">
                                    <img src="data:image/webp;base64,UklGRiIBAABXRUJQVlA4TBYBAAAvV4AFEI9AkG1Tmale/QoCgSSZ/R0mEwikOIsJJsi2me3sd4QnqI+dXRCQJElyImW2pBoadv7/3BKoVceI/k8AXplJUhCvJJkR3Xky/1cJnn3JhT/LXEjWgU6S3ZiSSBbZQ6OS7NPIJCl3Ce0aafTb7lXa8zErT6rGqDjBfEtww5EumIym4xzXhwh1nRjJG6pMTCns8OrEYshDisoAsJ3o0Nv00gEgqf6QpEShOFORVQZMowNAVe0OQZB6NZqDxdB99yRQn3Fcg1Ecpv0tMMQoAQBDimK76/Nlfi4oqqiNnkzoI5NMrxHFNjGydyQWWYE1keRrdiPagcFweQ3kghob78Hi1O6MHBG8CFsnWQc8YJWssux4DA==" alt="" data-pagespeed-url-hash={1652065695} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="advanced-search">
                                <button type="button" className="category-btn">All Categories</button>
                                <form action="#" className="input-group">
                                    <input type="text" placeholder="What do you need?" />
                                    <button type="button">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 text-right col-md-3">
                            <ul className="nav-right">
                                <li className="heart-icon"><a href="#">
                                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                                    <span>1</span>
                                </a>
                                </li>
                                <li className="cart-icon"><a href="#">
                                    <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                                    <span>3</span>
                                </a>
                                    <div className="cart-hover">
                                        <div className="select-items">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className="si-pic"><img src="data:image/webp;base64,UklGRvABAABXRUJQVlA4IOQBAABwDACdASpGAEYAPm0ylkckIyIhqlQKWIANiWcA1WGLg72RTlG9GjOvoizGSSN+36xyU/QF8a+os7ZJl6KvZmgfSQR3wWzyvkGUg3tuYZWJRVVG69yP7mbdiW0zUo1ek4m4/ruMa8+jXfpPAwAA/vsNFaChzMEk1xhyOA+1fI7xPdgjri8iBhHMyY4ZV/4wFnSzpBDIm6yy+jLMsuhCcFexgVBv4AIoqE5gIOcD8A6hMsGruOzWGaQFFg47OqZS/AlsbLGS0Qtx3jWnANWHRF9cg4uIW+O4H4/dz+NejgEYbZwNZ7ClvsSqnEKiTJ5iL9IMtY72Ie5RoXnKiB3zL3ZEBi7JyPqE0ZfNLxwCKBxcNcRGvPHotGMLhdqhP7mfLftB5zV8Kajftr99adPh7Cdiznjnj22LIpTHXOLFCDSoEgEX+lVO06nJ9gSZuVRzXnkjSVLeVUk9BYWG7eLVUcCU90FSpvqIPp2eTxh8opmmGmraWzr39KAEomEGvOZ9ahfHYR5n0zKh+u9BFze2VfX9jrTjA6+sIAMNwYc3rSJjrFy+XHjvLFeU251btGRtxFZ6iU9aIndcMwM6l5xddY9Vk+N1OCgj9YpM8NmlzcBCwnfSEf4pXa8LrvK+YZRBweAamEAA" alt="" data-pagespeed-url-hash={697362414} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /></td>
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
                                                        <td className="si-pic"><img src="data:image/webp;base64,UklGRvoCAABXRUJQVlA4IO4CAADwDwCdASpGAEYAPm0ylEekIyIhqPSaqIANiUAPL0RW+XgJ/9jdAc7B6AN4p/Y72GP1g61HIo9pd64x62+s5egH1O1soy7olYtrms4m5OqZvtFnRDgQ42YjdeW2lK//Bwa0IGb4Qzr4JK/v4QQ8I82bQDDdg44JhemmweUMZX9IxvW6NHN+neIAAP77cJfuudPn0fnL2+D4z++Q5HQxog9JjomGB25aDxX94c9dm9UFpwO8zeL+6sX1uuE6AanashgDRWP+jIzBH/L7bGvuav8mhkJ7K2N3pclwXzcv/4yw5VCZ77U1muEDydjtjTz6v9JguxcYzOnMIt93X7rhMb5lzPy9B6mjo9zQCbEbnycly5z0Pc3Rqs61vGUSwpvOV5F89sfFl5PiiU0wRy7doiE+dJvVCt/jC09tPz8GwcQaZMUwSAzKyxpmZsutI1vLrApYyxM+Ko9LFvrhEE/lyin7OeMmK7nTGlHqQYujJuHT83gq//EZJu3F1E1v1KxmANB0zlejc2ZNQ1kY7nbwmGugbv7siU6dS+wUHTkyBP1PVa/g7oICmVxySRkr/j/8HrbIXfHTmsee1rhMqn8NP3g5R1sj97px2X2ArmhYxAemzHSjj4+ztFN9fKzA8wRV6xAG+xiTSTkyzIreX9h+BY6zGx6RJrz48B/ntbqW/F5avaSHuXoIdH85kJcbV4A9T4U/yWmueN9XARZ2OOz9AQ16TsZSNJPG/KMyOgmhIAWbIfabZwe8BwQrh8mtFRzyjORgDQ6H0tetZOnV8P65ELc8eBChpR1lsbwT2gfwUQGJVA4YNY3UMDOrnLUr6mysT0K2mcHwiik6bElrIPppkTGFOlU2GcUBWdOv+hV8lf2CQ+fbvarWZzsS5uC1nBYsjBsexYqMRQrQ5uwkxbmR7IDKCx/URHe+4FnCf14Hy93SIM4M9foR6lMsFwujSqNSVWIifStpfuJuMYpG5S//yz/BwxHz/ur/VLVm06x+AAA=" alt="" data-pagespeed-url-hash={991862335} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" /></td>
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
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/shop">Shop</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><a href="#">Pages</a>
                                <ul className="dropdown">
                                    <li><a href="./blog-details.html">Blog Details</a></li>
                                    <li><NavLink to="/cart">Shopping Cart</NavLink></li>
                                    <li><NavLink to="/checkout">Checkout</NavLink></li>
                                    <li><NavLink to="/register">Register</NavLink></li>
                                    <li><NavLink to="/login">Login</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <div id="mobile-menu-wrap"><div className="slicknav_menu"><a href="#" aria-haspopup="true" role="button" tabIndex={0} className="slicknav_btn slicknav_collapsed" style={{ outline: 'none' }}><span className="slicknav_menutxt">MENU</span><span className="slicknav_icon"><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /><span className="slicknav_icon-bar" /></span></a><nav className="slicknav_nav slicknav_hidden" style={{ display: 'none' }} aria-hidden="true" role="menu">
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
                                    <li><a href="./shopping-cart.html" role="menuitem" tabIndex={-1}>Shopping Cart</a></li>
                                    <li><a href="./check-out.html" role="menuitem" tabIndex={-1}>Checkout</a></li>
                                    <li><a href="./faq.html" role="menuitem" tabIndex={-1}>Faq</a></li>
                                    <li><a href="./register.html" role="menuitem" tabIndex={-1}>Register</a></li>
                                    <li><a href="./login.html" role="menuitem" tabIndex={-1}>Login</a></li>
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
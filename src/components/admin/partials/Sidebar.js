import React from 'react';
import { NavLink } from 'react-router-dom';
import { routerAdmin, routerHomepage } from '../../../route/constants';

const Sidebar = () => {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <NavLink to={routerHomepage.home} className="nav-link mt-1">
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-tachometer-alt" />
                            </div>
                            E-commerce
                        </NavLink>
                        <div className="sb-sidenav-menu-heading">Interface</div>
                        <NavLink to={routerAdmin.home} className="nav-link collapsed" >
                            Dashboard
                        </NavLink>
                        <NavLink to={routerAdmin.manageOrders} className="nav-link collapsed" >
                            Manage Orders
                        </NavLink>
                        <NavLink to={routerAdmin.manageUsers} className="nav-link collapsed" >
                            Manage Users
                        </NavLink>
                        <NavLink to={routerAdmin.manageProducts} className="nav-link collapsed"  >
                            Manage Products
                        </NavLink>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Start Bootstrap
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;

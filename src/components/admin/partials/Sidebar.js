import React from 'react';
import { NavLink } from 'react-router-dom';
import { routerAdmin } from '../../../route/constants';

const Sidebar = () => {
    return (
        <div id="layoutSidenav_nav" className="bg-dark">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
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
            </nav>
        </div>
    );
}

export default Sidebar;

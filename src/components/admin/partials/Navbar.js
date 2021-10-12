import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleLogoutUser } from './../../../features/UserSlice';
import CustomizedSnackbars from '../../alert';
import { NavLink, useHistory } from 'react-router-dom';
import { routerHomepage } from './../../../route/constants';

const Navbar = ({ profile }) => {
    const dispatch = useDispatch();
    const [openAlert, setOpenAlert] = useState({
        open: false,
        text: '',
        severity: 'info'
    });
    const history = useHistory();

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
        <>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark justify-content-between">
                <NavLink className="navbar-brand ps-3" to={routerHomepage.home}>E-commerce</NavLink>
                <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle avatar-user" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {profile.image
                            ?
                            <img className="avatar-user_img" src={profile.image} alt="avatar-default-user" />
                            :
                            <img className="avatar-user_img" src="/images/avatar-default.jpg" alt="avatar-default-user" />
                        }
                        <span>{`${profile.lastname} ${profile.firstname}`}</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#!" onClick={() => logoutUser()} >Logout</a></li>
                    </ul>
                </div>
            </nav>
            <CustomizedSnackbars
                message={openAlert.text}
                severity={openAlert.severity}
                open={openAlert.open}
                setOpen={setOpenAlert}
            />
        </>
    );
}

export default Navbar;

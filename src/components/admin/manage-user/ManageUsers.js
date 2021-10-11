import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, resetStatus } from '../../../features/ManageUserSlice';
import CustomSpinner from '../../../UI/CustomSpinner';
import { compare } from '../../../ultils';
import CustomizedSnackbars from '../../alert';
import UserItem from './UserItem';

const ManageUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.manageUser.users);
    const loading = useSelector(state => state.manageUser.loading);
    const [search, setSearch] = useState("");
    const status = useSelector(state => state.manageUser.status);
    const [openAlert, setOpenAlert] = useState({
        open: false,
        text: '',
        severity: 'info'
    });

    useEffect(() => {
        dispatch(getUsers());
    }, [status]);

    useEffect(() => {
        checkStatus(status);
        dispatch(resetStatus());
    }, [status]);

    const checkStatus = (status) => {
        switch (status) {
            case 'changeRoleUserSuccess':
                setOpenAlert({
                    open: true,
                    severity: "success",
                    text: "CHANGE YOUR ROLE OF USER SUCCESS!"
                });
                break;
            case 'changeRoleUserFailed':
                setOpenAlert({
                    open: true,
                    severity: "error",
                    text: "CHANGE YOUR ROLE OF USER FAILED. PLEASE TRY AGAIN!"
                });
                break;
            case 'changeActiveUserSuccess':
                setOpenAlert({
                    open: true,
                    severity: "success",
                    text: "CHANGE YOUR ACTIVE OF USER SUCCESS!"
                });
                break;
            case 'changeActiveUserFailed':
                setOpenAlert({
                    open: true,
                    severity: "error",
                    text: "CHANGE YOUR ACTIVE OF USER SUCCESS. PLEASE TRY AGAIN!"
                });
                break;
            default:
                break;
        }
    }

    const renderUser = (arr) => {
        return arr.map((value, key) => {
            return (
                <UserItem
                    user={value}
                    key={key}
                />
            )
        })
    }

    const renderResultSearch = (arr, search) => {
        return arr.reduce((array, item) => {
            return (compare(item.firstname).indexOf(compare(search)) !== -1 || compare(item.lastname).indexOf(compare(search)) !== -1) && [...array, item.base64]
        }, []);
    };

    return (
        <>
            <div className="d-flex align-items-center justify-content-between m-4">
                <h4 className="">Manage Users</h4>
                <div className="d-flex align-items-center">
                    <input className="admin-search-input" placeholder="Search users..." onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="cart-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th className="p-name">firstname</th>
                                    <th className="p-name">lastname</th>
                                    <th>email</th>
                                    <th>Role</th>
                                    <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    loading
                                        ?
                                        <CustomSpinner />
                                        :
                                        renderUser(renderResultSearch(users, search))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <CustomizedSnackbars
                message={openAlert.text}
                severity={openAlert.severity}
                open={openAlert.open}
                setOpen={setOpenAlert}
            />
        </>
    );
}

export default ManageUsers;

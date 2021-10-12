import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder, resetStatus, setPage } from '../../../features/ManageOrderSlice';
import CustomSpinner from '../../../UI/CustomSpinner';
import { compare } from '../../../ultils';
import CustomizedSnackbars from '../../alert';
import OrderItem from './OrderItem';
import Paginations from './../../homepage/partials/Pagination';

const ManageOrders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.manageOrder.orders);
    const loading = useSelector(state => state.manageOrder.loading);
    const [search, setSearch] = useState('');
    const status = useSelector(state => state.manageOrder.status);
    const totalPage = useSelector(state => state.manageOrder.totalPage);
    const pagination = useSelector(state => state.manageOrder.pagination);
    const [openAlert, setOpenAlert] = useState({
        open: false,
        text: '',
        severity: 'info'
    });

    useEffect(() => {
        dispatch(getOrder(pagination));
    }, [status, pagination]);

    useEffect(() => {
        if (status === 'changeStatusOrderSuccess') {
            setOpenAlert({
                open: true,
                severity: "success",
                text: "CHANGE YOU STATUS ORDER SUCCESS!"
            });

        }
        if (status === 'changeStatusOrderFailed') {
            setOpenAlert({
                open: true,
                severity: "success",
                text: "CHANGE YOU STATUS ORDER FAILED.PLEASE TRY AGAIN!"
            });
        }
        dispatch(resetStatus());
    }, [status]);

    const renderOrderItem = (arr) => {
        return arr.map((value, key) => {
            return (
                <OrderItem
                    orderItem={value}
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

    const handleChangePage = (e) => {
        dispatch(setPage(e));
    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-between m-4">
                <h4 className="">Manage Users</h4>
                <div className="d-flex align-items-center">
                    <input className="admin-search-input" placeholder="Search order..." onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="cart-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th className="p-name">infomation</th>
                                    <th>user id</th>
                                    <th className="p-name">order detail</th>
                                    <th>Payment</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    loading
                                        ?
                                        <CustomSpinner />
                                        :
                                        renderOrderItem(renderResultSearch(orders, search))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Paginations
                handleChangePage={handleChangePage}
                totalPage={totalPage}
                page={pagination._page}
            />
            <CustomizedSnackbars
                message={openAlert.text}
                severity={openAlert.severity}
                open={openAlert.open}
                setOpen={setOpenAlert}
            />
        </>
    );
}

export default ManageOrders;

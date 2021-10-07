import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BootstrapButton } from '../../../UI/BootstrapButton';
import CustomSpinner from '../../../UI/CustomSpinner';
import { renderResultSearch } from '../../../ultils';
import { getProducts, resetStatus, setPage } from './../../../features/ManageProductSlice';
import ProductItem from './ProductItem';
import CreateProduct from './CreateProduct';
import CustomizedSnackbars from '../../alert';
import Paginations from './../../homepage/partials/Pagination';

const ManageProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.manageProduct.products);
    const loading = useSelector(state => state.manageProduct.loading);
    const totalPage = useSelector(state => state.manageProduct.totalPage);
    const pagination = useSelector(state => state.manageProduct.pagination);
    const [search, setSearch] = useState('');
    const [openCreateNewProductModal, setOpenCreateNewProductModal] = useState(false);
    const status = useSelector(state => state.manageProduct.status);
    const [openAlert, setOpenAlert] = useState({
        open: false,
        text: '',
        severity: 'info'
    });

    useEffect(() => {
        dispatch(getProducts(pagination));
    }, [status, pagination]);

    useEffect(() => {
        checkStatus(status);
        dispatch(resetStatus());
    }, [status]);

    const checkStatus = (status) => {
        switch (status) {
            case 'createProductSuccess':
                setOpenAlert({
                    open: true,
                    severity: 'success',
                    text: 'CREATE PRODUCT SUCCESS!'
                });
                break;
            case 'createProductFailed':
                setOpenAlert({
                    open: true,
                    severity: 'error',
                    text: 'CREATE PRODUCT FAILED!'
                });
                break;
            case 'updateProductSuccess':
                setOpenAlert({
                    open: true,
                    severity: 'success',
                    text: 'UPDATE PRODUCT SUCCESS!'
                });
                break;
            case 'updateProductFailed':
                setOpenAlert({
                    open: true,
                    severity: 'error',
                    text: 'UPDATE PRODUCT FAILED!'
                });
                break;
            case 'deleteProductSuccess':
                setOpenAlert({
                    open: true,
                    severity: 'success',
                    text: 'DELETE PRODUCT SUCCESS!'
                });
                break;
            case 'deleteProductFailed':
                setOpenAlert({
                    open: true,
                    severity: 'error',
                    text: 'DELETE PRODUCT FAILED!'
                });
                break;
            default:
                break;
        }
    }

    const renderProductItem = (arr) => {
        return arr.map((value, key) => {
            const stt = key + 1;
            return (
                <ProductItem
                    product={value}
                    stt={stt}
                />
            )
        })
    }

    const handleChangePage = (e) => {
        dispatch(setPage(e));
    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-between m-4">
                <h4 className="">Manage Product</h4>
                <div className="d-flex align-items-center">
                    <input className="admin-search-input me-4" placeholder="Search products..." onChange={(e) => setSearch(e.target.value)} />
                    <BootstrapButton onClick={() => setOpenCreateNewProductModal(true)}>
                        CREATE PRODUCT
                    </BootstrapButton>
                </div>
            </div>
            <div class="card-body">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cart-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th className="p-name">name</th>
                                        <th className="p-name">price</th>
                                        <th>#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loading
                                            ?
                                            <CustomSpinner />
                                            :
                                            renderProductItem(renderResultSearch(products, search))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <CreateProduct
                open={openCreateNewProductModal}
                setOpen={setOpenCreateNewProductModal}
            />
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

export default ManageProducts;

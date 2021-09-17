import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleChangeEntriesPerPage, handleSortPrice } from '../../../features/FilterSlice';
import Paginations from '../partials/Pagination';

const ShopHeader = (props) => {
    const [sorting, setSorting] = useState();
    const [entriesPerPage, setEntriesPerPage] = useState();
    const dispatch = useDispatch();

    const handleSorting = (e) => {
        if (e.target.value !== sorting) {
            setSorting(e.target.value);
            dispatch(handleSortPrice(e.target.value));
        }
    }

    const changeEntriesPerPage = (e) => {
        if (e.target.value !== entriesPerPage) {
            setEntriesPerPage(e.target.value);
            dispatch(handleChangeEntriesPerPage(e.target.value));
        }
    }

    return (
        <div className={`product-show-option product-show-option${props.margin == "top" ? "_margin-top" : "_margin-bottom"}`}>
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-7 col-md-7">
                    <div className="select-option">
                        <select className="sorting" onChange={handleSorting}>
                            <option value="instant_search">Default Sorting</option>
                            <option value="asc">Price ASC</option>
                            <option value="desc">Price DESC</option>
                        </select>
                        <select className="p-show" onChange={changeEntriesPerPage}>
                            <option value="9">Show:</option>
                            <option value="6">6</option>
                            <option value="12">12</option>
                            <option value="18">18</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 text-right">
                    <Paginations />
                </div>
            </div>
        </div>
    );
}

export default ShopHeader;

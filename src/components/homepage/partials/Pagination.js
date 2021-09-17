import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleChagePage } from '../../../features/FilterSlice';
import { Pagination, Stack } from '@mui/material';


const Paginations = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPage = useSelector(state => state.products.totalPage);
    const page = useSelector(state => state.filter._page);
    const dispatch = useDispatch();

    const handlePageClick = (e, value) => {
        if (value !== currentPage) {
            setCurrentPage(value);
            dispatch(handleChagePage(value));
        }
    };

    useEffect(() => {
        setCurrentPage(page);
    }, [page]);

    return (
        <>
            <Stack spacing={2}>
                <Pagination
                    className="justify-content-end"
                    count={totalPage}
                    boundaryCount={2}
                    size="small"
                    onChange={handlePageClick}
                    page={currentPage}
                />
            </Stack>
        </>
    );
}

export default Paginations;

import React, { useEffect, useState } from 'react';
import { Pagination, Stack } from '@mui/material';

const Paginations = ({ page, totalPage, handleChangePage }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (e, value) => {
        if (value !== currentPage) {
            setCurrentPage(value);
            handleChangePage(value);
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

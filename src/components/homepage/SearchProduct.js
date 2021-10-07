import React, { useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { handleSearchName } from '../../features/FilterSlice';

const SearchProduct = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        dispatch(handleSearchName(debouncedSearchTerm));
    }, [debouncedSearchTerm]);

    return (
        <Grid item xs={7}>
            <div className="advanced-search">
                <form action="#" className="input-group">
                    <input type="text" placeholder="Search product" onChange={(e) => setSearchTerm(e.target.value)} />
                    <button type="button">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </form>
            </div>
        </Grid>
    );
}

export default SearchProduct;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handlerFilterByPrice } from '../../../features/FilterSlice';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { BootstrapButton } from './../../../UI/BootstrapButton';
import CloseIcon from '@mui/icons-material/Close';

const FilterPrice = () => {

    const [priceGte, setPriceGte] = useState();
    const [priceLte, setPriceLte] = useState();
    const [temp, setTemp] = useState(0);

    const dispatch = useDispatch();

    const condition = () => {
        return priceGte || priceLte;
    }

    const handleFilterPrice = () => {
        if (condition()) {
            dispatch(handlerFilterByPrice({ price_gte: priceGte, price_lte: priceLte }));
            setTemp(temp + 1);
        }
    }

    const resetPrice = () => {
        if (temp > 0) {
            dispatch(handlerFilterByPrice({}));
        }
        setPriceGte('');
        setPriceLte('');

    }

    return (
        <div className="filter-widget">
            <h4 className="fw-title">Price</h4>
            {condition() && <CloseIcon className="reset-price" onClick={resetPrice} />}
            <div className="filter-range-wrap">
                <div className="range-slider">
                    <div className="price-input">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '40%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField type="number" size="small" id="standard-basic" label="Min Price" variant="standard" value={priceGte} onChange={(e) => setPriceGte(e.target.value)} min="0" />
                            <TextField type="number" size="small" id="standard-basic" label="Max Price" variant="standard" value={priceLte} onChange={(e) => setPriceLte(e.target.value)} min="0" />
                        </Box>
                    </div>
                </div>
            </div>

            <BootstrapButton claFssName="filter-btn" variant="contained" disableRipple onClick={() => handleFilterPrice()} >
                Filter
            </BootstrapButton>
        </div>
    );

}

export default FilterPrice;

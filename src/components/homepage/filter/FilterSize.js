import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFilterBySize } from '../../../features/FilterSlice';
import { Stack, Chip } from '@mui/material';

const FilterSize = () => {
    const [sizeArr, setSizeArr] = useState([]);
    const size = useSelector(state => state.products.size);
    const dispatch = useDispatch();

    const handleFilterSize = (value) => {
        let temp = [...sizeArr];
        if (!(temp.some(val => val === value))) {
            temp = [...temp, value];
            setSizeArr(temp);
            dispatch(handleFilterBySize(temp));
        }
        else {
            temp = temp.filter(val => val !== value);
            setSizeArr(temp);
            dispatch(handleFilterBySize(temp));
        }
    }

    const renderSize = (arr) => {
        return arr && arr.map((value, key) => {
            return (
                <Chip key={key} label={value.name} color="warning" variant={
                    !(sizeArr.some(val => val === value.id)) ? "outlined" : "default"} onClick={() => handleFilterSize(value.id)} />
            )
        });
    }

    return (
        <div className="filter-widget">
            <h4 className="fw-title">Size</h4>
            <Stack direction="row" className="fw-size-choose" spacing={1}>
                {renderSize(size)}
            </Stack>
        </div>
    );
}

export default FilterSize;

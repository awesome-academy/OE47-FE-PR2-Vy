import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllFilter } from '../../../features/FilterSlice';
import { BootstrapButton } from '../../../UI/BootstrapButton';

const ClearButton = () => {
    const [show, setShow] = useState(false);
    const filtersApplied = useSelector(state => state.filter.filtersApplied);
    const dispatch = useDispatch();

    const clearFilterClick = () => {
        dispatch(clearAllFilter());
        setShow(false);
    }

    useEffect(() => {
        if (Object.keys(filtersApplied).length > 0) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }, [filtersApplied]);

    return (
        <>
            {show && <BootstrapButton className="site-btn w-100 p-2 mb-4" variant="contained" onClick={() => clearFilterClick()} >
                Clear All Filter
            </BootstrapButton>
            }
        </>
    );
}

export default ClearButton;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleFilterBrand } from '../../../features/FilterSlice';

const FilterBrand = (props) => {

    const [brand, setBrand] = useState([]);

    const brands = useSelector(state => state.products.brands);
    const dispatch = useDispatch();

    const filterByBrand = (name) => {

        let temp = [...brand];
        if (!(temp.some(val => val === name.target.value))) {
            temp = [...temp, name.target.value];
            setBrand(temp);
            dispatch(handleFilterBrand(temp));
        }
        else {
            temp = temp.filter(val => val !== name.target.value);
            setBrand(temp);
            dispatch(handleFilterBrand(temp));
        }
    }

    const renderBrands = (arr) => {
        return arr && arr.map((value, key) => {
            return (
                <div className="bc-item" key={key}>
                    <label htmlFor={value.name}>
                        {value.name}
                        <input type="checkbox" id={value.name} value={value.id}
                            onChange={(e) => filterByBrand(e)} />
                        <span className="checkmark" />
                    </label>
                </div>
            )
        });
    }

    return (
        <div className="filter-widget">
            <h4 className="fw-title">Brand</h4>
            <div className="fw-brand-check">
                {renderBrands(brands)}
            </div>
        </div>
    );

}

export default FilterBrand;

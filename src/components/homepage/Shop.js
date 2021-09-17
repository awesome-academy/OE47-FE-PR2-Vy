import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProduct, getTags, getBrands, getSize } from '../../features/ProductSlice';
import Breadcrumb from './Breadcrumb';
import ClearButton from './filter/ClearButton';
import FilterBrand from './filter/FilterBrand';
import FilterCategories from './filter/FilterCategories';
import FilterPrice from './filter/FilterPrice';
import FilterSize from './filter/FilterSize';
import RenderTag from './filter/RenderTag';
import ShopHeader from './filter/ShopHeader';
import ProductItem from './ProductItem';

const Shop = (props) => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const filter = useSelector(state => state.filter);
    console.log("filter: ", filter);
    useEffect(() => {
        const { filtersApplied, ...subfilter } = filter;
        let filterAll = { ...subfilter, ...filtersApplied };
        dispatch(getProduct(filterAll)).unwrap();
    }, [filter]);

    useEffect(() => {        
        dispatch(getCategories());
        dispatch(getBrands());
        dispatch(getTags());
        dispatch(getSize());
    }, []);

    const renderProduct = (arr) => {
        return arr.map((value, key) => {
            return (
                <ProductItem
                    col={"4"}
                    product={value}
                    key={key}
                />
            )
        });
    }

    return (
        <>
            <Breadcrumb />
            <section className="product-shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
                            <ClearButton />
                            <FilterCategories />
                            <FilterBrand />
                            <FilterPrice />
                            <FilterSize />
                            <RenderTag />
                        </div>
                        <div className="col-lg-9 order-1 order-lg-2">
                            <ShopHeader margin={"bottom"} />
                            <div className="product-list">
                                <div className="row">
                                    {renderProduct(products)}
                                </div>
                            </div>
                            <ShopHeader margin={"top"} />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );

}

export default Shop;
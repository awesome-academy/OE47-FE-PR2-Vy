import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from './../../features/ProductDetailSlice';
import { ButtonGroup, Container, Divider, Grid } from '@material-ui/core';
import CustomSpinner from '../../UI/CustomSpinner';
import { formatPrice, textCapitalize } from './../../ultils/index';
import { BootstrapButton } from './../../UI/BootstrapButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import RelatedView from './partials/RelatedView';
import useLocalStorage from '../../hooks/useLocalStorage';
import { setCarts, addToBag, getTotalByCart } from '../../features/CartSlice';
import _ from 'lodash';
import CustomizedSnackbars from '../alert';

const Products = (props) => {
    const [sizeChoose, setSizeChoose] = useState();
    const [colorChoose, setColorChoose] = useState();
    const [count, setCount] = useState(1);
    const [index, setIndex] = useState("1");
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.productDetail.product);
    const loading = useSelector(state => state.productDetail.loading);
    const [cart, setCart] = useLocalStorage('cart', []);
    const [total, setTotal] = useLocalStorage('total', 0);
    const [openAlert, setOpenAlert] = useState(false);

    const { image, detail, color, size } = product;

    useEffect(() => {
        dispatch(getProductDetails(id));
    }, []);

    useEffect(() => {
        product.size && setSizeChoose(product.size[0]);
        product.color && setColorChoose(product.color[0]);
    }, [product]);

    const handleChange = (event, newValue) => {
        setIndex(newValue);
    };

    const addToCart = (product, size, color, count) => {
        let params = { product, size, color, count };
        setCart(addToBag(params));
        setTotal(getTotalByCart(addToBag(params)));
        dispatch(setCarts(addToBag(params)));
        setOpenAlert(true);
    }

    const isShowButton = () => {
        return sizeChoose && colorChoose;
    }

    return (
        <>
            {loading ?
                <CustomSpinner />
                :
                <div className="product-detail spad">
                    <Container>
                        <Grid className="product-detail_container" container spacing={4}>
                            <Grid item xs={8}>
                                <Grid container spacing={2}>
                                    {image && image.map((value, key) => {
                                        return (
                                            <Grid item xs={key < 3 ? 4 : 6}>
                                                <img className="w-100" src={value} alt={`${product.name}-image-${key + 1}`} />
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <h3 className="product-detail_title">
                                    {product.name}
                                </h3>
                                <p className="product-detail_description">
                                    {product.brandId}
                                </p>
                                <p className="product-detail_price">
                                    {formatPrice(product.price)}
                                </p>
                                <div className="product-detail_color_container">
                                    <p className="product-detail_color_title">
                                        Color:
                                    </p>
                                    <ul className="list-unstyled list-inline product-detail_color_list">
                                        {color && color.map((value, key) => {
                                            return (
                                                <p key={key}>
                                                    <input type="radio" id={value} name="colorChoose" value={value} checked={colorChoose === value ? "checked" : null} onChange={(e) => setColorChoose(e.target.value)} />
                                                    <label for={value}>
                                                        {textCapitalize(value)}
                                                    </label>
                                                </p>
                                            )
                                        })
                                        }
                                    </ul>
                                </div>
                                <div className="product-detail_size_container">
                                    <p className="product-detail_size_title">
                                        Size:
                                    </p>
                                    <ul className="list-unstyled list-inline product-detail_size_list">
                                        {size && size.map((value, key) => {
                                            return (
                                                <p key={key}>
                                                    <input type="radio" id={value} name="sizeChoose" value={value} checked={sizeChoose === value ? "checked" : null} onChange={(e) => setSizeChoose(e.target.value)} />
                                                    <label for={value}>
                                                        {textCapitalize(value)}
                                                    </label>
                                                </p>
                                            )
                                        })
                                        }
                                    </ul>
                                </div>
                                <div className="product-detail_count">
                                    <div className="product-detail_count_container">
                                        <ButtonGroup className="btn-minus" size="small" aria-label="small button group" onClick={() => setCount(count === 1 ? 1 : count - 1)} >
                                            <RemoveIcon className="icon" sx={{ color: '#e7ab3c' }} />
                                        </ButtonGroup>
                                        <span className="input-count">{count}</span>
                                        <ButtonGroup className="btn-plus" size="small" aria-label="small button group" onClick={() => setCount(count + 1)}>
                                            <AddIcon className="icon" sx={{ color: '#e7ab3c' }} />
                                        </ButtonGroup>
                                    </div>
                                    <BootstrapButton className="product-detail_btn-add" variant="contained" disabled={!isShowButton()} onClick={() => addToCart(product, sizeChoose, colorChoose, count)} >
                                        ADD TO BAG
                                    </BootstrapButton>
                                </div>
                                <div className="product-detail_content">
                                    <Box sx={{ width: '100%', typography: 'body1' }}>
                                        <TabContext value={index}>
                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <TabList
                                                    TabIndicatorProps={{ style: { background: '#e7ab3c' } }}
                                                    onChange={handleChange}
                                                    aria-label="lab API tabs example"
                                                >
                                                    <Tab sx={{ color: '#e7ab3c' }} label="DESCRIPTION" value="1" />
                                                    <Tab label="DETAIL" value="2" />
                                                </TabList>
                                            </Box>
                                            <TabPanel value="1">
                                                {product.description}
                                            </TabPanel>
                                            <TabPanel value="2">
                                                <ul className="product-detail_detail-list">
                                                    {detail && Object.keys(detail).map((value, key) => {
                                                        return (
                                                            <li className="product-detail_detail-item" key={key}>
                                                                {textCapitalize(value)} : {textCapitalize(detail[value])}
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                                <p className="product-detail_detail-note">{product.note}</p>
                                                <Divider />
                                                <p className="product-detail_shipping-title">
                                                    SHIPPING & RETURN
                                                </p>
                                                <div className="product-detail_shipping-detail">
                                                    <p>Standard Delivery: within 6 - 9 working days</p>
                                                    <p>Express Delivery: within 3 - 5 working days</p>
                                                    <p>Find out more about our Returns & Exchanges.</p>
                                                    <p>All orders are currently shipped out from Vietnam.</p>
                                                </div>
                                            </TabPanel>
                                        </TabContext>
                                    </Box>
                                </div>
                            </Grid>
                        </Grid>
                        <RelatedView />
                    </Container>
                </div>
            }
            <CustomizedSnackbars
                message={`Add ${product.name} success to your cart !`}
                severity="success"
                open={openAlert}
                setOpen={setOpenAlert}
            />
        </>
    );
}

export default Products;

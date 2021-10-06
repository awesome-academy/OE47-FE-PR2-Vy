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
import { setCarts, addToBag, getTotalByCart, setCartTotal } from '../../features/CartSlice';
import _ from 'lodash';
import CustomizedSnackbars from '../alert';
import Comment from './Comment';

const Products = ({ profile }) => {
    const [sizeChoose, setSizeChoose] = useState();
    const [count, setCount] = useState(1);
    const [index, setIndex] = useState("1");
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.productDetail.product);
    const loading = useSelector(state => state.productDetail.loading);
    const [cart, setCart] = useLocalStorage('cart', []);
    const [total, setTotal] = useLocalStorage('total', 0);
    const [openAlert, setOpenAlert] = useState({
        open: false,
        text: '',
        severity: 'info'
    });

    const { image, size } = product;

    useEffect(() => {
        dispatch(getProductDetails(id));
    }, []);

    useEffect(() => {
        product.size && setSizeChoose(product.size[0]);
    }, [product]);

    const handleChange = (event, newValue) => {
        setIndex(newValue);
    };

    const addToCart = (product, size, count) => {
        let params = { product, size, count };
        let cartTemp = addToBag(params);
        let totalTemp = getTotalByCart(addToBag(params));
        setTotal(totalTemp);
        setCart(cartTemp);
        dispatch(setCarts(cartTemp));
        dispatch(setCartTotal(totalTemp));
        setOpenAlert({
            open: true,
            severity: 'success',
            text: `Add ${product.name} to your cart success!`
        });
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
                                <p className="product-detail_price">
                                    {formatPrice(product.price)}
                                </p>
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
                                    <BootstrapButton className="product-detail_btn-add" variant="contained" onClick={() => addToCart(product, sizeChoose, count)} >
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
                        <Comment
                            id={product.id}
                            profile={profile}
                        />
                        <RelatedView />
                    </Container>
                </div>
            }
            <CustomizedSnackbars
                message={openAlert.text}
                severity={openAlert.severity}
                open={openAlert.open}
                setOpen={setOpenAlert}
            />
        </>
    );
}

export default Products;

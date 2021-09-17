import React, { useEffect, useState } from 'react';
import { BootstrapButton } from './../../../UI/BootstrapButton';
import { formatPrice, textCapitalize } from './../../../ultils/index';
import { Grid, TextField, Modal, Box, Fade, Backdrop, styled, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import _ from 'lodash';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { addToBag, setCarts, setCartTotal } from '../../../features/CartSlice';
import { useDispatch } from 'react-redux';
import CustomizedSnackbars from './../../alert/index';

export const CustomButtonCount = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    lineHeight: 1.5,
    height: '20px',
    width: '20px',
    backgroundColor: '#f2f2f2',
    color: '#e7ab3c',
    outline: 'none',
    fontFamily: "Futura-Regular",
    '&:hover': {
        backgroundColor: '#e7ab3c',
        color: '#ffffff',
        boxShadow: 'none',
        outline: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#e7ab3c',
        color: '#ffffff',
        outline: 'none'
    },
    '&:focus': {
        boxShadow: 'none',
        outline: 'none'
    }
});

const ProductModal = (props) => {
    const { product } = props;
    const [count, setCount] = useState(1);
    const [size, setSize] = useState();
    const [color, setColor] = useState();
    const [cart, setCart] = useLocalStorage('cart', []);
    const [total, setTotal] = useLocalStorage('total', 0);
    const dispatch = useDispatch();
    const [openAlert, setOpenAlert] = useState(false);

    useEffect(() => {
        product.size && setSize(product.size[0]);
        product.color && setColor(product.color[0]);
    }, [product]);

    const addToCart = (product, size, color, count) => {
        let params = { product, size, color, count };
        setCart(addToBag(params).cart);
        setTotal(addToBag(params).total);
        dispatch(setCarts(addToBag(params).cart));
        dispatch(setCartTotal(addToBag(params).total));
        setOpenAlert(true);
        setOpenAlert(true);
        setTimeout(() => {
            handleClose();
        }, 1000);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 1000,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4
    };

    const getTotal = () => {
        return count * product.price;
    }

    const handleClose = () => {
        props.setOpen(false);
    }

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <Box sx={style} className="product-modal">
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <img src={product.image[0]} className="w-100" alt={`Image - ${product.name}`} />
                            </Grid>
                            <Grid item xs={6} className="product-modal_detail">
                                <div className="product-modal_icon">
                                    <CloseOutlinedIcon className="close_icon" onClick={handleClose} />
                                </div>
                                <div className="product-modal_title_container">
                                    <h3 className="product-modal_title">{product.name}</h3>
                                    <span>add to wishlist</span>
                                </div>
                                <div className="product-modal_show-option">
                                    {size && <span>Size: {size}. </span>}
                                    {color && <span>Color: {textCapitalize(color)}.</span>}
                                </div>
                                <p className="product-modal_description mb-8">{product.description}</p>

                                <div className="product-modal_size">
                                    <p className="product-modal_size_title">
                                        Choose Size (require):
                                    </p>
                                    <ul className="list-unstyled list-inline product-modal_size_list">
                                        {product.size.map((value, key) => {
                                            return (
                                                <p key={key}>
                                                    <input type="radio" id={value} value={value} onChange={(e) => setSize(e.target.value)} name="size" checked={size === value ? "checked" : null} />
                                                    <label for={value}>{value}</label>
                                                </p>

                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="product-modal_color">
                                    <p className="product-modal_color_title">
                                        Choose Color (require):
                                    </p>
                                    <ul className="list-unstyled list-inline product-modal_color_list">
                                        {product.color.map((value, key) => {
                                            return (
                                                <p key={key}>
                                                    <input type="radio" id={value} name="color" value={value} checked={color === value ? "checked" : null} onChange={(e) => setColor(e.target.value)} />
                                                    <label for={value}>
                                                        {textCapitalize(value)}
                                                    </label>
                                                </p>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="product-modal_count">
                                    <span className="product-modal_price">
                                        {formatPrice(product.price)}
                                        <span className="product-modal_sale">
                                            {formatPrice(product.sale)}
                                        </span>
                                    </span>
                                    <div className="product-modal_count_container">
                                        <CustomButtonCount
                                            className="product-modal_btn-plus-count"
                                            variant="contained"
                                            onClick={() => setCount(count - 1)}
                                        >
                                            <RemoveIcon />
                                        </CustomButtonCount>
                                        <TextField
                                            sx={{ width: '40px', textAlign: 'center' }}
                                            type="number"
                                            size="small"
                                            id="standard-basic"
                                            InputProps={{ disableUnderline: true }}
                                            inputProps={{ min: 1, style: { textAlign: 'center' } }}
                                            variant="standard"
                                            value={count}
                                            onChange={(e) => setCount(e.target.value)}
                                        />
                                        <CustomButtonCount
                                            className="product-modal_btn-minus-count"
                                            variant="contained"
                                            onClick={() => setCount(count + 1)}
                                        >
                                            <AddIcon />
                                        </CustomButtonCount>
                                    </div>
                                </div>
                                <BootstrapButton className="mt-4" variant="contained" onClick={() => addToCart(product, size, color, count)} >
                                    {`${formatPrice(getTotal())} - Add To Cart`}
                                </BootstrapButton>
                            </Grid>
                        </Grid>
                    </Box>
                </Fade>
            </Modal>
            <CustomizedSnackbars
                message={`Add ${product.name} success to your cart !`}
                severity="success"
                open={openAlert}
                setOpen={setOpenAlert}
            />
        </>
    );
}

export default ProductModal;

import { Grid } from '@mui/material';
import React from 'react';
import CustomSpinner from '../../UI/CustomSpinner';
import { formatPrice } from '../../ultils';

const DropdownCart = ({ cart, total, loading }) => {
    const renderCartItem = (arr) => {
        return arr.map((value, key) => {
            const { product, quantity } = value;
            const { image } = product;
            return (
                <Grid container spacing={2} key={key}>
                    <Grid item xs={4}>
                        <img src={image[0]} alt={`${product.name}-image-${key + 1}`} />
                    </Grid>
                    <Grid item xs={8}>
                        <h6>{product.name}</h6>
                        <p>{`${formatPrice(product.price)} x ${quantity}`}</p>
                    </Grid>
                </Grid>
            )
        })
    }

    return (
        <div className="cart-hover">
            <div className="select-items">
                {loading ? <CustomSpinner /> : renderCartItem(cart)}
            </div>
            <div className="select-total">
                <span>Total:</span>
                <h5>{formatPrice(total)}</h5>
            </div>
            <div className="select-button">
                <a href="#" className="primary-btn view-card">VIEW CARD</a>
                <a href="#" className="primary-btn checkout-btn">CHECK OUT</a>
            </div>
        </div>
    );
}

export default DropdownCart;

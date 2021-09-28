import React, { useEffect } from 'react';
import CustomSpinner from '../../../UI/CustomSpinner';
import { formatPrice } from '../../../ultils';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartItem from './ShoppingCartItem';
import { getCartLocalStorage } from '../../../features/CartSlice';
import { NavLink } from 'react-router-dom';
import { router } from '../../../route/constants';

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const cartProduct = useSelector(state => state.cart.products);
    const totalProduct = useSelector(state => state.cart.total);
    const loading = useSelector(state => state.cart.loading);

    useEffect(() => {
        dispatch(getCartLocalStorage());
    }, []);

    const renderCartItem = (cart) => {
        return cart.length > 0 ? cart.map((value, key) => {
            const { product, color, size, quantity } = value;
            return (
                <ShoppingCartItem
                    color={color}
                    size={size}
                    product={product}
                    quantity={quantity}
                    key={key}
                />
            )
        })
            :
            <p>
                <span>
                    Your cart is empty.
                </span>
            </p>
    }

    return (
        <section className="shopping-cart spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cart-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th className="p-name">Product Name</th>
                                        <th>Size</th>
                                        <th>Color</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th><i className="ti-close" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? <CustomSpinner /> : renderCartItem(cartProduct)}
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="cart-buttons">
                                    {cartProduct.length === 0 && <NavLink to={router.shop} className="primary-btn continue-shop active">Continue shopping</NavLink>}
                                </div>
                                <div className="discount-coupon">
                                    <h6>Discount Codes</h6>
                                    <form action="#" className="coupon-form">
                                        <input type="text" placeholder="Enter your codes" />
                                        <button type="submit" className="site-btn coupon-btn">Apply</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-4">
                                <div className="proceed-checkout">
                                    <ul>
                                        <li className="subtotal">Subtotal <span>{formatPrice(totalProduct)}</span></li>
                                        <li className="cart-total">Total <span>{formatPrice(totalProduct)}</span></li>
                                    </ul>
                                    <a href="#" className="proceed-btn">PROCEED TO CHECK OUT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}

export default ShoppingCart;

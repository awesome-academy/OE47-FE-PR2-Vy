import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomSpinner from '../../UI/CustomSpinner';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatPrice } from '../../ultils';
import { getWishlist, setToWishlist } from '../../features/UserSlice';
import CustomizedSnackbars from '../alert';

const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.user.wishlist);
    const loading = useSelector(state => state.user.loading);
    const [openAlert, setOpenAlert] = useState({
        open: false,
        text: '',
        severity: 'info'
    });

    useEffect(() => {
        dispatch(getWishlist());
    }, []);

    const handleDelete = (product) => {
        dispatch(setToWishlist(product));
        setOpenAlert({
            open: true,
            severity: 'success',
            text: 'DELETE SUCCESS!'
        });
    }

    const renderCartItem = (cart) => {
        return cart.length > 0 ? cart.map((value, key) => {
            const { image, size } = value;
            return (
                <tr key={key}>
                    <td className="cart-pic">
                        <img src={image[0]} alt="" />
                    </td>
                    <td className="cart-title">
                        <h5>{value.name}</h5>
                    </td>
                    <td className="cart-title">
                        {size.map(val => val).join(', ')}
                    </td>
                    <td className="total-price">
                        {formatPrice(value.price)}
                    </td>
                    <td className="close-td">
                        <DeleteIcon onClick={() => handleDelete(value)} />
                    </td>
                </tr>
            )
        })
            :
            <p>
                <span>
                    Your wishlist is empty.
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
                                        <th className="p-name">Size</th>
                                        <th className="p-name">price</th>
                                        <th>#</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? <CustomSpinner /> : renderCartItem(wishlist)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <CustomizedSnackbars
                message={openAlert.text}
                severity={openAlert.severity}
                open={openAlert.open}
                setOpen={setOpenAlert}
            />
        </section>
    );
}

export default Wishlist;

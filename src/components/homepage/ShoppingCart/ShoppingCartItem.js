import React, { useState, useEffect } from 'react';
import { formatPrice, textCapitalize } from '../../../ultils';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import DeleteCartModal from './DeleteCartModal';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { deleteItem, handleChangeQuantity, setCartTotal, setCarts, getTotalByCart } from '../../../features/CartSlice';
import { ButtonGroup } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CustomizedSnackbars from './../../alert/index';

const ShoppingCartItem = ({product, color, size, quantity}) => {
    const { image } = product;
    const [openModal, setOpenModal] = useState(false);
    const dispatch = useDispatch();
    const [cart, setCart] = useLocalStorage('cart', []);
    const [total, setTotal] = useLocalStorage('total', 0);
    const [quantityState, setQuantityState] = useState();
    const [openAlert, setOpenAlert] = useState(false);
    const params = { product, color, size, quantity };

    useEffect(() => {
        setQuantityState(quantity);
    }, [quantity]);

    const handleDelete = () => {
        setOpenModal(false);
        let cartTemp = deleteItem(params);
        let totalTemp = getTotalByCart(deleteItem(params));
        setTotal(totalTemp);
        setCart(cartTemp);
        dispatch(setCarts(cartTemp));
        dispatch(setCartTotal(totalTemp));
        setOpenAlert(true);
    }

    const handleDecrease = () => {
        if (quantityState == 1) {
            setOpenModal(true);
        }
        else {
            setQuantityState(quantityState - 1);
            handleChangeCount(quantityState - 1);
        }
    }

    const handleIncrease = () => {
        setQuantityState(quantityState + 1);
        handleChangeCount(quantityState + 1);
    }

    const handleChangeCount = (quantitySta) => {
        let cartTemp = handleChangeQuantity(params, quantitySta);
        let totalTemp = getTotalByCart(handleChangeQuantity(params, quantitySta));
        setTotal(totalTemp);
        setCart(cartTemp);
        dispatch(setCarts(cartTemp));
        dispatch(setCartTotal(totalTemp));
    }

    return (
        <>
            <tr>
                <td className="cart-pic">
                    <img src={image[0]} alt="" />
                </td>
                <td className="cart-title">
                    <h5>{product.name}</h5>
                </td>
                <td>{size}</td>
                <td>{textCapitalize(color)}</td>
                <td className="p-price">{formatPrice(product.price)}</td>
                <td className="qua-col">
                    <div className="quantity">
                        <div className="pro-qty">
                            <ButtonGroup className="btn-minus" size="small" aria-label="small button group" onClick={() => handleDecrease()} >
                                <RemoveIcon className="icon" sx={{ color: '#e7ab3c' }} />
                            </ButtonGroup>
                            <span className="input-count">{quantityState}</span>
                            <ButtonGroup className="btn-plus" size="small" aria-label="small button group" onClick={() => handleIncrease()}>
                                <AddIcon className="icon" sx={{ color: '#e7ab3c' }} />
                            </ButtonGroup>
                        </div>
                    </div>
                </td>
                <td className="total-price">
                    {formatPrice(product.price * quantity)}
                </td>
                <td className="close-td">
                    <DeleteIcon onClick={() => setOpenModal(true)} />
                </td>
            </tr>
            <DeleteCartModal
                product={product}
                open={openModal}
                setOpen={setOpenModal}
                deleteItem={() => handleDelete()}
            />
            <CustomizedSnackbars
                message={`Delete ${product.name} success from your cart !`}
                severity="success"
                open={openAlert}
                setOpen={setOpenAlert}
            />
        </>
    );

}

export default ShoppingCartItem;

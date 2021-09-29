import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartLocalStorage } from './../../features/CartSlice';
import CustomSpinner from './../../UI/CustomSpinner';
import { getCurrentDate, formatPrice, validatePhoneReg } from './../../ultils/index';
import { getProfile } from '../../features/UserSlice';
import CustomizedSnackbars from '../alert';
import { createOrderAction, resetOrder } from './../../features/OrderSlice';
import { useHistory } from 'react-router-dom';

const form = [
    { name: "firstname", type: "text", label: "Firstname", error: '' },
    { name: "lastname", type: "text", label: "Lastname", error: '' },
    { name: "street_address", type: "text", label: "Street Address", error: '' },
    { name: "district", type: "text", label: "District", error: '' },
    { name: "city", type: "text", label: "City", error: '' },
    { name: "phone", type: "number", label: "Phone", error: '' }
];

const payment = [
    { value: "cash", label: "Cash" },
    { value: "paypal", label: "Paypal" },
    { value: "visa/master_card", label: "VISA / MASTER CARD" }
]

const Checkout = () => {
    const [formData, setFormData] = useState(form);
    const [openAlert, setOpenAlert] = useState({
        open: false,
        text: '',
        severity: 'info'
    });
    const [paymentMethod, setPaymentMethod] = useState('');
    const cartProduct = useSelector(state => state.cart.products);
    const totalProduct = useSelector(state => state.cart.total);
    const loading = useSelector(state => state.cart.loading);
    const status = useSelector(state => state.order.status);
    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);
    const history = useHistory();

    useEffect(() => {
        dispatch(getProfile());
        dispatch(getCartLocalStorage());
        if (status === 'orderSuccess' && !loading) {
            setOpenAlert({
                open: true,
                severity: "success",
                text: "ORDER SUCCESS. PLEASE CHECK ORDER STATUS IN YOUR PROFILE!"
            });
            localStorage.removeItem('cart');
            localStorage.removeItem('total');
            dispatch(resetOrder());
            setTimeout(() => {
                history.push("/profile");
            }, 1500);
        }
        if (status === 'orderFailed' && !loading) {
            setOpenAlert({
                open: true,
                severity: "error",
                text: "ORDER FAILED. PLEASE TRY AGAIN!"
            });
        }
        if (cartProduct.length === 0) {
            setOpenAlert({
                open: true,
                severity: "error",
                text: "YOUR CART IS EMPTY. PLEASE BACK TO SHOP!"
            });
            setTimeout(() => {
                history.push("/shop");
            }, 2000);
        }
    }, [status, loading]);

    const renderField = (arr) => {
        return arr.map((value, key) => {
            return (
                <div className="form-item col-lg-6" key={key}>
                    <label htmlFor="fir">{value.label}<span>*</span></label>
                    <input
                        type={value.type}
                        name={value.name}
                        onChange={(e) => handleChangeInput(e, value.label)}
                        id={value.name.substring(0, 4)}
                        defaultValue={profile[value.name]}
                    />
                    {value.error && <small>{value.error}</small>}
                </div>
            )
        })
    }

    const renderOrder = (arr) => {
        return arr.map((value, key) => {
            return (
                <li className="fw-normal" key={key}>{value.product.name} x {value.quantity} <span>{formatPrice(value.product.price * value.quantity)}</span></li>
            )
        })
    }

    const renderPayment = (arr) => {
        return arr.map((item, key) => {
            return (
                <p key={key}>
                    <input
                        type="radio"
                        id={item.value}
                        name="payment_method"
                        value={item.value}
                        checked={paymentMethod === item.value ? "checked" : null}
                        onChange={(e) => setPaymentMethod(e.target.value)} />
                    <label htmlFor={item.value}>
                        {item.label}
                    </label>
                </p>
            )
        })
    }

    const handleChangeInput = (e, label) => {
        let temp = [...formData];
        const indexProduct = temp.findIndex((val) => val.name == e.target.name);
        switch (e.target.name) {
            case "firstname":
            case "lastname":
            case "street_address":
            case "district":
            case "city":
                !e.target.value ?
                    temp[indexProduct].error = `${label} can't be blank!`
                    :
                    temp[indexProduct].error = '';
                break;
            case "phone":
                !validatePhoneReg(e.target.value)
                    ?
                    temp[indexProduct].error = "Phone is invalid!"
                    :
                    temp[indexProduct].error = '';
                break;
            default:
                break;
        }
        setFormData(temp);
    }

    const checkConditionField = (data) => {
        const { firstname, lastname, street_address, district, city, phone } = data;
        return firstname && lastname && street_address && district && city && validatePhoneReg(phone);
    }

    const isPlaceOrder = (shipping_addr) => {
        return checkConditionField(shipping_addr) && paymentMethod;
    }

    const handleCreateOrder = (e) => {
        e.preventDefault();
        let shipping_addr = {
            firstname: e.target.firstname.value,
            lastname: e.target.lastname.value,
            street_address: e.target.street_address.value,
            district: e.target.district.value,
            city: e.target.city.value,
            phone: e.target.phone.value
        }
        if (!isPlaceOrder(shipping_addr)) {
            return setOpenAlert({
                open: true,
                severity: 'error',
                text: 'PLEASE CHECK YOUR INFORMATION!'
            });
        }
        let data = {
            shipping_addr,
            payment_method: paymentMethod,
            id_user: profile.id,
            order_details: cartProduct,
            total: totalProduct,
            createdAt: getCurrentDate(),
            status: 'Wait for confirm'
        }
        dispatch(createOrderAction(data));
    }

    return (
        <>
            <section className="checkout-section spad">
                <div className="container">
                    <form className="checkout-form" onSubmit={handleCreateOrder}>
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>Biiling Details</h4>
                                <div className="row">
                                    {renderField(formData)}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="place-order">
                                    <h4>Your Order</h4>
                                    <div className="order-total">
                                        <ul className="order-table">
                                            <li>Product <span>Total</span></li>
                                            {loading ? <CustomSpinner /> : renderOrder(cartProduct)}
                                            <li className="total-price">Total <span>{formatPrice(totalProduct)}</span></li>
                                        </ul>
                                        <div className="payment-check">
                                            {renderPayment(payment)}
                                        </div>
                                        <div className="order-btn">
                                            <button
                                                type="submit"
                                                className="site-btn place-btn"
                                            >
                                                Place Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <CustomizedSnackbars
                message={openAlert.text}
                severity={openAlert.severity}
                open={openAlert.open}
                setOpen={setOpenAlert}
            />
        </>
    );
}

export default Checkout;

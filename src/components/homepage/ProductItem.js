import React, { useState } from 'react';
import { addToCart } from '../../ultils';
import CustomizedSnackbars from '../alert';
import ProductModal from './partials/ProductModal';


const ProductItem = (props) => {

    const [openAlert, setOpenAlert] = useState(false);

    const [openModal, setOpenModal] = useState(false);

    const addCart = (product) => {
        // addToCart(product);
        setOpenModal(true)
        // setOpenAlert(true)
    }

    return (
        <div className={`col-lg-${props.col}`}>
            <div className="product-item">
                <div className="pi-pic">
                    <img src={props.product.image} alt={props.product.name} />
                    <div className="icon">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <ul>
                        <li className="w-icon active">
                            <a className="btn_add-to-cart" onClick={() => addCart(props.product)} >
                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li className="quick-view">
                            <a href="#">+ Detail</a>
                        </li>
                    </ul>
                </div>
                <div className="pi-text">
                    <div className="catagory-name">{props.product.categories}</div>
                    <a href="#">
                        <h5>{props.product.name}</h5>
                    </a>
                    <div className="product-price">
                        ${props.product.price}.00
                        <span>$35.00</span>
                    </div>
                </div>
            </div>

            <ProductModal
                product={props.product}
                open={openModal}
                setOpen={setOpenModal}
            />

            <CustomizedSnackbars
                message={`Add ${props.product.name} success to your cart !`}
                severity="success"
                open={openAlert}
                setOpen={setOpenAlert}
            />
        </div>
    );

}

export default ProductItem;

import React, { useState } from 'react';
import { configSlug, formatPrice } from '../../ultils';
import CustomizedSnackbars from '../alert';
import ProductModal from './partials/ProductModal';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Slider from 'react-slick';
import { useHistory } from "react-router-dom";
import useLocalStorage from './../../hooks/useLocalStorage';

const ProductItem = (props) => {
    const { product } = props;
    const [openAlert, setOpenAlert] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [recentView, setRecentView] = useLocalStorage('recent-view', []);
    const history = useHistory();

    const showDetailForQuickAddCart = () => {
        addToRecentView();
        setOpenModal(true);
    }

    const slideSettings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const routingToProductDetail = () => {
        addToRecentView();
        history.push(`/detail/${product.id}/${configSlug(product.name)}`);
    }

    const addToRecentView = () => {
        if (!(recentView.some(val => val.id === product.id))) {
            setRecentView([...recentView, product]);
        }
    }

    return (
        <div className={`col-lg-${props.col}`}>
            <div className="product-item">
                <div className="pi-pic">
                    <Slider {...slideSettings}>
                        {props.product.image.map((value, key) => {
                            return (
                                <img key={key} src={value} alt={`${product.name}-image-${key + 1}`} />
                            )
                        })}
                    </Slider>
                    <div className="icon">
                        <FavoriteBorderIcon className="add-to-wishlist_icon" />
                    </div>
                    <ul>
                        <li className="quick-view" onClick={() => routingToProductDetail()} >
                            + Detail
                        </li>
                        <li className="quick-view add-to-cart" onClick={() => showDetailForQuickAddCart()} >
                            + Quick View
                        </li>
                    </ul>
                </div>
                <div className="pi-text">
                    <a href="#">
                        <h5>{props.product.name}</h5>
                    </a>
                    <div className="product-price">
                        {formatPrice(product.price)}
                        <span>{formatPrice(product.sale)}</span>
                    </div>
                </div>
            </div>
            <ProductModal
                product={product}
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

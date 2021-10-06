import React, { useState, useEffect } from 'react';
import { configSlug, formatPrice } from '../../ultils';
import CustomizedSnackbars from '../alert';
import ProductModal from './partials/ProductModal';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Slider from 'react-slick';
import { useHistory } from "react-router-dom";
import useLocalStorage from './../../hooks/useLocalStorage';
import { getWishlist, setToWishlist } from '../../features/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import _ from 'lodash';

const ProductItem = ({ product, col }) => {
    const [openAlert, setOpenAlert] = useState({
        open: false,
        text: '',
        severity: 'info'
    });
    const [openModal, setOpenModal] = useState(false);
    const [recentView, setRecentView] = useLocalStorage('recent-view', []);
    const history = useHistory();
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.user.wishlist);
    const searchName = useSelector(state => state.filter.filtersApplied.name_like);

    useEffect(() => {
        dispatch(getWishlist());
    }, []);

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

    const handleAddToWishlist = () => {
        dispatch(setToWishlist(product));
        setOpenAlert({
            open: true,
            severity: 'success',
            text: `Add ${product.name} to your wishlist success!`
        });
    }

    const handleDelete = (product) => {
        dispatch(setToWishlist(product));
        setOpenAlert({
            open: true,
            severity: 'success',
            text: 'DELETE SUCCESS!'
        });
    }

    const highlighted = (text = '', highlight = '') => {
        if (!highlight.trim()) {
            return <>{text}</>
        }
        const regex = new RegExp(`(${_.escapeRegExp(highlight)})`, 'gi')
        const parts = text.split(regex)
        return (
            <>
                {parts.filter(part => part).map((part, i) => (
                    regex.test(part) ? <em key={i}>{part}</em> : <span key={i}>{part}</span>
                ))}
            </>
        )
    }

    return (
        <div className={`product-item col-lg-${col}`}>
            <div className="pi-pic">
                <Slider {...slideSettings}>
                    {product.image.map((value, key) => {
                        return (
                            <img key={key} src={value} alt={`${product.name}-image-${key + 1}`} />
                        )
                    })}
                </Slider>
                <div className="icon">
                    {wishlist.some(val => val.id === product.id)
                        ?
                        <FavoriteIcon className="add-to-wishlist_icon" onClick={() => handleDelete()} />
                        :
                        <FavoriteBorderIcon className="add-to-wishlist_icon" onClick={() => handleAddToWishlist()} />
                    }
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
                    <h5>{highlighted(product.name, searchName)}</h5>
                </a>
                <div className="product-price">
                    {formatPrice(product.price)}
                    <span>{formatPrice(product.sale)}</span>
                </div>
            </div>
            <ProductModal
                product={product}
                open={openModal}
                setOpen={setOpenModal}
            />
            <CustomizedSnackbars
                message={openAlert.text}
                severity={openAlert.severity}
                open={openAlert.open}
                setOpen={setOpenAlert}
            />
        </div>
    );
}

export default ProductItem;

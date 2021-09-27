import React from 'react';
import Slider from 'react-slick';
import RelatedView from './partials/RelatedView';

const Homepage = (props) => {
    const slideSettings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="banner-section spad">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-banner">
                                <img src="./images/banner-1.jpg" alt="" />
                                <div className="inner-text">
                                    <h4>Men’s</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-banner">
                                <img src="./images/banner-2.jpg" alt="" />
                                <div className="inner-text">
                                    <h4>Women’s</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-banner">
                                <img src="./images/banner-3.jpg" alt="" />
                                <div className="inner-text">
                                    <h4>Kid’s</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="women-banner spad">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="product-large set-bg">
                                <h2>Women’s</h2>
                                <a href="#">Discover More</a>
                            </div>
                        </div>
                        <div className="col-lg-8 offset-lg-1">
                            <div className="filter-control">
                                <ul>
                                    <li className="active">Clothings</li>
                                    <li>HandBag</li>
                                    <li>Shoes</li>
                                    <li>Accessories</li>
                                </ul>
                            </div>
                            <div className="product-slider owl-carousel owl-loaded owl-drag">
                                <div className="owl-stage-outer">
                                    <Slider {...slideSettings} >
                                        <div className="owl-item col-12">
                                            <div className="product-item">
                                                <div className="pi-pic">
                                                    <img src="./images/products/women-2.jpg" alt="" />
                                                    <div className="icon">
                                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                    </div>
                                                    <ul>
                                                        <li className="w-icon active">
                                                            <a href="#">
                                                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li className="quick-view">
                                                            <a href="#">+ Quick View</a>
                                                        </li>
                                                        <li className="w-icon">
                                                            <a href="#">
                                                                <i className="fa fa-random" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pi-text">
                                                    <div className="catagory-name">Shoes</div>
                                                    <a href="#">
                                                        <h5>Guangzhou sweater</h5>
                                                    </a>
                                                    <div className="product-price">
                                                        $13.00
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item col-12">
                                            <div className="product-item">
                                                <div className="pi-pic">
                                                    <img src="./images/products/women-3.jpg" alt="" />
                                                    <div className="icon">
                                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                    </div>
                                                    <ul>
                                                        <li className="w-icon active">
                                                            <a href="#">
                                                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li className="quick-view">
                                                            <a href="#">+ Quick View</a>
                                                        </li>
                                                        <li className="w-icon">
                                                            <a href="#">
                                                                <i className="fa fa-random" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pi-text">
                                                    <div className="catagory-name">Towel</div>
                                                    <a href="#">
                                                        <h5>Pure Pineapple</h5>
                                                    </a>
                                                    <div className="product-price">
                                                        $34.00
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item col-12">
                                            <div className="product-item">
                                                <div className="pi-pic">
                                                    <img src="./images/products/women-4.jpg" alt="" />
                                                    <div className="icon">
                                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                    </div>
                                                    <ul>
                                                        <li className="w-icon active">
                                                            <a href="#">
                                                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li className="quick-view">
                                                            <a href="#">+ Quick View</a>
                                                        </li>
                                                        <li className="w-icon">
                                                            <a href="#">
                                                                <i className="fa fa-random" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pi-text">
                                                    <div className="catagory-name">Towel</div>
                                                    <a href="#">
                                                        <h5>Converse Shoes</h5>
                                                    </a>
                                                    <div className="product-price">
                                                        $34.00
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item col-12">
                                            <div className="product-item">
                                                <div className="pi-pic">
                                                    <img src="./images/products/women-1.jpg" alt="" />
                                                    <div className="sale">Sale</div>
                                                    <div className="icon">
                                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                    </div>
                                                    <ul>
                                                        <li className="w-icon active">
                                                            <a href="#">
                                                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li className="quick-view">
                                                            <a href="#">+ Quick View</a>
                                                        </li>
                                                        <li className="w-icon">
                                                            <a href="#">
                                                                <i className="fa fa-random" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pi-text">
                                                    <div className="catagory-name">Coat</div>
                                                    <a href="#">
                                                        <h5>Pure Pineapple</h5>
                                                    </a>
                                                    <div className="product-price">
                                                        $14.00
                                                        <span>$35.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item col-12">
                                            <div className="product-item">
                                                <div className="pi-pic">
                                                    <img src="./images/products/women-2.jpg" alt="" />
                                                    <div className="icon">
                                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                    </div>
                                                    <ul>
                                                        <li className="w-icon active">
                                                            <a href="#">
                                                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li className="quick-view">
                                                            <a href="#">+ Quick View</a>
                                                        </li>
                                                        <li className="w-icon">
                                                            <a href="#">
                                                                <i className="fa fa-random" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pi-text">
                                                    <div className="catagory-name">Shoes</div>
                                                    <a href="#">
                                                        <h5>Guangzhou sweater</h5>
                                                    </a>
                                                    <div className="product-price">
                                                        $13.00
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item col-12">
                                            <div className="product-item">
                                                <div className="pi-pic">
                                                    <img src="./images/products/women-3.jpg" alt="" />
                                                    <div className="icon">
                                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                    </div>
                                                    <ul>
                                                        <li className="w-icon active">
                                                            <a href="#">
                                                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li className="quick-view">
                                                            <a href="#">+ Quick View</a>
                                                        </li>
                                                        <li className="w-icon">
                                                            <a href="#">
                                                                <i className="fa fa-random" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pi-text">
                                                    <div className="catagory-name">Towel</div>
                                                    <a href="#">
                                                        <h5>Pure Pineapple</h5>
                                                    </a>
                                                    <div className="product-price">
                                                        $34.00
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item col-12">
                                            <div className="product-item">
                                                <div className="pi-pic">
                                                    <img src="./images/products/women-4.jpg" alt="" />
                                                    <div className="icon">
                                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                    </div>
                                                    <ul>
                                                        <li className="w-icon active">
                                                            <a href="#">
                                                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li className="quick-view">
                                                            <a href="#">+ Quick View</a>
                                                        </li>
                                                        <li className="w-icon">
                                                            <a href="#">
                                                                <i className="fa fa-random" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pi-text">
                                                    <div className="catagory-name">Towel</div>
                                                    <a href="#">
                                                        <h5>Converse Shoes</h5>
                                                    </a>
                                                    <div className="product-price">
                                                        $34.00
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item col-12">
                                            <div className="product-item">
                                                <div className="pi-pic">
                                                    <img src="./images/products/women-1.jpg" alt="" />
                                                    <div className="sale">Sale</div>
                                                    <div className="icon">
                                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                    </div>
                                                    <ul>
                                                        <li className="w-icon active">
                                                            <a href="#">
                                                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li className="quick-view">
                                                            <a href="#">+ Quick View</a>
                                                        </li>
                                                        <li className="w-icon">
                                                            <a href="#">
                                                                <i className="fa fa-random" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pi-text">
                                                    <div className="catagory-name">Coat</div>
                                                    <a href="#">
                                                        <h5>Pure Pineapple</h5>
                                                    </a>
                                                    <div className="product-price">
                                                        $14.00
                                                        <span>$35.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item col-12">
                                            <div className="product-item">
                                                <div className="pi-pic">
                                                    <img src="./images/products/women-2.jpg" alt="" />
                                                    <div className="icon">
                                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                    </div>
                                                    <ul>
                                                        <li className="w-icon active">
                                                            <a href="#">
                                                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li className="quick-view">
                                                            <a href="#">+ Quick View</a>
                                                        </li>
                                                        <li className="w-icon">
                                                            <a href="#">
                                                                <i className="fa fa-random" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pi-text">
                                                    <div className="catagory-name">Shoes</div>
                                                    <a href="#">
                                                        <h5>Guangzhou sweater</h5>
                                                    </a>
                                                    <div className="product-price">
                                                        $13.00
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item col-12">
                                            <div className="product-item">
                                                <div className="pi-pic">
                                                    <img src="./images/products/women-3.jpg" alt="" />
                                                    <div className="icon">
                                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                                    </div>
                                                    <ul>
                                                        <li className="w-icon active">
                                                            <a href="#">
                                                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                                                            </a>
                                                        </li>
                                                        <li className="quick-view">
                                                            <a href="#">+ Quick View</a>
                                                        </li>
                                                        <li className="w-icon">
                                                            <a href="#">
                                                                <i className="fa fa-random" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pi-text">
                                                    <div className="catagory-name">Towel</div>
                                                    <a href="#">
                                                        <h5>Pure Pineapple</h5>
                                                    </a>
                                                    <div className="product-price">
                                                        $34.00
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="deal-of-week set-bg spad" style={{ backgroundImage: 'url("./images/time-bg.jpg")' }}>
                <div className="container">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h2>Deal Of The Week</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed<br /> do ipsum dolor sit amet,
                                consectetur adipisicing elit </p>
                            <div className="product-price">
                                $35.00
                                <span>/ HanBag</span>
                            </div>
                        </div>
                        <div className="countdown-timer" id="countdown">
                            <div className="cd-item">
                                <span>29</span> <p>Days</p> </div>
                            <div className="cd-item">
                                <span>05</span> <p>Hrs</p> </div>
                            <div className="cd-item">
                                <span>24</span> <p>Mins</p> </div>
                            <div className="cd-item">
                                <span>38</span> <p>Secs</p> </div>
                        </div>
                        <a href="#" className="primary-btn">Shop Now</a>
                    </div>
                </div>
            </section>
            <section className="man-banner spad">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <RelatedView />
                        </div>
                    </div>
                </div>
            </section>
            <div className="instagram-photo">
                <div className="insta-item set-bg" data-setbg="./imagesinsta-1.jpg" style={{ backgroundImage: 'url("./images/insta-1.jpg")' }}>
                    <div className="inside-text">
                        <i className="ti-instagram" />
                        <h5>
                            <a href="#">colorlib_Collection</a>
                        </h5>
                    </div>
                </div>
                <div className="insta-item set-bg" data-setbg="./imagesinsta-2.jpg" style={{ backgroundImage: 'url("./images/insta-2.jpg")' }}>
                    <div className="inside-text">
                        <i className="ti-instagram" />
                        <h5>
                            <a href="#">colorlib_Collection</a>
                        </h5>
                    </div>
                </div>
                <div className="insta-item set-bg" data-setbg="./imagesinsta-3.jpg" style={{ backgroundImage: 'url("./images/insta-3.jpg")' }}>
                    <div className="inside-text">
                        <i className="ti-instagram" />
                        <h5>
                            <a href="#">colorlib_Collection</a>
                        </h5>
                    </div>
                </div>
                <div className="insta-item set-bg" data-setbg="./imagesinsta-4.jpg" style={{ backgroundImage: 'url("./images/insta-4.jpg")' }}>
                    <div className="inside-text">
                        <i className="ti-instagram" />
                        <h5>
                            <a href="#">colorlib_Collection</a>
                        </h5>
                    </div>
                </div>
                <div className="insta-item set-bg" data-setbg="./imagesinsta-5.jpg" style={{ backgroundImage: 'url("./images/insta-5.jpg")' }}>
                    <div className="inside-text">
                        <i className="ti-instagram" />
                        <h5>
                            <a href="#">colorlib_Collection</a>
                        </h5>
                    </div>
                </div>
                <div className="insta-item set-bg" data-setbg="./imagesinsta-6.jpg" style={{ backgroundImage: 'url("./images/insta-6.jpg")' }}>
                    <div className="inside-text">
                        <i className="ti-instagram" />
                        <h5>
                            <a href="#">colorlib_Collection</a>
                        </h5>
                    </div>
                </div>
            </div>
            <section className="latest-blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>From The Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-blog">
                                <img src="./images/latest-1.jpg" alt="" />
                                <div className="latest-text">
                                    <div className="tag-list">
                                        <div className="tag-item">
                                            <i className="fa fa-calendar-o" />
                                            May 4,2019
                                        </div>
                                        <div className="tag-item">
                                            <i className="fa fa-comment-o" />
                                            5
                                        </div>
                                    </div>
                                    <a href="#">
                                        <h4>The Best Street Style From London Fashion Week</h4>
                                    </a>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-blog">
                                <img src="./images/latest-2.jpg" alt="" />
                                <div className="latest-text">
                                    <div className="tag-list">
                                        <div className="tag-item">
                                            <i className="fa fa-calendar-o" />
                                            May 4,2019
                                        </div>
                                        <div className="tag-item">
                                            <i className="fa fa-comment-o" />
                                            5
                                        </div>
                                    </div>
                                    <a href="#">
                                        <h4>Vogue's Ultimate Guide To Autumn/Winter 2019 Shoes</h4>
                                    </a>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-latest-blog">
                                <img src="./images/latest-3.jpg" alt="" />
                                <div className="latest-text">
                                    <div className="tag-list">
                                        <div className="tag-item">
                                            <i className="fa fa-calendar-o" />
                                            May 4,2019
                                        </div>
                                        <div className="tag-item">
                                            <i className="fa fa-comment-o" />
                                            5
                                        </div>
                                    </div>
                                    <a href="#">
                                        <h4>How To Brighten Your Wardrobe With A Dash Of Lime</h4>
                                    </a>
                                    <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="benefit-items">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="single-benefit">
                                    <div className="sb-icon">
                                        <img src="./images/icon-1.png" alt="" />
                                    </div>
                                    <div className="sb-text">
                                        <h6>Free Shipping</h6>
                                        <p>For all order over 99$</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-benefit">
                                    <div className="sb-icon">
                                        <img src="./images/icon-2.png" alt="" />
                                    </div>
                                    <div className="sb-text">
                                        <h6>Delivery On Time</h6>
                                        <p>If good have prolems</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-benefit">
                                    <div className="sb-icon">
                                        <img src="./images/icon-1.png" alt="" />
                                    </div>
                                    <div className="sb-text">
                                        <h6>Secure Payment</h6>
                                        <p>100% secure payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Homepage;
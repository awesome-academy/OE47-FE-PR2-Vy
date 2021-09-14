import React, { Component } from 'react';
import Slider from 'react-slick';

const Banner = (props) => {

    var settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="hero-section">
            <div className="hero-items owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                    <Slider {...settings}>
                        <div className="owl-item hero-section-item-1">
                            <div className="single-hero-items set-bg">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <span>Bag,kids</span>
                                            <h1>Black friday</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore</p>
                                            <a href="#" className="primary-btn">Shop Now</a>
                                        </div>
                                    </div>
                                    <div className="off-card">
                                        <h2>Sale <span>50%</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item hero-section-item-2">
                            <div className="single-hero-items set-bg">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <span>Bag,kids</span>
                                            <h1>Black friday</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore</p>
                                            <a href="#" className="primary-btn">Shop Now</a>
                                        </div>
                                    </div>
                                    <div className="off-card">
                                        <h2>Sale <span>50%</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item hero-section-item-3">
                            <div className="single-hero-items set-bg">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <span>Bag,kids</span>
                                            <h1>Black friday</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore</p>
                                            <a href="#" className="primary-btn">Shop Now</a>
                                        </div>
                                    </div>
                                    <div className="off-card">
                                        <h2>Sale <span>50%</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item hero-section-item-4">
                            <div className="single-hero-items set-bg">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <span>Bag,kids</span>
                                            <h1>Black friday</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore</p>
                                            <a href="#" className="primary-btn">Shop Now</a>
                                        </div>
                                    </div>
                                    <div className="off-card">
                                        <h2>Sale <span>50%</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item hero-section-item-5">
                            <div className="single-hero-items set-bg">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <span>Bag,kids</span>
                                            <h1>Black friday</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore</p>
                                            <a href="#" className="primary-btn">Shop Now</a>
                                        </div>
                                    </div>
                                    <div className="off-card">
                                        <h2>Sale <span>50%</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-item hero-section-item-6">
                            <div className="single-hero-items set-bg">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <span>Bag,kids</span>
                                            <h1>Black friday</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                incididunt ut labore et dolore</p>
                                            <a href="#" className="primary-btn">Shop Now</a>
                                        </div>
                                    </div>
                                    <div className="off-card">
                                        <h2>Sale <span>50%</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>


    );

}

export default Banner;

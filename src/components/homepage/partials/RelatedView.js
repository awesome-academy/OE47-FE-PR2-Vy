import React, { useEffect, useState } from 'react';
import CustomSpinner from '../../../UI/CustomSpinner';
import ProductItem from '../ProductItem';
import Slider from 'react-slick';
import useLocalStorage from './../../../hooks/useLocalStorage';

const RelatedView = () => {
    const [loading, setLoading] = useState(true);
    const [recentView, setRecentView] = useLocalStorage('recent-view', []);

    useEffect(() => {
        if (recentView && recentView.length > 0) {
            setLoading(false);
        }
    }, []);

    const slideSettings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: recentView.length >= 4 ? 4 : recentView.length,
        slidesToScroll: 1
    };

    return (
        <>
            {
                loading ?
                    <CustomSpinner />
                    :
                    <div className="related spad">
                        <h3>
                            Related View
                        </h3>
                        <div className="mt-4">
                            <Slider {...slideSettings}>
                                {recentView && recentView.map((value, key) => {
                                    return (
                                        <ProductItem
                                            col={"12"}
                                            product={value}
                                            key={key}
                                        />
                                    )
                                })}
                            </Slider>
                        </div>
                    </div>
            }
        </>
    );
}

export default RelatedView;

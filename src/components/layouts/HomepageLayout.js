import React from 'react';
import Banner from '../homepage/Banner';
import Breadcrumb from '../homepage/Breadcrumb';
import Homepage from '../homepage/Homepage';


const HomepageLayout = (props) => {

    return (
        <>
            <Header />
            <Breadcrumb />
            <Banner />
            <Homepage />
            <Footer />
        </>
    );

}

export default HomepageLayout;

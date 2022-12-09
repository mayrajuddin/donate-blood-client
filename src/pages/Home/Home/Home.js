import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import BecomeDonar from '../BecomeDonar/BecomeDonar';

const Home = () => {
    return (
        <div>
            <Banner />
            <BecomeDonar />
            <AboutUs />
        </div>
    );
};

export default Home;
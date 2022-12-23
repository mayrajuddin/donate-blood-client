import React from 'react';
import PandingModal from '../../../Component/pandingModal/PandingModal';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import BecomeDonar from '../BecomeDonar/BecomeDonar';

const Home = () => {
    return (
        <div>
            <PandingModal />
            <Banner />
            <BecomeDonar />
            <AboutUs />
        </div>
    );
};

export default Home;
import React from 'react';
import HomeText from '../components/home/HomeText';
import HomeTarget from '../components/home/HomeTarget';
import Hero from '../components/home/Hero';
import Homewe from '../components/home/Homewe';

const Home = () => {
    return (
        <div className="herosection">
                <Hero />
            <div className="container">
                <><Homewe /> <HomeText /> <HomeTarget/> </>
            </div>
        </div>
    );
};

export default Home;
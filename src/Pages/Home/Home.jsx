import React from 'react';
import Banner from './Banner/Banner';
import Advertisement from './Advertisement/Advertisement';
import Review from './Review/Review';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Real Estate | Home</title>
            </Helmet>
            
            <Banner></Banner>
            <Advertisement></Advertisement>
            <Review></Review>
        </div>
    );
};

export default Home;
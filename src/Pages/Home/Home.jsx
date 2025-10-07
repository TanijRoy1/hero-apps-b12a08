import React from 'react';
import Banner from '../../Components/Banner/Banner';
import HomeApps from '../../Components/HomeApps/HomeApps';

const Home = () => {
    return (
        <div className='bg-[#F5F5F5] px-4'>
            <Banner></Banner>
            <HomeApps></HomeApps>
        </div>
    );
};

export default Home;
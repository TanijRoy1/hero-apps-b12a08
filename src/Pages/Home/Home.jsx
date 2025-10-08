import React from 'react';
import Banner from '../../Components/Banner/Banner';
import HomeApps from '../../Components/HomeApps/HomeApps';
import StateSection from '../../Components/StateSection/StateSection';

const Home = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <Banner></Banner>
            <HomeApps></HomeApps>
            <StateSection></StateSection>
        </div>
    );
};

export default Home;
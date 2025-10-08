import React from 'react';
import useLoadApps from '../../Hooks/useLoadApps';
import AppCard from '../AppCard/AppCard';
import { NavLink } from 'react-router';
import Loading from '../Loading/Loading';

const HomeApps = () => {
    const {apps, loading} = useLoadApps();
    const slicedApps = apps.slice(0,8);

    if (loading) return <Loading></Loading>;

    return (
        <div className="px-4">
            <div className='container mx-auto py-10 mt-10'>
            <h1 className='text-center text-blue-950 font-bold text-3xl'>Trending Apps</h1>
            <p className='text-center text-blue-950'>Explore All Trending Apps on the Market developed by us</p>

            <div className='grid lg:grid-cols-4 gap-4 grid-cols-2 mt-6'>
                {
                    slicedApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>

            <div className='text-center my-10'>
                <NavLink to={`/apps`} className={`flex items-center gap-2 cursor-pointer inline px-6 py-2.5 text-white font-semibold rounded-lg bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] hover:opacity-90 transition`}>Show All</NavLink>
            </div>
        </div>
        </div>
    );
};

export default HomeApps;
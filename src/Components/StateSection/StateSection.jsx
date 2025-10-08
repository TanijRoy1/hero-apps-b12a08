import React from 'react';

const StateSection = () => {
    return (
        <div className='px-4 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]'>
            <div className='container mx-auto  text-white py-10'>
            <h1 className='text-center font-bold text-3xl'>Trusted by Millions, Built for You</h1>
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 mt-5'>
                <div className='bg-blue-500/40 px-6 py-8 rounded-2xl text-center'>
                    <p>Total Downloads</p>
                    <p className='text-3xl font-black mt-2'>29.6M</p>
                    <p className='mt-2'>21% more than last month</p>
                </div>
                <div className='bg-pink-500/40 px-6 py-8 rounded-2xl text-center'>
                    <p>Total Reviews</p>
                    <p className='text-3xl font-black mt-2'>906K</p>
                    <p className='mt-2'>46% more than last month</p>
                </div>
                <div className='bg-green-500/40 px-6 py-8 rounded-2xl text-center'>
                    <p>Active Apps</p>
                    <p className='text-3xl font-black mt-2'>132+</p>
                    <p className='mt-2'>31 more will Launch</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default StateSection;
import React from 'react';

const PageNotFound = () => {
    return (
        <div className='px-4'>
            <div className='container mx-auto'>
                <img src="" alt="" />
                <h1>Oops, page not found!</h1>
                <p>The page you are looking for is not available.</p>
                <button className='cursor-pointer px-4 py-2 text-white font-semibold rounded-lg bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] hover:opacity-90 transition'>Go Back!</button>
            </div>
        </div>
    );
};

export default PageNotFound;
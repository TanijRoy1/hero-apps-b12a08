import React from 'react';
import PageNotFoundImage from "../../assets/error-404.png"
import { useNavigate } from 'react-router';

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='px-4'>
            <div className='container mx-auto text-blue-950 flex flex-col items-center gap-2 py-12'>
                <img src={PageNotFoundImage} className='w-70' alt="page not found" />
                <h1 className='text-3xl font-bold'>Oops, page not found!</h1>
                <p>The page you are looking for is not available.</p>
                <button onClick={()=>navigate(-1)} className='cursor-pointer px-8 py-2 text-white font-semibold rounded-lg bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] hover:opacity-90 transition'>Go Back!</button>
            </div>
        </div>
    );
};

export default PageNotFound;
import React from 'react';
import AppNotFoundImg from "../../assets/App-Error.png"
import { useNavigate } from 'react-router';

const AppNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='px-4'>
                    <div className='container mx-auto text-blue-950 flex flex-col items-center gap-2 py-12'>
                        <img src={AppNotFoundImg} className='w-70' alt="App not Found" />
                        <h1 className='text-3xl font-bold'>OPPS!! APP NOT FOUND</h1>
                        <p>The App you are requesting is not found on our system.  please try another apps</p>
                        <button onClick={()=>navigate(-1)} className='cursor-pointer px-8 py-2 text-white font-semibold rounded-lg bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] hover:opacity-90 transition'>Go Back!</button>
                    </div>
                </div>
    );
};

export default AppNotFound;
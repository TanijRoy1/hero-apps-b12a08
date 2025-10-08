import React from 'react';
import Logo from "../../assets/logo.png"

const Loading = () => {
    return (
        <div className='flex items-center justify-center bg-[#F5F5F5] py-15 gap-1'>
            <h1 className='text-5xl font-bold text-blue-950'>L</h1>
            <img src={Logo} className='w-8 h-8 object-cover rotatingLogo' alt="Logo" />
            <h1 className='text-5xl font-bold text-blue-950'>DING...</h1>
        </div>
    );
};

export default Loading;
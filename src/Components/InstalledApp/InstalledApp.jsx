import React from 'react';
import DownloadIcon from "../../assets/icon-downloads.png"
import RatingIcon from "../../assets/icon-ratings.png"

const InstalledApp = ({app, handleUninstall}) => {
    const {id,image,title,size,ratingAvg,downloads} = app;

    
    return (
        <div className='bg-white rounded-sm shadow-md p-3 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <img src={image} className='w-20 h-20 object-cover rounded' alt={title} />
                <div className='flex flex-col gap-3'>
                    <h1 className='text-blue-950 font-bold text-2xl'>{title}</h1>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-1'>
                            <img src={DownloadIcon} className='w-4' alt="Downloan Icon" /> 
                            <p className='text-green-700 font-medium'>{downloads/1000000}M</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img src={RatingIcon} className='w-4' alt="Rating Icon" /> 
                            <p className='text-orange-500 font-medium'>{ratingAvg}</p>
                        </div>
                        <p className='text-blue-950 font-medium'>{size} MB</p>
                    </div>
                </div>
            </div>
            <button onClick={()=>handleUninstall(id)} className='bg-green-600 cursor-pointer text-white py-1.5 px-4 rounded font-medium'>Uninstall</button>
        </div>
    );
};

export default InstalledApp;
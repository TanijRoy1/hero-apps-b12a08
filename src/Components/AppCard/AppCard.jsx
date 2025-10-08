import React from 'react';
import DownLoadIcon from "../../assets/icon-downloads.png"
import RatingIcon from "../../assets/icon-ratings.png"
import { Link } from 'react-router';

const AppCard = ({app}) => {
    const {id, image, title, downloads, ratingAvg} = app;
    return (
        <Link to={`/apps/${id}`}>
         <div className='bg-white shadow-md rounded-md p-3'>
            <img src={image} className='w-full h-55 object-cover rounded-sm border border-gray-300' alt={title} />
            <h1 className='text-xl font-semibold my-2'>{title}</h1>
            <div className='flex items-center justify-between'>
                <p className='flex items-center gap-1 bg-green-100 text-green-500 p-1.5 px-3 rounded-sm font-semibold'><img src={DownLoadIcon} className='w-4 h-4' alt="" /> <span>{downloads/1000000}M</span></p>
                <p className='flex items-center gap-1 bg-orange-100 text-orange-500 p-1.5 px-3 rounded-sm font-semibold'><img src={RatingIcon} className='w-4 h-4' alt="" /> <span>{ratingAvg}</span></p>
            </div>
        </div>
        </Link>
    );
};

export default AppCard;
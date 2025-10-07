import React, { useState } from 'react';
import useLoadApps from '../../Hooks/useLoadApps';
import AppCard from '../AppCard/AppCard';

const AllApps = () => {
    const {apps} = useLoadApps();
    const [search, setSearch] = useState("");
    const searchTerm = search.trim().toLowerCase();
    const searchedApps = searchTerm ?
      apps.filter(app => app.title.toLowerCase().includes(searchTerm))
     : apps;

    return (
        <div className='container mx-auto py-14'>
            <h1 className='text-center text-blue-950 font-bold text-3xl'>Our All Applications</h1>
            <p className='text-center text-blue-950'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex my-6 items-center justify-between'>
                <p className='text-blue-950 font-bold text-2xl'>({searchedApps.length}) Apps Found</p>
                <input type="search" 
                   value={search}
                   onChange={e => setSearch(e.target.value)}
                   placeholder='Search Apps'
                   className='border border-gray-300 rounded-md block bg-blue-200 outline-none py-2 px-4'/>
            </div>

            <div className='grid lg:grid-cols-4 gap-4 grid-cols-2 mt-6'>
                {
                    searchedApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>

        </div>
    );
};

export default AllApps;
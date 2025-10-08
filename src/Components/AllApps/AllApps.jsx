import React, { useContext } from 'react';
import useLoadApps from '../../Hooks/useLoadApps';
import AppCard from '../AppCard/AppCard';
import { NavLink } from 'react-router';
import { SeacrhContext } from '../../Root/Root';

const AllApps = () => {
    const {search, setSearch} = useContext(SeacrhContext);
    const {apps} = useLoadApps();
    const searchTerm = search.trim().toLowerCase();
    const searchedApps = searchTerm ?
      apps.filter(app => app.title.toLowerCase().includes(searchTerm))
     : apps;

    if (searchedApps.length === 0) {
        return (
            <div className='flex flex-col items-center gap-3 py-20'>
                <h1 className='text-center text-blue-950 font-bold text-3xl'>No App Found</h1>
                <NavLink to={`/apps`} onClick={()=>setSearch("")} className={`flex items-center gap-2 cursor-pointer inline px-6 py-2.5 text-white font-semibold rounded-lg bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] hover:opacity-90 transition`}>Show All</NavLink>
            </div>
        )
    }

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
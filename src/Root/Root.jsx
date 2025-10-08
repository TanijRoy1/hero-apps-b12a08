import React, { createContext, useState } from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

export const SeacrhContext = createContext("");

const Root = () => {
    const [search, setSearch] = useState("");
    return (
        <div>
            <SeacrhContext value={{search, setSearch}}>
                <Header></Header>
               <Outlet></Outlet>
               <Footer></Footer>
            </SeacrhContext>
        </div>
    );
};

export default Root;
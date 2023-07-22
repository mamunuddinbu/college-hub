import React from 'react';
import Navbar from '../commomCompo/Navbar';
import Footer from '../commomCompo/Footer';
import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../component/footer/Footer';


const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;<h2>Home Page</h2>
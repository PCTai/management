import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Common/Header';
import Navbar from '../Common/Navbar';

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Navbar />
        </div>
    );
};

export default Layout;

import React from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Navhamburger from '../components/Header/Navhamburger';
import Footer from '../components/Footer/Footer';

type Props = {};

export default function Root({}: Props) {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

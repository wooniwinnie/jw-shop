import React from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router-dom';
import Navhamburger from '../components/Header/Navhamburger';

type Props = {};

export default function Root({}: Props) {
    return (
        <div>
            {/* <Navbar /> */}
            <Navhamburger />
            <Outlet />
        </div>
    );
}

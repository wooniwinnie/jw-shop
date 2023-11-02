import React from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router-dom';

type Props = {};

export default function Root({}: Props) {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}

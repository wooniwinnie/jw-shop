import React from 'react';

import ShirtsProduct from '../components/Products/Shirts/ShirtsProduct';
import Navbar from '../components/Header/Navbar';

type Props = {};

export default function Shirts({}: Props) {
    return (
        <div>
            <Navbar />
            <ShirtsProduct />
        </div>
    );
}

import React, { useState } from 'react';
import ShirtsProducts from '../components/Products/Shirts/ShirtsProducts';
import AddProducts from '../components/Common/AddProducts';

type Props = {};

export default function Shirts({}: Props) {
    return (
        <div>
            <ShirtsProducts />
        </div>
    );
}

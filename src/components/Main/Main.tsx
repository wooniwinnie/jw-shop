import React, { useState } from 'react';
import Btn from '../Common/Btn';

type Props = {};

export default function Main({}: Props) {
    const [color, setColor] = useState(
        'h-10 mt-10 rounded-md w-28 bg-neutral-500 text-white'
    );

    const btnColorChange = () => {
        setColor(
            'h-10 mt-10  rounded-md w-28 bg-amber-600 transition-all text-white'
        );
    };

    const btnColorBack = () => {
        setColor('h-10 mt-10  rounded-md w-28 bg-stone-800 text-white');
    };

    return (
        <div className='relative sm:w-full'>
            <img
                src='https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
            />
            <div className='absolute text-white px-28 top-52 '>
                <h1 className='text-6xl '>The season of mid-autumn</h1>
                <div className='h-4 mt-8 bg-orange-200 w-9/12q'></div>
                <p className='mt-8 text-lg'>
                    all orders over $200 USD are eligible to add a free sticker
                    and <br /> pin bundle to their cart for free.
                </p>
                <Btn
                    url='/test'
                    title='shop now'
                    className={color}
                    onMouseLeave={btnColorBack}
                    onMouseOver={btnColorChange}
                />
            </div>
        </div>
    );
}

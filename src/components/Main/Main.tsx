import React, { useState } from 'react';
import Btn from '../Common/Btn';

type Props = {};

export default function Main({}: Props) {
    const [color, setColor] = useState(
        'text-xs h-6 rounded-md w-20 bg-neutral-500 text-white font-thin mt-4'
    );

    const btnColorChange = () => {
        setColor(
            'h-6 mt-10 rounded-md w-20 w-28 bg-amber-600 transition-all text-white h-10'
        );
    };

    const btnColorBack = () => {
        setColor('text-xs h-8 rounded-md w-20 bg-neutral-500 text-white');
    };

    return (
        <main className='w-full text-white sm:text-xs '>
            <div className='relative '>
                <img
                    className=''
                    src='https://images.unsplash.com/photo-1581497396202-5645e76a3a8e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt=''
                />
                <div className='absolute px-8 transform -translate-y-1/2 top-1/2 '>
                    <h1 className='text-center sm:text-lg'>
                        The season of mid-autumn
                    </h1>
                    <div className='h-1 bg-yellow-300 '></div>
                    <p className=''>
                        all orders over $200 USD are eligible to add a free
                        sticker and pin bundle to their cart for free.
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
        </main>
    );
}

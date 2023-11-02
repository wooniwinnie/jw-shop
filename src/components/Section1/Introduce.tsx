import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Btn from '../Common/Btn';
type Props = {};

export default function Introduce({}: Props) {
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
        <div className='relative w-full text-center h-96 bg-neutral-100'>
            <div className='absolute w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                <h1 className='text-2xl '>made to last</h1>
                <p className='pt-8'>
                    Our sweaters are meticulously crafted, and each
                    hand-stitched detail represents the artistry of our
                    artisans. <br /> They don't just add warmth; they tell a
                    story. Our sweaters are a harmonious blend of sophisticated
                    style <br /> and the touch of a craftsman.
                </p>
                {/* <button>
                <Link to='/learnmore'>learn more</Link>
            </button> */}
                <Btn
                    url='/learnmore'
                    title='learn more'
                    className={color}
                    onMouseOver={btnColorChange}
                    onMouseLeave={btnColorBack}
                />
            </div>
        </div>
    );
}

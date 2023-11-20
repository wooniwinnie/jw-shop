import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Btn from '../Common/Btn';
type Props = {};

export default function Introduce({}: Props) {
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
        <div className='px-8 mt-10 text-center'>
            <div className='sm:text-xs'>
                <h1 className='sm:text-lg'>made to last</h1>
                <p className=''>
                    Our sweaters are meticulously crafted, and each
                    hand-stitched detail represents the artistry of our
                    artisans. They don't just add warmth; they tell a story. Our
                    sweaters are a harmonious blend of sophisticated style and
                    the touch of a craftsman.
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

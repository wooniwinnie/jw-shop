import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Btn from '../Common/Btn';

type Props = {};

export default function Shopnav({}: Props) {
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

    const mainCard = [
        {
            title: 'night market',
            text: 'as night falls, the interplay of lights and asian food transforms the market into an unforgettable culinary wonderland.',
            url: 'https://images.unsplash.com/photo-1611911813383-67769b37a149?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3dlYXRlcnxlbnwwfHwwfHx8MA%3D%3D',
            alt: '스웨터',
        },
        {
            title: 'tsukimi',
            text: 'mid-autumn festival, or tsukimi, is a classic traditinon focused on family reunions, moon cakes nad moon gazing.',
            url: 'https://images.unsplash.com/photo-1696844599370-0fa5c6868cb0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGF1dHVtbiUyMHBhbnRzfGVufDB8fDB8fHww',
            alt: '신발',
        },
    ];

    const subCard = [
        {
            text: 'shirts',
            url: 'https://images.unsplash.com/photo-1551201602-3f9456f0fbf8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
            alt: 'shirts',
            icon: <AiOutlineArrowRight />,
            link: '/shop/shirts',
        },
        {
            text: 'pants',
            url: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhbnRzfGVufDB8fDB8fHww',
            alt: 'pants',
            icon: <AiOutlineArrowRight />,
            link: '/shop/pants',
        },
        {
            text: 'shoes',
            url: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNob2VzfGVufDB8fDB8fHww',
            alt: 'shoes',
            icon: <AiOutlineArrowRight />,
            link: '/shop/shoes',
        },
    ];
    return (
        <div className='w-full h-full px-20 mt-10'>
            {mainCard.map((item, index) => (
                <div
                    className='flex justify-between w-5/6 pt-10 m-auto'
                    key={index}
                >
                    <div className='w-500 h-500 '>
                        <img
                            className='object-cover w-full h-full '
                            src={item.url}
                            alt={item.alt}
                        />
                    </div>
                    <div className='relative w-1/2'>
                        <div className='absolute w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                            <h1 className='text-3xl'>{item.title}</h1>
                            <p>{item.text}</p>
                            <Btn
                                className={color}
                                url='/shirts'
                                title='shop now'
                                onMouseOver={btnColorChange}
                                onMouseLeave={btnColorBack}
                            />
                        </div>
                    </div>
                </div>
            ))}

            <div className='flex justify-between w-5/6 m-auto mt-10'>
                {subCard.map((sub, index) => (
                    <div className='w-96 h-96' key={index}>
                        <Link to={sub.link}>
                            <img
                                className='object-cover w-full h-full'
                                src={sub.url}
                                alt={sub.alt}
                            />
                            <div className='flex items-center'>
                                <p>{sub.text}</p>
                                <span className='pl-2'>{sub.icon}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

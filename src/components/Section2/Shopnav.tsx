import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Btn from '../Common/Btn';

type Props = {};

export default function Shopnav({}: Props) {
    const [color, setColor] = useState(
        'text-xs h-6 rounded-md w-20 bg-neutral-500 text-white font-thin mt-4 my-8'
    );

    const btnColorChange = () => {
        setColor(
            'h-6 mt-10 rounded-md w-20 w-28 bg-amber-600 transition-all text-white h-10'
        );
    };

    const btnColorBack = () => {
        setColor('text-xs sm:h-8 rounded-md w-20 bg-neutral-500 text-white');
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
        <div className='mt-10'>
            {mainCard.map((item, index) => (
                <div className='' key={index}>
                    <div className=''>
                        <img
                            className='sm:w-full sm:h-96'
                            src={item.url}
                            alt={item.alt}
                        />
                    </div>
                    <div className='mt-10'>
                        <div className='text-center '>
                            <h1 className='sm:text-lg'>{item.title}</h1>
                            <p className='py-8 sm:text-xs'>{item.text}</p>
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

            <div className=''>
                {subCard.map((sub, index) => (
                    <div className='' key={index}>
                        <Link to={sub.link}>
                            <img className='' src={sub.url} alt={sub.alt} />
                            <div className='flex items-center sm:text-xs sm:py-2'>
                                <p>{sub.text}</p>
                                <span className=''>{sub.icon}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

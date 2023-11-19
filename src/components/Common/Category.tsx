import React from 'react';
import { Link } from 'react-router-dom';
import { TiDeleteOutline } from 'react-icons/ti';

type Props = {
    removeCategory: () => void;
};

export default function Category({ removeCategory }: Props) {
    return (
        <div className='absolute z-10 flex justify-between w-full px-20 transform -translate-x-1/2 bg-white left-1/2 top-92px h-80'>
            <div className='flex w-1/2 pl-8 border-r-2 '>
                {categoryNav.map((item, index) => (
                    <div key={index}>
                        <div className='pr-12'>
                            <h1 className='pt-4 text-xl'>{item.title}</h1>
                            <ul className='pt-4'>
                                {item.category.map((sub, index) => (
                                    <Link to={sub.link}>
                                        <li key={index}>{sub.title}</li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
                <div>
                    <button className='text-2xl ' onClick={removeCategory}>
                        <TiDeleteOutline />
                    </button>
                </div>
            </div>
            <div className='flex justify-between w-1/2 px-16'>
                {categoryImg.map((item, index) => (
                    <Link to={item.url}>
                        <div key={index} className='relative w-72 h-72'>
                            <img
                                className={item.style}
                                src={item.src}
                                alt={item.alt}
                            />
                            <h1 className='absolute text-2xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                                {item.title}
                            </h1>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
const categoryNav = [
    {
        title: "man's clothing",
        category: [
            {
                title: 'shirts',
                link: '/shirts',
            },
            {
                title: 'cardigan',
                link: '/cardigan',
            },
            {
                title: 'sweater',
                link: '/sweater',
            },
            {
                title: 'hood',
                link: '/hood',
            },
            {
                title: 'short-sleeved shirt',
                link: '/short_sleeved_shirt',
            },
            {
                title: 'long-sleeved shirt',
                link: '/long_sleeved_shirt',
            },
            {
                title: 'shoes',
                link: '/shoes',
            },
        ],
    },
    {
        title: "woman's clothing",
        category: [
            {
                title: 'blouse',
                link: '/blouse',
            },
            {
                title: 'cardigan',
                link: '/cardigan',
            },
            {
                title: 'sweater',
                link: '/sweater',
            },
            {
                title: 'onepiece',
                link: '/onepiece',
            },
            {
                title: 'short-sleeved shirt',
                link: '/short_sleeved_shirt',
            },
            {
                title: 'long-sleeved shirt',
                link: '/long_sleeved_shirt',
            },
            {
                title: 'shoes',
                link: '/shoes',
            },
        ],
    },
    {
        title: 'lifestyle series',
        category: [
            {
                title: 'backpack',
                link: '/backpack',
            },
            {
                title: 'handbag',
                link: '/handbag',
            },
            {
                title: 'glasses',
                link: '/glasses',
            },
            {
                title: 'jewelry',
                link: '/jewelry',
            },
        ],
    },
];

const categoryImg = [
    {
        url: '/allproducts',
        src: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGFwcGFyZWx8ZW58MHx8MHx8fDA%3D',
        alt: 'shop',
        title: 'browse all products',
        style: 'w-full h-full object-fill pl-4 ',
    },
    {
        url: '/best',
        src: 'https://images.unsplash.com/photo-1546641082-b3c3d4bfae25?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVzdHxlbnwwfHwwfHx8MA%3D%3D',
        alt: 'best',
        title: 'best items',
        style: 'w-full h-full object-fill',
    },
];

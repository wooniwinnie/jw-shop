import React from 'react';
import { Link } from 'react-router-dom';
import { TiDeleteOutline } from 'react-icons/ti';

type Props = {
    removeCategory: () => void;
};

export default function Category({ removeCategory }: Props) {
    return (
        <div className='absolute z-10 text-xs bg-white sm:w-full top-10'>
            <div className='flex sm:justify-between'>
                <div>
                    {categoryNav.map((item, index) => (
                        <div>
                            <h1 className='sm:text-sm'>{item.title}</h1>
                            <ul>
                                {item.category.map((sub, index) => (
                                    <Link to={sub.link}>
                                        <li
                                            onClick={removeCategory}
                                            key={index}
                                        >
                                            {sub.title}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div>
                    <button className='text-lg ' onClick={removeCategory}>
                        <TiDeleteOutline />
                    </button>
                </div>
            </div>
            <div className=' sm:hidden'>
                {categoryImg.map((item, index) => (
                    <Link to={item.url}>
                        <div key={index} className='relative'>
                            <img
                                className={item.style}
                                src={item.src}
                                alt={item.alt}
                            />
                            <h1 className='absolute '>{item.title}</h1>
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

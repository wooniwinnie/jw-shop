import React, { useState } from 'react';
import { BsSearch, BsPeopleFill, BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Category from '../Common/Category';
type Props = {
    showCategory: (index: number) => void;
};

export default function Navhamburger({ showCategory }: Props) {
    return (
        <div className='absolute z-10 w-full text-xs text-white top-10'>
            <ul className='flex items-center justify-between w-full'>
                {navBarMenu.map((item, index) => (
                    <li
                        onClick={() => showCategory(index)}
                        className={item.style}
                        key={index}
                    >
                        <Link to={item.link}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const navBarMenu = [
    // {
    //     title: 'YMA SHOP',
    //     link: '/',
    //     style: 'pr-6 text-lg',
    // },
    {
        title: 'home',
        link: '/',
        style: 'px-2',
    },
    {
        title: 'shop',
        link: '',
        style: 'px-2',
    },
    {
        title: 'about',
        link: '/about',
        style: 'px-2',
    },
    {
        title: 'contacct',
        link: '/contact',
        style: 'px-2',
    },
    {
        title: <BsSearch />,
        link: '',
        style: 'px-2',
    },
    {
        title: <BsPeopleFill />,
        link: '',
        style: 'px-2',
    },
    {
        title: <BsFillCartFill />,
        link: '',
        style: 'px-2',
    },
];

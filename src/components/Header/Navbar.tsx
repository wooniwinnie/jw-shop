import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch, BsPeopleFill, BsFillCartFill } from 'react-icons/bs';
import Searchbox from '../Common/Searchbox';
import Category from '../Common/Category';

type Props = {};

export default function Navbar({}: Props) {
    // const [clickedIndex, setClickedIndex] = useState<number | null>();
    const [showCategory, setShowCategory] = useState(false);

    const addCategory = (index: number) => {
        if (index === 2) {
            setShowCategory(!false);
        }
    };

    const removeCategory = () => {
        setShowCategory(!true);
    };

    return (
        <nav className='relative flex justify-between py-8 px-28 '>
            <ul className='flex items-center justify-between'>
                {navBarMenu.map((item, index) => (
                    <li
                        key={index}
                        className={item.style}
                        onClick={() => addCategory(index)}
                    >
                        <Link to={item.link}>{item.title}</Link>
                    </li>
                ))}
            </ul>
            <ul className='flex items-center text-lg'>
                <li className='px-3'>
                    <BsSearch />
                </li>
                <li className='px-3'>
                    <BsPeopleFill />
                </li>
                <li className='px-3'>
                    <BsFillCartFill />
                </li>
            </ul>
            {/* <Category /> */}
            {showCategory === true ? (
                <Category removeCategory={removeCategory} />
            ) : null}
            {/* <Searchbox /> */}
        </nav>
    );
}
const navBarMenu = [
    {
        title: 'YMA SHOP',
        link: '/',
        style: 'pr-6 text-lg',
    },
    {
        title: 'home',
        link: '/',
        style: 'px-3',
    },
    {
        title: 'shop',
        link: '',
        style: 'px-3',
    },
    {
        title: 'about',
        link: '/about',
        style: 'px-3',
    },
    {
        title: 'contacct',
        link: '/contact',
        style: 'px-3',
    },
];

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch, BsPeopleFill, BsFillCartFill } from 'react-icons/bs';
import { CiMenuFries } from 'react-icons/ci';
import { GoPlus } from 'react-icons/go';
import Searchbox from '../Common/Searchbox';
import Category from '../Common/Category';
import Navhamburger from './Navhamburger';

type Props = {};

export default function Navbar({}: Props) {
    // const [showCategory, setShowCategory] = useState(false);
    // const addCategory = (index: number) => {
    //     if (index === 2) {
    //         setShowCategory((showCategory) => !showCategory);
    //     }
    // };

    // const removeCategory = () => {
    //     setShowCategory(!true);
    // };

    const [showHamburg, setShowHamburg] = useState(false);
    const handleOnClickMenu = () => {
        setShowHamburg((showHamburg) => !showHamburg);
    };
    const [showCategory, setShowCategory] = useState(false);
    const handleShowCategory = (index: number) => {
        if (index === 1) {
            setShowCategory((showCategory) => !showCategory);
        }
        setShowHamburg(false);
    };
    const handleRemove = () => {
        setShowCategory(false);
    };
    return (
        // <nav className='relative flex justify-between py-8 px-28 '>
        //     <ul className='flex items-center justify-between'>
        //         {navBarMenu.map((item, index) => (
        //             <li
        //                 key={index}
        //                 className={item.style}
        //                 onClick={() => addCategory(index)}
        //             >
        //                 <Link key={index} to={item.link}>
        //                     {item.title}
        //                 </Link>
        //             </li>
        //         ))}
        //     </ul>
        //     <ul className='flex items-center text-lg'>
        //         <li className='px-3'>
        //             <BsSearch />
        //         </li>
        //         <li className='px-3'>
        //             <BsPeopleFill />
        //         </li>
        //         <li className='px-3'>
        //             <BsFillCartFill />
        //         </li>
        //     </ul>
        //     {showCategory === true ? (
        //         <Category removeCategory={removeCategory} />
        //     ) : null}
        //     {/* <Searchbox /> */}
        // </nav>

        <header className='w-full h-10 '>
            <nav className='flex items-center justify-between px-2 py-2 text-xs'>
                <ul className='text-sm'>
                    <li>
                        <Link to='/'>YMA SHOP</Link>
                    </li>
                </ul>
                <ul className='flex'>
                    <li className='px-2 '>
                        <button onClick={handleOnClickMenu}>
                            <CiMenuFries />
                        </button>
                    </li>
                </ul>
            </nav>
            {showHamburg === true ? (
                <Navhamburger showCategory={handleShowCategory} />
            ) : null}
            {showCategory === true ? (
                <Category removeCategory={handleRemove} />
            ) : null}
        </header>
    );
}

// console.log(window.innerWidth);

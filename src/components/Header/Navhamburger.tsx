import React from 'react';
import { Link } from 'react-router-dom';
import { CiMenuFries } from 'react-icons/ci';
import { GoPlus } from 'react-icons/go';
import { navBarMenu } from './Navbar';
type Props = {};

export default function Navhamburger({}: Props) {
    return (
        <nav className='flex justify-between sm:text-xs sm:w-full'>
            <ul>
                <li>
                    <Link to='/'>YMA SHOP</Link>
                </li>
            </ul>
            <ul className='flex '>
                <li>
                    <button>
                        <CiMenuFries />
                    </button>
                </li>
                <li>
                    <button>
                        <GoPlus />
                    </button>
                </li>
            </ul>
        </nav>
    );
}

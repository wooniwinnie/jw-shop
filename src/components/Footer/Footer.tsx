import React from 'react';
import { Link, createBrowserRouter } from 'react-router-dom';
import { BsInstagram, BsDiscord, BsFacebook } from 'react-icons/bs';

type Props = {};

// 각종 Link들은 하단에 배치

export default function Footer({}: Props) {
    return (
        <footer className='py-1 mt-10 text-xs text-white bg-black '>
            <div className=''>
                <div className='flex items-center justify-between '>
                    <div className=''>
                        <Link to='/home'>YMA SHOP</Link>
                    </div>
                    <form className='flex items-center '>
                        <select name='' id='' className='bg-transparent'>
                            <option value='krw'>KRW(₩)</option>
                            <option value='usd'>USD($)</option>
                            <option value='cny'>CNY(¥)</option>
                            <option value='jpy'>JPY(¥)</option>
                        </select>
                        <div className='flex '>
                            {snsIcon.map((item, index) => (
                                <Link
                                    key={index}
                                    className='px-1'
                                    to={item.url}
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </form>
                </div>
                <ul className='mt-4'>
                    {footerNav.map((item, index) => (
                        <li key={index} className='py-1'>
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='mt-2'>
                <ul className='flex flex-col'>
                    {policyLink.map((item, index) => (
                        <Link key={index} className='py-1' to={item.url}>
                            {item.text}
                        </Link>
                    ))}
                </ul>
                <ul className='mt-3 text-center'>
                    <li>
                        <Link to='/home'>&copy; YMA, You and Me inc </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

const footerNav = [
    {
        title: 'shop',
        link: '/shop',
    },
    {
        title: 'my account',
        link: '/account',
    },
    {
        title: 'contact us',
        link: '/contact',
    },
    {
        title: 'order & shipping',
        link: '/order',
    },
    {
        title: 'frequently asked questions',
        link: '/faq',
    },
    {
        title: 'documentation',
        link: '/document',
    },
    {
        title: 'our blog',
        link: '/blog',
    },
];
const snsIcon = [
    {
        url: 'https://instagram.com',
        icon: <BsInstagram />,
    },
    {
        url: 'https://discord.com',
        icon: <BsDiscord />,
    },
    {
        url: 'https://facebook.com',
        icon: <BsFacebook />,
    },
];
const policyLink = [
    {
        url: '/return',
        text: 'return policy',
    },
    {
        url: '/privacy',
        text: 'privacy policy',
    },
    {
        url: '/use',
        text: 'terms of use',
    },
];

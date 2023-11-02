import React from 'react';
import { Link, createBrowserRouter } from 'react-router-dom';
import { BsInstagram, BsDiscord, BsFacebook } from 'react-icons/bs';

type Props = {};

// 각종 Link들은 하단에 배치

export default function Footer({}: Props) {
    return (
        <footer className='text-white '>
            <div className='bg-slate-800'>
                <div className='flex items-center justify-between px-48 pt-12'>
                    <div className='text-3xl'>
                        <Link to='/home'>YMA SHOP</Link>
                    </div>
                    <form className='flex text-2xl '>
                        <select name='' id='' className='bg-transparent'>
                            <option value='krw'>KRW(₩)</option>
                            <option value='usd'>USD($)</option>
                            <option value='cny'>CNY(¥)</option>
                            <option value='jpy'>JPY(¥)</option>
                        </select>
                        <div className='flex pl-8 text-2xl'>
                            {snsIcon.map((item, index) => (
                                <Link
                                    key={index}
                                    className='pl-8 '
                                    to={item.url}
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </form>
                </div>
                <ul className='px-48 py-8 '>
                    {footerNav.map((item, index) => (
                        <li key={index} className='py-2 '>
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex items-center justify-between px-48 bg-black h-14'>
                <ul className='flex'>
                    {policyLink.map((item, index) => (
                        <Link key={index} className='pr-8' to={item.url}>
                            {item.text}
                        </Link>
                    ))}
                </ul>
                <ul>
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

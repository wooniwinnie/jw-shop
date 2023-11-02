import React from 'react';
import Main from '../components/Main/Main';
import Introduce from '../components/Section1/Introduce';
import Footer from '../components/Footer/Footer';
import Shopnav from '../components/Section2/Shopnav';
import Subscribing from '../components/Section3/Subscribing';

type Props = {};

export default function Home({}: Props) {
    return (
        <>
            <Main />
            <Introduce />
            <Shopnav />
            <Subscribing />
            <Footer />
        </>
    );
}

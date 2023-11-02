import React from 'react';
import { BsSearch } from 'react-icons/bs';

type Props = {};

export default function Searchbox({}: Props) {
    return (
        <form className='absolute z-50 flex w-full h-12 bg-slate-600 top-24'>
            <BsSearch />
            <input
                type='text'
                placeholder='I am looking for...'
                className='bg-transparent '
            />
        </form>
    );
}

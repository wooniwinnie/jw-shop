import React, { ChangeEvent, FormEvent, useState } from 'react';
import { BsCheckSquare } from 'react-icons/bs';

type Props = {};

export default function Subscribing({}: Props) {
    const [showText, setShowText] = useState(false);
    const [emailText, setEmailText] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmailText(e.target.value);
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setShowText(!showText);
        setEmailText('');
    };
    return (
        <form
            className='w-full h-full px-48 mt-24 bg-orange-200'
            onSubmit={handleSubmit}
        >
            <div className='flex items-center justify-between'>
                <div className='text-lg '>
                    <p>stay updated with our latest news</p>
                </div>
                <div className='pt-4 '>
                    <input
                        onChange={handleChange}
                        type='email'
                        value={emailText}
                        placeholder='your email'
                        className='h-9 w-96'
                    />
                    <button className='w-24 text-white bg-zinc-500 h-9'>
                        subscribe
                    </button>

                    {showText === true ? (
                        <div className='flex items-center '>
                            <span className='pr-2 text-white'>
                                <BsCheckSquare className='bg-green-500 border-transparent ' />
                            </span>
                            <p className='py-3 '>thanks for subscribing</p>
                        </div>
                    ) : null}
                </div>
            </div>
        </form>
    );
}

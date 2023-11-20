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
        <form className='px-10 mt-10 sm:text-xs' onSubmit={handleSubmit}>
            <div className=''>
                <div className='text-center sm:text-sm '>
                    <p>stay updated with our latest news</p>
                </div>
                <div className='flex justify-between'>
                    <input
                        onChange={handleChange}
                        type='email'
                        value={emailText}
                        placeholder='your email'
                        className='sm:w-full'
                    />
                    <button className=''>subscribe</button>

                    {showText === true ? (
                        <div className=''>
                            <span className=''>
                                <BsCheckSquare className='' />
                            </span>
                            <p className='py-3 '>thanks for subscribing</p>
                        </div>
                    ) : null}
                </div>
            </div>
        </form>
    );
}

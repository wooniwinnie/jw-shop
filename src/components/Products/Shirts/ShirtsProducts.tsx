import React, { ChangeEvent, useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import { shirtsList } from './ShirtsList';
import AddProducts from '../../Common/AddProducts';

type Props = {};

export type ShirtsListType = {
    id: string;
    name: string;
    price: number;
    imgUrl: string;
    alt: string;
    rating: number;
};

export default function ShirtsProducts({}: Props) {
    // add product 클릭시 AddProducts 컴포넌트 On & Close
    const [showAddForm, setShowAddForm] = useState(false);
    const handleOnClick = () => {
        setShowAddForm((showAddForm) => !showAddForm);
    };
    const handleOnClose = () => {
        setShowAddForm(!showAddForm);
    };
    const [shirtsCard, setShirtsCard] = useState(shirtsList);
    const sendAddShirts = (addShirts: any) => {
        // 전달받은 데이터를 받아서 셔츠 리스트를 추가해줭
        setShirtsCard(addShirts);
    };
    return (
        <>
            <div className='relative '>
                <div className='flex justify-end px-24'>
                    <button onClick={handleOnClick}>add product</button>
                </div>
                <div className='flex justify-between px-24 mt-12'>
                    {shirtsCard.map((card) => (
                        <div key={card.id}>
                            <div className=' w-96 h-96'>
                                <img
                                    className='w-full h-full'
                                    src={card.imageUrl}
                                    alt={card.alt}
                                />
                            </div>
                            <div>
                                <ul>
                                    <li>product name : {card.name}</li>
                                    <li>price : {card.price}</li>
                                    <li>rating : {card.rating}</li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showAddForm === true ? (
                <AddProducts
                    handleClose={handleOnClose}
                    sendAddShirts={sendAddShirts}
                />
            ) : null}
        </>
    );
}

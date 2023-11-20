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
    // any 타입 꼭 수정할 것!!
    const sendAddShirts = (addShirts: any) => {
        // 전달받은 데이터를 받아서 셔츠 리스트를 추가해줭
        setShirtsCard(addShirts);
    };
    return (
        <>
            <div className='mt-5 '>
                <div className='px-2 text-xs'>
                    <button onClick={handleOnClick}>add product</button>
                </div>
                <div className='flex flex-wrap justify-between w-full mt-5'>
                    {shirtsCard.map((card) => (
                        <div key={card.id} className='w-1/2 px-1 h-60'>
                            <div className=' h-44'>
                                <img
                                    className='w-full h-full'
                                    src={card.imageUrl}
                                    alt={card.alt}
                                />
                            </div>
                            <div>
                                <ul className='text-xs'>
                                    <li>{card.name}</li>
                                    <li>{card.price}</li>
                                    <li>{card.rating}</li>
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

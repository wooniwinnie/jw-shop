import React, { useState, FormEvent, ChangeEvent } from 'react';
import { v4 as uuid } from 'uuid';
import { shirtsList } from '../Products/Shirts/ShirtsList';

type Props = {
    handleClose: () => void;
    sendAddShirts: (addShirts: any) => void;
};
// id: string;
// name: string;
// description: string;
// price: number;
// sizes: string[];
// color: string;
// stock: number;
// imageUrl: string;
// alt: string;
// rating: number;
// reviews: {
//     user: string;
//     rating: number;
//     comment: string;
// }[];
// }[]
type AddShirts = {
    id: string;
    name: string;
    description: string;
    price: number;
    sizes: string[];
    color: string;
    stock: number;
    imageUrl: string;
    alt: string;
    rating: number;
    reviews: {
        user: string;
        rating: number;
        comment: string;
    }[];
}[];

export default function AddProducts({ handleClose, sendAddShirts }: Props) {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        sendAddShirts(addShirts);
        // 입력한 데이터를 보내자
        // 입력한 데이터 : handleChange의 e.target
    };
    const [addShirts, setAddShirts] = useState<AddShirts>(shirtsList);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAddShirts((currentShirts) =>
            currentShirts.map((shirt: any) => {
                if (shirt[name] !== undefined) {
                    return { ...shirt, [name]: value };
                }
                return shirt;
            })
        );

        // setAddShirts((addShirts) =>
        //     addShirts.map((shirtsItem, index) => ({
        //         ...shirtsItem,
        //         [name]: value,
        //     }))
        // );
    };

    return (
        <div className='absolute bg-white border top-40 w-500 h-96'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col '>
                    {addSirts.map((shirtsform, index) => (
                        <div className='py-4' key={index}>
                            <label htmlFor={shirtsform.id}>
                                {shirtsform.title}
                            </label>
                            <input
                                onChange={handleChange}
                                className='w-full border-b-2 '
                                type={shirtsform.type}
                                id={shirtsform.id}
                                name={shirtsform.name}
                            />
                        </div>
                    ))}
                </div>
                <div className='flex justify-between px-12'>
                    <button className='w-20 text-white rounded bg-amber-600'>
                        등록하기
                    </button>
                    <button
                        onClick={handleClose}
                        className='w-20 text-white rounded bg-amber-600'
                    >
                        닫기
                    </button>
                </div>
            </form>
        </div>
    );
}
const addSirts = [
    {
        type: 'text',
        id: 'productname',
        name: 'name',
        title: 'product name : ',
    },
    {
        type: 'text',
        id: 'productprice',
        name: 'price',
        title: 'product price :',
    },
    {
        type: 'text',
        id: 'productname',
        name: 'img',
        title: 'product img : ',
    },
    {
        type: 'text',
        id: 'productrating',
        name: 'rating',
        title: 'product rating : ',
    },
];

import React, { useState, FormEvent, ChangeEvent } from 'react';
import { shirtsProduct } from './ShirtsProducts';
import { SlBasket } from 'react-icons/sl';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

type Props = {};

export default function ShirtsProduct({}: Props) {
    const [formData, setFormData] = useState({
        productName: '',
        productDescription: '',
        productPrice: '',
        productSizes: '',
        productColor: '',
        productImgUrl: '',
        productStock: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        shirtsProduct.map((prod) => ({
            ...prod,
            id: uuidv4(),
            name: formData.productName,
            description: formData.productDescription,
            price: formData.productPrice,
            sizes: formData.productSizes,
            color: formData.productColor,
            stock: formData.productStock,
            imageUrl: formData.productImgUrl,
        }));
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(formData);
    };
    return (
        <>
            <div className='flex w-full '>
                {shirtsProduct.map((item, index) => (
                    <div key={index} className='w-full'>
                        <div className='w-96 h-96'>
                            <img
                                className='w-full h-full'
                                src={item.imageUrl}
                                alt={item.alt}
                            />
                        </div>
                        <div className='bg-orange-300 w-96 '>
                            <ul>
                                <h1>제품명 : {item.name}</h1>
                                <li>상세설명 : {item.description}</li>
                                <li>재고 : {item.stock} </li>
                                <li>가격 : {item.price} </li>
                            </ul>
                            <form>
                                <label>Choose a size: </label>
                                <select name='size' id='shirts-size'>
                                    <option value=''>
                                        --Please choose an option--
                                    </option>
                                    <option value='s'>S</option>
                                    <option value='m'>M</option>
                                    <option value='l'>L</option>
                                    <option value='xl'>XL</option>
                                </select>
                                <div className='flex'>
                                    수량 : <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                                <div className='flex justify-between px-6'>
                                    <button className='flex items-center border'>
                                        <p>장바구니</p>
                                        <SlBasket />
                                    </button>
                                    <button className='flex items-center border'>
                                        <p>구매하기</p>
                                        <AiOutlineCreditCard />
                                    </button>
                                </div>
                            </form>
                            <div>
                                <h1>Reviews</h1>
                                {item.reviews.map((review) => (
                                    <div>
                                        <h3>{review.user}</h3>
                                        <p>{review.comment}</p>
                                        <span>{review.rating}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className='mt-12 '>
                <h1>셔츠 등록하기</h1>
                <label htmlFor=''>제품명: </label>
                <input
                    type='text'
                    name='productName'
                    value={formData.productName}
                    placeholder='제품명을 입력하세용'
                    onChange={handleChange}
                />
                <label htmlFor=''>상세설명: </label>
                <input
                    type='text'
                    name='productDescription'
                    value={formData.productDescription}
                    placeholder='상세설명을 입력하세용'
                    onChange={handleChange}
                />
                <label htmlFor=''>가격: </label>
                <input
                    type='text'
                    name='productPrice'
                    placeholder='가격을 입력하세용'
                    value={formData.productPrice}
                    onChange={handleChange}
                />
                <label htmlFor=''>사이즈: </label>
                <input
                    type='text'
                    name='productSizes'
                    placeholder='사이즈 입력하세요'
                    value={formData.productSizes}
                    onChange={handleChange}
                />
                <label htmlFor=''>색상: </label>
                <input
                    type='text'
                    placeholder='색상입력하셈'
                    name='productColor'
                    value={formData.productColor}
                    onChange={handleChange}
                />
                <label htmlFor=''>재고: </label>
                <input
                    type='text'
                    name='productStock'
                    placeholder='재고를 입력하세용'
                    value={formData.productStock}
                    onChange={handleChange}
                />
                <label htmlFor=''>이미지: </label>
                <input
                    type='text'
                    name='productImgUrl'
                    placeholder='이미지 경로'
                    value={formData.productImgUrl}
                    onChange={handleChange}
                />
                <button className='w-32 border border-orange-600'>
                    등록!!!
                </button>
            </form>
        </>
    );
}

import { v4 as uuidv4 } from 'uuid';

export const shirtsList = [
    {
        id: uuidv4(),
        name: 'Classic White Tee',
        description: 'A classic white T-shirt made of 100% cotton.',
        price: 20000,
        sizes: ['S', 'M', 'L', 'XL'],
        color: 'White',
        stock: 123,
        imageUrl:
            'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
        alt: 'white tee',
        rating: 4.5,
        reviews: [
            {
                user: 'jiwoon',
                rating: 5,
                comment: 'Very comfortable!',
            },
            {
                user: 'kaeun',
                rating: 4,
                comment: 'Not Good!!',
            },
        ],
    },
    {
        id: uuidv4(),
        name: 'Casual Black Tee',
        description: 'A classic white T-shirt made of 100% cotton.',
        price: 34000,
        sizes: ['S', 'M', 'L', 'XL'],
        color: 'Black',
        stock: 20,
        imageUrl:
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
        alt: 'black tee',
        rating: 4.5,
        reviews: [
            {
                user: 'jiwoon',
                rating: 5,
                comment: 'Very comfortable!',
            },
            {
                user: 'kaeun',
                rating: 4,
                comment: 'Not Good!!',
            },
        ],
    },
    {
        id: uuidv4(),
        name: 'White Hood Tee',
        description: 'A classic white T-shirt made of 100% cotton.',
        price: 65000,
        sizes: ['S', 'M', 'L', 'XL'],
        color: 'White',
        stock: 10,
        imageUrl:
            'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D',
        alt: 'white hood tee',
        rating: 4.5,
        reviews: [
            {
                user: 'jiwoon',
                rating: 5,
                comment: 'Very comfortable!',
            },
            {
                user: 'kaeun',
                rating: 4,
                comment: 'Not Good!!',
            },
        ],
    },
];

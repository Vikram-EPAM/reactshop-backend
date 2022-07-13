const productList = [
    {
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa",
        title: 'Product 1',
        price: 10,
        count: 10,
        description: 'Product 1 description',
        image: 'https://picsum.photos/300/300?image=10',
    },
    {
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80ab",
        title: 'Product 2',
        price: 20,
        count: 20,
        description: 'Product 2 description',
        image: 'https://picsum.photos/300/300?image=20',
    },
    {
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80ac",
        title: 'Product 3',
        price: 30,
        count: 30,
        description: 'Product 3 description',
        image: 'https://picsum.photos/300/300?image=30',
    },
    {
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80ad",
        title: 'Product 4',
        price: 40,
        count: 40,
        description: 'Product 4 description',
        image: 'https://picsum.photos/300/300?image=40',
    },
    {
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80ae",
        title: 'Product 5',
        price: 50,
        count: 50,
        description: 'Product 5 description',
        image: 'https://picsum.photos/300/300?image=50',
    },
    {
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80af",
        title: 'Product 6',
        price: 60,
        count: 60,
        description: 'Product 6 description',
        image: 'https://picsum.photos/300/300?image=60',
    },
    {
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80ag",
        title: 'Product 7',
        price: 70,
        count: 70,
        description: 'Product 7 description',
        image: 'https://picsum.photos/300/300?image=70',
    },
    {
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80ah",
        title: 'Product 8',
        price: 80,
        count: 80,
        description: 'Product 8 description',
        image: 'https://picsum.photos/300/300?image=80',
    },
    {
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80ai",
        title: 'Product 9',
        price: 90,
        count: 90,
        description: 'Product 9 description',
        image: 'https://picsum.photos/300/300?image=90',
    },
    {
        id: "7567ec4b-b10c-48c5-9345-fc73c48a80aj",
        title: 'Product 10',
        price: 100,
        count: 100,
        description: 'Product 10 description',
        image: 'https://picsum.photos/300/300?image=100',
    }
];



export const getProducts = async () => {
    return productList;
}
export const getProductById = async (id) => {
    return productList.find(product => product.id === id);
}

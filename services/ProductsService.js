const PRODUCTS = [
    {
        id: 100,
        name: 'Mutton Biriyani',
        price: 11,
        image: require('../assets/products/MuttonBiriyani.png'),
        description: 'Delectable Mutton Biriyani from Muslim weddings',
        quantity: 0,
    },
    {
        id: 101,
        name: 'Chicken Biriyani',
        price: 600,
        image: require('../assets/products/ChickenBiriyani.png'),
        description: 'The Chicken variant cooked in the same style as Biriyanis from Muslim Weddings',
        quantity: 0
    } 
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}
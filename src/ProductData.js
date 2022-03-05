import Image from './img/450x300.jpg'
const ProductData = [
    {
        "productId": 1234,
        "productName": "Fancy Product",
        "productImg": Image,
        "productPrice": { "S": 40.00, "M": 50.00, "L": 80.00 },
        "productOptions": ["S", "M", "L"],
        "onSale": false,
        "rating": 0
    },
    {
        "productId": 1334,
        "productName": "Special Item",
        "productImg": Image,
        "productPrice": 20.00,
        "onSale": true,
        "discountPercent": 10,
        "rating": 5
    },
    {
        "productId": 1434,
        "productName": "Sale Item",
        "productImg": Image,
        "productPrice": 50.00,
        "onSale": true,
        "discountPercent": 50,
        "rating": 0
    },

    {
        "productId": 1534,
        "productName": "Popular Item",
        "productImg": Image,
        "productPrice": 40.00,
        "onSale": false,
        "rating": 5
    },
    {
        "productId": 1634,
        "productName": "Sale Item",
        "productImg": Image,
        "productPrice": 50.00,
        "onSale": true,
        "discountPercent": 50,
        "rating": 0
    },
    {
        "productId": 1734,
        "productName": "Fancy Product",
        "productImg": Image,
        "productPrice": { "S": 120.00, "M": 200.00, "L": 280.00 },
        "productOptions": ["S", "M", "L"],
        "onSale": false,
        "rating": 0
    },
    {
        "productId": 1834,
        "productName": "Special Item",
        "productImg": Image,
        "productPrice": 20.00,
        "onSale": true,
        "discountPercent": 10,
        "rating": 4
    },
    {
        "productId": 1934,
        "productName": "Popular Item",
        "productImg": Image,
        "productPrice": 40.00,
        "onSale": false,
        "rating": 5
    }
]

export default ProductData;
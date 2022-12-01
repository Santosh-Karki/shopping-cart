// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to





const productsArray = [
    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        imageUrl:"/footy.jpg",
        title: "Coffee",
        price: 24.99,
        
    },
    {
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
        imageUrl: "/soccer.jpg",
        title: "Sunglasses",
        price: 19.99
    },

    {
        id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
        imageUrl: "/cycle.jpg",
        title: "Camera",
        price: 139.99
    },
    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        imageUrl:"/basketball.jpg",
        title: "Coffee",
        price: 12.99,
        
    },
    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        imageUrl:"/longtennis.jpg",
        title: "Coffee",
        price: 79.99,
        
    },
    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        imageUrl:"/golf.jpg",
        title: "Coffee",
        price: 109.99,
        
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };
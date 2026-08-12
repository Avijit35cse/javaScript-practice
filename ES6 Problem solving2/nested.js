// const products = [
//     {
//         name: "Laptop",
//         details: {
//             price: 50000,
//             stock: 5
//         }
//     },
//     {
//         name: "Phone",
//         details: {
//             price: 20000,
//             stock: 0
//         }
//     },
//     {
//         name: "Mouse",
//         details: {
//             price: 1000,
//             stock: 10
//         }
//     }
// ];

// const findProductByName = (products)=> {
//     if(!Array.isArray(products)) {return `Invalid`}

//     let productName = products.filter( ({details: {stock}})=> stock > 0 ).map(product => product.name)
//     return productName;
// }
// console.log(findProductByName(products));
const orders = [
    {
        product: "Laptop",
        quantity: 2,
        price: 50000
    },
    {
        product: "Mouse",
        quantity: 3,
        price: 1000
    },
    {
        product: "Keyboard",
        quantity: 1,
        price: 3000
    }
];

const getTotalPrice = (orders) => {
        if(!Array.isArray(orders)){return `Invalid`}
        // let total = orders.map(({quantity, price})=> quantity * price).reduce((sum,price)=>sum+price)
        let total = orders.reduce((sum,order)=> sum + order.quantity * order.price,0)
        return total
} 
console.log(getTotalPrice(orders));
import React from 'react';
import Product from './Product';


const Products = ({ products }) => {
    console.log("P: ", products);
    console.log(typeof(products))
    
    const check = async () => {

    }
    return (
        <>
            {products.map((product) => {
            <Product 
            name={product.name}
            price={product.price}
            image={product.imageUrl}
            content={product.content}/>
            })}
        </>
    )
}

export default Products

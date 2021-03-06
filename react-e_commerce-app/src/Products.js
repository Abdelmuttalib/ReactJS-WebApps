import React from 'react';
import Product from './Product';


const Products = ({ products }) => {

    
    const check = async () => {

    }
    return (
        <>
            {products.map((product) => (
            <Product 
            key={product.id}
            id={product.id}
            name={product.title}
            price={product.price}
            image={product.image}
            content={product.description}/>
            ))}
        </>
    )
}

export default Products

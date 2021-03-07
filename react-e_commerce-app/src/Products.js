import React from 'react';
import Product from './Product';
import { Grid } from '@material-ui/core';


const Products = ({ products }) => {

    
    const check = async () => {

    }
    return (
        <>
          <Grid container spacing={1}>
            {products.map((product) => (
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <Product 
                key={product.id}
                id={product.id}
                name={product.title}
                price={product.price}
                image={product.image}
                content={product.description}/>
            </Grid>
            ))}
          </Grid>
        </>
    )
}

export default Products

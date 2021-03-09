import React from 'react';
import Product from './Product';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const Products = ({ products }) => {

    
    console.log("How");

    const useStyles = makeStyles({
        sectionContainer: {
            color: 'red',
            paddingTop: 20
        }
    });

    const classes = useStyles();

    return (
        <>
        <Container maxWidth='lg' className={classes.sectionContainer}>
          <Grid container spacing={2} alignItems="baseline">
            {products.map((product) => (
            <Grid item xs={12} sm={12} md={4}>
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
          </Container>
        </>
    )
}

export default Products

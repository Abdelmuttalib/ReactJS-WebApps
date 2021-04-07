import React from 'react';
import Product from './Product';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const Products = ({ products }) => {

    
    console.log("How");

    const useStyles = makeStyles({
        root: {
            padding: '2rem 0'
        },
        // sectionContainer: {
        //     color: 'red',
        // }
    });

    const classes = useStyles();

    return (
        <>
        <Container maxWidth='xl' className={classes.sectionContainer}>
          <Grid className={classes.root} container  spacing={3} justify='center' alignItems="center">
            {products.map((product) => (
            <Grid item lg={4} xl={3}>
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

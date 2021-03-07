import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Menu, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const NavBar = () => {

    const useStyles = makeStyles({
        root: {
            backgroundColor: '#fff'
        },
        title: {
            color: '#000'
        }
    });

    const classes = useStyles();
    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar>
                <Grid container alignItems='center' justify='space-around'>
                 <Grid item>
                  <Typography className={classes.title} variant='h6'>E-Commerce</Typography> 
                 </Grid>
                 <Grid item>
                  <Button>Products</Button>
                  <Button
                  startIcon={<ShoppingCartIcon />}
                  >Cart</Button>
                 </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar

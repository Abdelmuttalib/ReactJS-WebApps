import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button, Menu, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { SettingsInputSvideoRounded } from '@material-ui/icons';
import { UserContext } from './UserContext';

const NavBar = () => {

    const {user, setUser} = useContext(UserContext);


    const useStyles = makeStyles({
        root: {
            backgroundColor: '#fff',
            margin: '0',
        },
        title: {
            color: '#000'
        },
        links: {
            color: 'black',
            textDecoration: 'none'
        },
        link: {
            color: '#000',
            textDecoration: 'none'
        }
    });

    const classes = useStyles();
    return (
        <Paper elevation={0}>
        <AppBar className={classes.root} position='static'>
            <Toolbar>
                <Grid container alignItems='center' justify='space-around'>
                 <Grid item>
                  <Typography className={classes.title} variant='h6'><Link className={classes.link} to='/'>React e-Commerce</Link></Typography> 
                 </Grid>
                 <Grid item>
                  <Button variant='outlined'>
                      <Link to='/' className={classes.links}>Home</Link>
                  </Button>
                  <Button variant='outlined' startIcon={<ShoppingCartIcon />}>
                      <Link to='/Cart' className={classes.links}>Cart</Link>
                  </Button>

                  {user == null ? 
                  <Button variant='outlined'><Link to='/Login' className={classes.links}>Sign In</Link></Button> 
                  :
                  <Button variant='outlined' onClick={() => setUser(null)}>Sign Out</Button> }
                 </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        </Paper>
    );
};

export default NavBar

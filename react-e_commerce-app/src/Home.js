import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Paper, Button } from '@material-ui/core';

const Home = ({ userData }) => {

    const name = userData.username;

    const useStyles = makeStyles({
        welcome: {
            color: '#ffa',
            alignItems: 'center',
            justifyContent: 'space-between',
            justifyItems: 'center',
            position: 'absolute',
            textAlign: 'center',
            top: '35%',
            width: '100%',
            height: '2em'
        },
        buttons: {
            justifyContent: 'space-around',
            color: '#000',
            textDecoration: 'none',
            margin: '5px 5px'
        }
    });

    const classes = useStyles();

    
    return (
        <div className={classes.welcome}>
            <Paper>
            <Typography variant='h3'>Welcome Back {name}</Typography>
            <div>
                <Button color='secondary'><Link to='/ProductsPage' className={classes.buttons}>Go To Products</Link></Button>
                <Button color='secondary'><Link to='/Cart' className={classes.buttons}>Go To Cart</Link></Button>
            </div>
            </Paper>
        </div>
    )
}

export default Home

import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography, Paper, Button } from '@material-ui/core';
import { UserContext } from './UserContext';
import NavBar from './NavBar';
import Products from './Products';

const Home = () => {

    const [productsData, setProductsData] = useState([]);
    const {user, setUser} = useContext(UserContext);
    console.log("User in Home: ", user);

    // const name = userData.username;

    const useStyles = makeStyles({
        welcome: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url('https://images.pexels.com/photos/3312030/pexels-photo-3312030.jpeg?cs=srgb&dl=pexels-elina-krima-3312030.jpg&fm=jpg')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
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

    const fetchProducts = async () => {
        const fet = await fetch('http://localhost:5000/product');
        const data = await fet.json();

        return data;
    }

    

    useEffect(async () => {
        const dataFromServer = await fetchProducts();
        setProductsData(dataFromServer);
    }, []);

    const classes = useStyles();

    
    return (
        <>
            <NavBar />
            <Products products={productsData}/>
            {/* <div>{user.address, user.name, user.email}</div>
            <button onClick={() => setUser("Home")}>change</button> */}
        </>
    )
}

export default Home;

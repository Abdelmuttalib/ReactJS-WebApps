import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Products from './Products';

const App = () => {

    const [productsData, setProductsData] = useState([]);

    const fetchData = async () => {
      
        const response = await fetch('http://localhost:5000/product');
        const data = await response.json();

        return data;
    };

    useEffect(() => {
      const getData = async () => {
        const productsFromServer = await fetchData();
        setProductsData(productsFromServer);
      }
      getData();
    }, []);


    return (
        <>
        <NavBar />
        <Products products={productsData}/>
        </>
    )
}

export default App;

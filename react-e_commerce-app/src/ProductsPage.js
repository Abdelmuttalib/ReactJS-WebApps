import React from 'react';
import UpperPart from './UpperPart';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Products from './Products';

function ProductsPage({ userData }) {
    const [minData, setMinData] = useState([]);
    const fetchProducts = async () => {
        const fet = await fetch('http://localhost:5000/product');
        const data = await fet.json();

        return data;
    }

    

    useEffect(async () => {
        const dataFromServer = await fetchProducts();
        setMinData(dataFromServer);
    }, []);

    console.log("In ProductsPage: ", userData);

    return (
        <div>
            <NavBar />
            <UpperPart title='Products' img='https://www.volusion.com/blog/content/images/2018/02/0227_HowToPriceItems_B--1-.png'/>
            <Products products={minData}/>
        </div>
    )
}

export default ProductsPage

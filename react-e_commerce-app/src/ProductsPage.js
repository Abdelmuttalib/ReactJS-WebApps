import React from 'react';
import UpperPart from './UpperPart';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Products from './Products';

function ProductsPage({ userData }) {
    const [minData, setMinData] = useState([]);
    

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

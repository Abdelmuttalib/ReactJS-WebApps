import React from 'react';
import UpperPart from './UpperPart';
import NavBar from './NavBar';

function ShowProducts() {
    return (
        <div>
            <NavBar />
            <UpperPart title='Products' img='https://www.volusion.com/blog/content/images/2018/02/0227_HowToPriceItems_B--1-.png'/>
        </div>
    )
}

export default ShowProducts

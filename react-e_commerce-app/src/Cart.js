import React from 'react';
import UpperPart from './UpperPart';
import NavBar from './NavBar';


const Cart = ({ userData }) => {

    console.log("In Cart: ", userData);
    const name = userData.username;
    
    return (
        <div>
            <NavBar />
            <UpperPart title='Cart' img="https://media.istockphoto.com/photos/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-picture-id1206800961?k=6&m=1206800961&s=612x612&w=0&h=XTcMw90XcgIFRuZvZ_B7q6D5X92-8hcDZ-J_HYh3Sas="/>
        </div>
    )
}

export default Cart

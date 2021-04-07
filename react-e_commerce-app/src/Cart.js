import React, { useContext, useEffect } from 'react';
import UpperPart from './UpperPart';
import NavBar from './NavBar';
import { UserContext } from './UserContext';


const Cart = ({ userData }) => {

    // console.log("In Cart: ", userData);
    // const name = userData.username;
    const {user, setUser} = useContext(UserContext);
    console.log("User in Cart: ", user);
    console.log("U: ", user);

    useEffect(() => console.log("In Effect Changed: ", user),[user]);
    
    return (
        <div>
            <NavBar />
            <UpperPart title='Cart' img="https://t3.ftcdn.net/jpg/02/34/09/24/360_F_234092401_jv2JZDvES6zocvLxNyVxoMDOGvRzg4rG.jpg"/>
            <div>{user}</div>
            <button onClick={() => setUser("CHANGED")}>change</button>
        </div>
    )
}

export default Cart

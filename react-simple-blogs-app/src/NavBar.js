import React from 'react';
import styled from 'styled-components';




const NavBar = () => {

    return(
        <header>
            <p className="blog_app">Blogs App</p>
            <img className="react_icon" src="https://img.icons8.com/ios-filled/50/000000/react-native.png" alt="react-icon" />
            <p className="all_blogs"><a className="all_blogs_link" href="#">All Blogs</a></p>
        </header>
    );
}

export default NavBar;
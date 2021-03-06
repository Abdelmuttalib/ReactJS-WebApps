import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Menu, Typography } from '@material-ui/core';


const NavBar = () => {
    return (
        <AppBar >
            <Toolbar variant="dense">
                <Typography>E-Commerce</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar

import React from 'react';
import { styled, ThemeProvider } from 'styled-components';
import NavBar from './NavBar';
import { theme } from './theme';
import './index.css';


const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <NavBar />
        </ThemeProvider>
    );
}

export default App;

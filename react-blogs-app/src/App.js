import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import HeadSection from './HeadSection';
import './index.css';
import { Paper } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif',
      ].join(','),
    },
});

const App = () => {
    return (
        <>
        <ThemeProvider theme={theme}>
            <NavBar />
            <HeadSection />
        </ThemeProvider>
        </>
    )
}

export default App;
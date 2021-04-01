import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './NavBar';
import HeadSection from './HeadSection';
import Cards from './Cards';
import './index.css';

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
            <Cards />
        </ThemeProvider>
        </>
    )
}

export default App;
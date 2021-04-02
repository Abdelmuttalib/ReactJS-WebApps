import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import HeadSection from './components/HeadSection';
import CardsSection from './components/CardsSection';
import SeeMoreButton from './components/SeeMoreButton';
import Footer from './components/Footer';
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
            <CardsSection />
            <SeeMoreButton />
            <Footer />
        </ThemeProvider>
        </>
    )
}

export default App;
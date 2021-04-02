import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './NavBar';
import HeadSection from './HeadSection';
import CardsSection from './CardsSection';
import './index.css';
import LargeCard from './Cards/LargeCard';
import SeeMoreButton from './SeeMoreButton';
import Footer from './Footer';


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
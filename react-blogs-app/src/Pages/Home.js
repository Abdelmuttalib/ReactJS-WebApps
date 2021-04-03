import React from 'react';
import NavBar from '../components/NavBar';
import HeadSection from '../components/HeadSection';
import CardsSection from '../components/CardsSection';
import SeeMoreButton from '../components/SeeMoreButton';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <NavBar />
            <HeadSection imgUrl='https://raw.githubusercontent.com/RafaelGoulartB/next-blog-cms/master/public/images/head.png'/>
            <CardsSection />
            <SeeMoreButton />
            <Footer />
        </>
    )
}

export default Home;

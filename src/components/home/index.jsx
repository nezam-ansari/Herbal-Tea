import React from 'react';
import Carousel from './Carousel';
import NeaArrival from './NewArrival';
import styled from 'styled-components';
import Blog from './Blog';

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`;

const Home = () => {
    return (
        <Container>
        <Carousel/>
        <NeaArrival/>
        <Blog/>
        </Container>
    )
}

export default Home;
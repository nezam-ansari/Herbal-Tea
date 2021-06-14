import React from 'react';
import styled from 'styled-components';
import image from '../assets/image1.png'


const Container = styled.div`
width: 100%;
height: 100%;
`;

const Crouselcontainer = styled.div`
width: 100%;
height: 500px;
background-image: url(${image});
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Heading = styled.h1`
color: white;
font-family: serif;
font-size: 50px;
`;

const SubHeading = styled.h1`
color: white;
font-family: serif;
font-size: 50px;
font-style: italic;
margin: 0;
`;

const Carousel = () => {
    return (
        <Container>
            <Crouselcontainer >
                <Heading>It's Always Tea Time</Heading>
                <SubHeading>Width Nezam's Herbal Tea</SubHeading>
            </Crouselcontainer>
        </Container>
    )
}

export default Carousel;
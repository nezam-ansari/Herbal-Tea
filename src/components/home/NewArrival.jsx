import React from 'react';
import styled from 'styled-components';
import Card from '../common/Card';


const Container = styled.div`
width: 100%;
height: 500;
display: flex;
flex-direction: column;
`;

const Heading = styled.h1`
display: flex;
justify-content: center;
font-family: serif;
font-size: 30px;
`;

const Line = styled.hr`
margin-bottom: 20px;
`;



const NeaArrival = () => {
    return (
        <Container>
            <Heading>New Arrivals</Heading>            
            <Card/>
        </Container>
    )
}

export default NeaArrival;
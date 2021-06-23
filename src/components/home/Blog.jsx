import React from 'react';
import styled from 'styled-components';
import blog from '../assets/blog.png'


const Container = styled.div`
width: 100%;
height: 100%;
`;

const Crouselcontainer = styled.div`
width: 100%;
height: 500px;
background-image: url(${blog});
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

const Blog = () => {
    return (
        <Container>
            <Crouselcontainer >
                <Heading>Read Our Blog</Heading>
            </Crouselcontainer>
        </Container>
    )
}

export default Blog;
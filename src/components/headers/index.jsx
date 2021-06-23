import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { LoginPopup } from '../actions/global';

const Container = styled.div`
width: 100%;
height: 100px;
position: fixed;
display: flex;
border-bottom: 2px solid white;
`;

const Title = styled.h1`
color: white;
font-size: 20px;
font-family: auto;
margin: 0 10px;
`;

const BlogPart = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
padding: 10px;
border-right: 2px solid white;
`;

const MiddlePart = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 25%;
border-right: 2px solid white;
`;


const Header = (props) => {
    const handleOpen = () => {
        props.loginPopupOpen(true)
    }
    return (
        <Container>
            <BlogPart>
                <Title>Teas</Title>
                <Title>Extras</Title>
                <Title>About</Title>
                <Title>Blog</Title>
                <Title>Contact</Title>
            </BlogPart>
            <MiddlePart>
                <Title>NEZAM TEA</Title>
            </MiddlePart>
            <BlogPart>
                <Button variant="contained" onClick={handleOpen}>Login</Button>
            </BlogPart>
        </Container>
    )
}



const mapDispatchToProps = (dispatch) => ({
    loginPopupOpen: (data) => dispatch(LoginPopup(data))
})

export default connect(null, mapDispatchToProps)(Header);
import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { LoginPopup, SignPopup } from '../actions/global';

const Container = styled.div`
position: fixed;
background: #00000050;
width: 100%;
height: 100vh;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
padding: 30px;
z-index: 1;
`;

const SubContainer = styled.div`
position: relative;
width: 70%;
margin: 0 auto;
height: auto;
// max-height: 70vh;
background: #fff;
border-radius: 4px;
border: 1px solid #999;
overflow: auto;
position: relative;
`;

const CloseButton = styled(CloseIcon)`
position: absolute;
right: 20px;
top: 10px;
font-size: 40px;
cursor: pointer;
`;



const CardPopUp = (props) => {
    const { loginPopupOpen, signupPopupOpen, children } = props;
    const handleClose = () => {
        loginPopupOpen(false)
        signupPopupOpen(false)
    }
    return (
        <Container >
            <SubContainer>
                <CloseButton onClick={handleClose} />
                {children}
            </SubContainer>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => ({
    loginPopupOpen: (data) => dispatch(LoginPopup(data)),
    signupPopupOpen: (data) => dispatch(SignPopup(data))
})

export default connect(null, mapDispatchToProps)(CardPopUp);
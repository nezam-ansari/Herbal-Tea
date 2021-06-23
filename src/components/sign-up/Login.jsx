import React, { useState, Fragment } from 'react';
import CardPopUp from '../common/CardPopup';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import { FormComponent } from '../common/FormComponent';
import LoginImage from '../assets/login1.png';
import { Button, makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import { createMuiTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { LoginPopup, SignPopup } from '../actions/global';

const Container = styled.div`
width: 100%;
height: 500px;
display: flex;
flex-direction: row;
`;

const FirstPart = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const SecondPart = styled.div`
width: 50%;
height: 100%;
`;

const ImageContainer = styled.img`
width: 100%;
height: 100%;
`;

const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const SignupSection = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 70%;
`;

const RegisterButton = styled.h2`
font-size: 14px;
color: #040ba0;
font-family: sans-serif;
cursor: pointer;
`;

const ForgotBotton = styled.h2`
font-size: 14px;
color: #040ba0;
font-family: sans-serif;
`;

const OtherOption = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 70%;
`;

const Google = styled.h6`
margin: 0px;
`;


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#3f50b5',
        color: 'white',
        margin: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-around'
    },
    google: {
        backgroundColor: '#ba000d',
        color: 'white',
        margin: theme.spacing(1),
        display: 'flex',
        justifyContent: 'space-around'
    },

}));

const Login = ({ showLoginPopup, loginPopupOpen, signupPopupOpen }) => {
    const classes = useStyles();

    const handlSigup = () => {
        signupPopupOpen(true);
        loginPopupOpen(false);
    }

    return (
        <Fragment>
            {!!showLoginPopup && <CardPopUp >
                <Container>
                    <SecondPart>
                        <ImageContainer src={LoginImage} />
                    </SecondPart>
                    <FirstPart>
                        <Form>
                            <Field component={FormComponent} label="Email" />
                            <Field component={FormComponent} label="Password" />
                            <Button variant="contained" color="primary" style={{ width: '100%' }}>Login</Button>
                        </Form>
                        <SignupSection>
                            <RegisterButton onClick={handlSigup}>Register Now</RegisterButton>
                            <ForgotBotton>Forgot Password</ForgotBotton>
                        </SignupSection>
                        <OtherOption>
                            <Button variant="contained" className={classes.google} startIcon={<Google>G</Google>}>
                                LOGIN WITH GOOGLE
      </Button>
                            <Button variant="contained" className={classes.root} startIcon={<FacebookIcon />}>
                                LOGIN WITH FACEBOOK
      </Button>
                        </OtherOption>
                    </FirstPart>
                </Container>
            </CardPopUp>}
        </Fragment>
    )
}

const mapStateTopProps = (state) => ({
    showLoginPopup: state.global.showLoginPopup
})

const mapDispatchToProps = (dispatch) => ({
    loginPopupOpen: (data) => dispatch(LoginPopup(data)),
    signupPopupOpen: (data) => dispatch(SignPopup(data))
})

const LoginForm = reduxForm({
    form: 'login-form'
})(Login)

export default connect(mapStateTopProps, mapDispatchToProps)(LoginForm);
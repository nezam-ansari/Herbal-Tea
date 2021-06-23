export const LOGIN_POPUP = "LOGIN_POPUP";
export const SIGN_POPUP = "SIGN_POPUP";

export const LoginPopup = (data) => ({
    type: LOGIN_POPUP,
    payload: {
        showLoginPopup: data
    }
})

export const SignPopup = (data) => ({
    type: SIGN_POPUP,
    payload: {
        showSignUpPopup: data
    }
})
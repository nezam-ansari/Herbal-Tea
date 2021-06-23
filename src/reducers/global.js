import { LOGIN_POPUP, SIGN_POPUP } from "../components/actions/global";

const initialState = {
    isLoading: false,
    showLoginPopup: false,
    showSignUpPopup: false
};

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_POPUP:
        case SIGN_POPUP:
            return {
                ...state,
                ...action.payload
            }
        default: {
            return { ...state };
        }
    }
}

export default globalReducer;
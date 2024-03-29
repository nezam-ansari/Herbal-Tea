import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux';
import globalReducer from './global';

export const rootReducer = combineReducers({
    // ...your other reducers here
    // you have to pass formReducer under 'form' key,
    // for custom keys look up the docs for 'getFormState'
    form: formReducer,
    global: globalReducer
})
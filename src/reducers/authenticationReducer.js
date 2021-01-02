import { persistReducer } from 'redux-persist';
import {
    SIGN_UP_CLICK,
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS,
    SIGN_IN_CLICK,
    SIGN_IN_FAILED,
    SIGN_IN_SUCCESS
} from '../actions/authenticationAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL_STATE = {
    userToken: ""
}
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [ 'userToken']
    // whitelist: ['isAuthLogin', 'isMainLogin', 'userData'],
    // blacklist: ["authButtonSpinner", "authSpinnerStatus"] // only navigation will be persisted
};
const authenticationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_UP_CLICK:
            return {
                ...state
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state
            }
        case SIGN_UP_FAILED:
            return {
                ...state
            }
        case SIGN_IN_CLICK:
            return {
                ...state,
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                userToken: action.payload.oauth_token
            }
        case SIGN_IN_FAILED:
            return {
                ...state
            }
        default:
            return state;
    }
}
export default persistReducer(persistConfig, authenticationReducer);

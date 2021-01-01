import {
    SIGN_UP_CLICK,
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS,
    SIGN_IN_CLICK,
    SIGN_IN_FAILED,
    SIGN_IN_SUCCESS
} from '../actions/authenticationAction';

const INITIAL_STATE = {
    userToken: ""
}

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
export default authenticationReducer;
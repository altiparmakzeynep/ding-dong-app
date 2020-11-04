import axios from 'axios';
import { API_BASE} from '../config/env';
import { Actions, Alert } from 'react-native';

export const NAME_CHANGE                 = "name_change";
export const SURNAME_CHANGE              = "surname_change";
export const EMAIL_CHANGE                = "email_change";
export const PASSWORD_CHANGE             = "password_change";
export const PASSWORD_CONFIRM_CHANGE     = "password_confirm_change"

export const SIGN_IN_CLICK      = "sign_in_click";
export const SIGN_IN_SUCCESS    = "sign_in_success";
export const SIGN_IN_FAILED     = "sign_in_failed";

export const SIGN_UP_CLICK      = "sign_up_click";
export const SIGN_UP_SUCCESS    = "sign_up_success";
export const SIGN_UP_FAILED     = "sign_up_failed";

export const LOG_OUT_CLICK      = "log_out_click";
export const LOG_OUT_SUCCESS    = "log_out_success";
export const LOG_OUT_FAILED     = "log_out_failed";

export const nameChange = (value) => {
    return {
        type: NAME_CHANGE,
        payload: value
    }
}
export const surNameChange = (value) => {
    return {
        type: SURNAME_CHANGE,
        payload: value
    }
}
export const emailChange = (value) => {
    return {
        type: EMAIL_CHANGE,
        payload: value
    }
}
export const passwordChange = (value) => {
    return {
        type: PASSWORD_CHANGE,
        payload: value
    }
}
export const passwordConfirmChange = (value) => {
    return {
        type: PASSWORD_CONFIRM_CHANGE,
        payload: value
    }
}

export const signUp = (name, surname, password, passwordConfirm, token) => {
    return dispatch => {
        dispatch({
            type: SIGN_UP_CLICK
        })
        console.log({name, surname, password, passwordConfirm, token});
        axios({
            method: "POST",
            url: `${API_BASE}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: JSON.stringify({name:name, surname:surname, password:password, passwordConfirm:passwordConfirm, phoneToken:token})
        }).then((result) => {
            console.log("result: ", result.data)
            if(result.data.status == "success"){
                Actions.signIn()
            }
        }).catch((err) => {
            console.log("error: ",err)
            Alert.alert("failed")
        })
    }
}

export const signIn = (email, password ) => {
    return dispatch => {
        dispatch({
            type: SIGN_IN_CLICK
        })
        axios({
            method: "POST",
            url: `${API_BASE}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: JSON.stringify({email:email, password:password})
        }).then((result) => {
            console.log("result: ", result.data)
            if(result.data.status == "success"){
                dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: {}
                })
                Actions.Main()
            }
        }).catch((err) => {
            console.log("error: ",err)
            Alert.alert("failed")
        })
    }
}


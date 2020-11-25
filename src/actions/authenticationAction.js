import axios from 'axios';
import { API_BASE} from '../config/env';
import { Actions, Alert } from 'react-native';

export const FULLNAME_CHANGE         = "fullname_change";
export const EMAIL_CHANGE                = "email_change";
export const PASSWORD_CHANGE             = "password_change";
export const PASSWORD_CONFIRM_CHANGE     = "password_confirm_change"

export const SIGN_IN_CLICK      = "sign_in_click";
export const SIGN_IN_SUCCESS    = "sign_in_success";
export const SIGN_IN_FAILED     = "sign_in_failed";

export const FB_LOGIN_CLICK       = "fb_login_click";
export const FB_LOGIN_SUCCESS     = "fb_login_success";
export const FB_LOGIN_FAILED      = "fb_login_failed";

export const SIGN_UP_CLICK      = "sign_up_click";
export const SIGN_UP_SUCCESS    = "sign_up_success";
export const SIGN_UP_FAILED     = "sign_up_failed";

export const LOG_OUT_CLICK      = "log_out_click";
export const LOG_OUT_SUCCESS    = "log_out_success";
export const LOG_OUT_FAILED     = "log_out_failed";

export const fullNameChange = (value) => {
    return {
        type: FULLNAME_CHANGE,
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

export const signUpClicked = (nameSurname, password, passwordConfirm, token) => {
    return dispatch => {
        dispatch({
            type: SIGN_UP_CLICK
        })
        console.log({nameSurname, password, passwordConfirm, token});
        axios({
            method: "POST",
            url: `${API_BASE}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: JSON.stringify({nameSurname:nameSurname, password:password, passwordConfirm:passwordConfirm, phoneToken:token})
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

export const signInClicked = (email, password ) => {
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

export const googleLogin = (idToken, user) => {
    return dispatch => {
        dispatch({
            type: GOOGLE_LOGIN_CLICK
        })
        let data = JSON.stringify({ idToken: idToken, user: user })
        axios({
            method: "post",
            url: `${API_BASE}/users/google_login`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            console.log("result.data", result.data)
            if(result.data.status == "success") {
                dispatch({
                    type: GOOGLE_LOGIN_SUCCESS,
                    payload: result.data.data
                })
                Actions.main()
            }
        }).catch((err) => {
            console.log("error", err)
        })
    }
}

export const facebookLogin = ( nameSurname, picture, id, access_token ) => {
    return dispatch => {
        dispatch({
            type: FB_LOGIN_CLICK
        })
        let data = JSON.stringify({ nameSurname: nameSurname, picture: picture, id: id, access_token: access_token })
        axios({
            method: "post",
            url: `${API_BASE}/users/fb_login`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            if(result.data.status == "success") {
                dispatch({
                    type: FB_LOGIN_SUCCESS,
                    payload: result.data.data
                })
                Actions.main()
            }
        }).catch((err) => {
            console.log("err", err)
        })
    }
}
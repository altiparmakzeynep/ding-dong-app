import axios from 'axios';
import { API_BASE } from '../config/env';
import { Actions, Alert } from 'react-native';

export const SIGN_IN_CLICK      = "sign_in_click";
export const SIGN_IN_SUCCESS    = "sign_in_success";
export const SIGN_IN_FAILED     = "sign_in_failed";

export const SIGN_UP_CLICK      = "sign_up_click";
export const SIGN_UP_SUCCESS    = "sign_up_success";
export const SIGN_UP_FAILED     = "sign_up_failed";

export const signUpClicked = (fullname, phone, email, password, ) => {
    let data = JSON.stringify({ fullname: fullname, phone: phone, email: email, password: password })
    return dispatch => {
        dispatch({
            type: SIGN_UP_CLICK
        })
        console.log("data", data)
        axios({
            method: "post",
            url: `${API_BASE}/users/signup`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            console.log("result", result.data)
            if(result.data.data) {
                dispatch({
                    type: SIGN_UP_SUCCESS,
                    payload: result.data.data
                })
                Actions.signIn()
            }
        }).catch((err) => {
            dispatch({
                type: SIGN_UP_FAILED,
                payload: err.response.data.errors
            })
        })
    }
}


export const signInClicked = (phone, password) => {
    let data = JSON.stringify({ phone: phone, password: password })
    return dispatch => {
        dispatch({
            type: SIGN_IN_CLICK,
        })
        axios({
            method: "post",
            url: `${API_BASE}/users/signin`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            console.log("result", result.data.data)
            if(result.data.status == "Success") {
                dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: result.data.data
                })
                Actions.main()
            } else {
                dispatch({
                    type: SIGN_IN_FAILED,
                    payload: result.data.message
                })
            }
        }).catch((err) => {
            Alert.alert("Uyarı",'WRONG PHONE NO OR PASSWORD')
            dispatch({
                type: SIGN_IN_FAILED,
                payload: err.response.data.errors
            })
        })
    }
}

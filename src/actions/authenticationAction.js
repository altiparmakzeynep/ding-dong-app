import axios from 'axios';
import { API_BASE } from '../components/config/env';
import { Alert } from 'react-native';
import { Actions } from "react-native-router-flux";

export const SIGN_IN_CLICK      = "sign_in_click";
export const SIGN_IN_SUCCESS    = "sign_in_success";
export const SIGN_IN_FAILED     = "sign_in_failed";

export const SIGN_UP_CLICK      = "sign_up_click";
export const SIGN_UP_SUCCESS    = "sign_up_success";
export const SIGN_UP_FAILED     = "sign_up_failed";

export const signUpClicked = (fullname, phone, email, password, gender, date ) => {
    let data = JSON.stringify({ fullname: fullname, phone: phone, email: email, password: password, gender: gender, date: date })
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
                console.log("success")
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
            Alert.alert("Warning",'WRONG PHONE NO OR PASSWORD')
            dispatch({
                type: SIGN_IN_FAILED,
                payload: err.response.data.errors
            })
        })
    }
}

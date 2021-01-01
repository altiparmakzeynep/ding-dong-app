import axios from 'axios';
import { API_BASE} from '../config/env';
import { Actions, Alert } from 'react-native';

export const SIGN_IN_CLICK      = "sign_in_click";
export const SIGN_IN_SUCCESS    = "sign_in_success";
export const SIGN_IN_FAILED     = "sign_in_failed";

export const SIGN_UP_CLICK      = "sign_up_click";
export const SIGN_UP_SUCCESS    = "sign_up_success";
export const SIGN_UP_FAILED     = "sign_up_failed";

export const signUp = (fullname, phone, email, password) => {
    let data = JSON.stringify({ fullname: fullname, phone: phone, email: email, password: password })
    return dispatch => {
        dispatch({
            type: SIGN_UP_CLICK
        })
        axios({
            method: "POST",
            url: `${API_BASE}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: data
        }).then((result) => {
            console.log("result: ", result.data)
            if(result.data.status == "success"){
                Actions.login()
            }
        }).catch((err) => {
            console.log("error: ",err)
            Alert.alert("failed")
        })
    }
}

export const signInClicked = (email, password) => {
    let data = JSON.stringify({ email: email, password: password })
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
            data: data
        }).then((result) => {
            console.log("result: ", result.data)
            if(result.data.status == "success"){
                dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: result.datadata
                })
                Actions.main()
            }
        }).catch((err) => {
            console.log("error: ",err)
            Actions.main()
        })
    }
}

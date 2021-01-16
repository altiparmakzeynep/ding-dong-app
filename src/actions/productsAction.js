import axios from "axios";
import { API_BASE } from '../components/config/env';

export const FETCH_CATEGORIES       = "fetch_categories";
export const FETCH_SUB_CATEGORIES   = "fetch_sub_categories";
export const FETCH_PRODUCTS         = "fetch_products";
export const ADD_TO_CART            = "add_to_cart";
export const REMOVE_TO_CART         = "remove_to_cart";
export const REMOVE_ALL_CART        = "remove_all_cart";
export const ADD_TO_FAVS            = "add_to_favs";
export const REMOVE_TO_FAVS         = "remove_to_favs";


export const fetchCategories = (item) => {
    return dispatch => {
        axios({
            method: "get",
            url: `${API_BASE}/products/Cat`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            dispatch({
                type: FETCH_CATEGORIES,
                payload: {data: result.data.data, cat_id:item }
            })
        }).catch((err) => {
            console.log(err.response)
        })
    }
}

export const fetchSubCategories = (cat_id) => {
    return dispatch => {
        axios({
            method: "get",
            url: `${API_BASE}/products/SubCat/${cat_id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            dispatch({
                type: FETCH_SUB_CATEGORIES,
                payload: result.data.data
            })
        }).catch((err) => {
            console.log(err.response)
        })
    }
}

export const fetchProducts = (sub_cat_id) => {
    return dispatch => {
        axios({
            method: "get",
            url: `${API_BASE}/products/SubCatTab/${sub_cat_id}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            dispatch({
                type: FETCH_PRODUCTS,
                payload: result.data.data
            })
        }).catch((err) => {
            console.log(err.response)
        })
    }
}

export const addToCart = (item) =>{
    return {
        type: ADD_TO_CART,
        payload: item
      };
}

export const addToFavs = (item) =>{
    return {
        type: ADD_TO_FAVS,
        payload: item,
      };
}

export const removeToCart = (item) =>{
    console.log("product: ", item)
    return {
        type: REMOVE_TO_CART,
        payload: item
      };
}

export const removeToFavs = (item) =>{
    console.log("product: ", item)
    return {
        type: REMOVE_TO_FAVS,
        payload: item
      };
}
export const removeAllCart = (item) =>{
    console.log("product: ", item)
    return {
        type: REMOVE_ALL_CART,
        payload: item
      };
}



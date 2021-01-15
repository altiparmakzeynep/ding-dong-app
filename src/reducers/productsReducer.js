import { Alert } from 'react-native';
import {
    FETCH_CATEGORIES,
    FETCH_SUB_CATEGORIES,
    FETCH_PRODUCTS,
    FETCH_FAVS,
    ADD_TO_CART,
    REMOVE_TO_CART,
    REMOVE_ALL_CART,
    ADD_TO_FAVS,
    REMOVE_TO_FAVS
} from '../actions/productsAction';

const INITIAL_STATE =  {
    categoriesValue: [],
    subCategoriesValue: [],
    productsValue: [],
    cat_id: "",
    product_id: "",
    products: [],
    productsLength:0,
    totalAmount: 0,
    favs: [],
    checked: 0,
    favValue: []
}

export default ( state = INITIAL_STATE, action) => {
    switch (action.type){
        case FETCH_CATEGORIES:
            return {
                ...state,
                categoriesValue: action.payload.data,
                cat_id: action.payload.cat_id,       
             }
        case FETCH_SUB_CATEGORIES:
            return {
                ...state,
                subCategoriesValue: action.payload,
            }
        case FETCH_PRODUCTS:
            return {
                ...state,
                productsValue: action.payload,
                product_id: action.payload.item_id
            }
        case FETCH_FAVS:
            return {
                ...state,
                favValue: action.payload,
                product_id: action.payload.item_id
            }
        case ADD_TO_CART:
            console.log(action.payload.price)
            Alert.alert(
                'DING DONG!', 
                'The product has been successfully added to the cart',
                
                [
                  { text: 'OK', onPress: () => null }
                ]
              );
            return { 
                ...state,
                products: state.products.concat(action.payload),
                totalAmount: state.totalAmount + action.payload.price
            }
        case ADD_TO_FAVS:
            console.log("favs array: " , action.payload)
            return { 
                ...state,
                favs: state.favs.concat(action.payload),
                checked: state.checked + 1,
            }
        case REMOVE_TO_CART:
            return {
                ...state,
               products: state.products.filter(products => products.id !== action.payload.id),
               totalAmount: state.totalAmount - action.payload.price

            }
        case REMOVE_TO_FAVS:
            return {
                ...state,
                favs: state.favs.filter(products => products.id !== action.payload.id),
                checked: state.checked + 1,

            }
        case REMOVE_ALL_CART:
            return {
                ...state,
                products: state.products.splice(action.payload,0),
                totalAmount: 0

            }
        default:
            return state;
        }
    }
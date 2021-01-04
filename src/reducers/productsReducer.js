import {
    FETCH_CATEGORIES,
    FETCH_SUB_CATEGORIES,
    FETCH_PRODUCTS,
    ADD_TO_CART,
    REMOVE_TO_CART,
    REMOVE_ALL_CART
} from '../actions/productsAction'
const INITIAL_STATE =  {
    categoriesValue: [],
    subCategoriesValue: [],
    productsValue: [],
    cat_id: "",
    products: [],
    productsLength:0,
    totalAmount: 0
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
                productsValue: action.payload
            }
        case ADD_TO_CART:
            console.log(action.payload.price)
            return { 
                ...state,
                products: state.products.concat(action.payload),
                totalAmount: state.totalAmount + action.payload.price
            }
        case REMOVE_TO_CART:
            return {
                ...state,
               products: state.products.filter(products => products.id !== action.payload.id)
            }
        case REMOVE_ALL_CART:
            console.log("tamamını silme",action.payload);
            return {
                ...state,
                products: state.products.splice(action.payload,0)
            }
        default:
            return state;
        }
    }
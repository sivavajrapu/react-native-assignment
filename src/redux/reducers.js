import {GET_PRODUCTS,ADD_PRODUCT} from './actions';

const initialState ={
    products:[]
}

function productReducer (state=initialState, action){
    switch(action.type){
        case GET_PRODUCTS:
            return {...state, products: action.payload};
        case ADD_PRODUCT:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default productReducer;
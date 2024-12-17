import { ActionTypes } from "../constants/actionTypes";

const initialState = {
    products:[{
        id:1,
        title:'Nasri',
        category:'programmer'
    }]
}

export const productReducer = (state, {type, payload}) => {    
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}
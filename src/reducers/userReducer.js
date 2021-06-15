import {  FETCH_MERCH, NEW_CART } from '../actions/types';

const initialState = {
    items: []
}

//...state is the current state with the spread operator
//action.payload is referring to the data being passed from the action to the reducer
export default function(state = initialState, action){
    switch(action.type){ 
        case FETCH_MERCH:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
            case NEW_CART:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default: 
            return state;
    }
}

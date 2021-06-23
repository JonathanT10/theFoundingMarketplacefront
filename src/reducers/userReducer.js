import {  FETCH_MERCH, NEW_CART, FETCH_PATRON, NEW_PASTORDERS, EMPTY_CART } from '../actions/types';

const initialState = {
    items: []
}


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
            case FETCH_PATRON:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
            case FETCH_PATRON:
                return {
                    ...state,
                    items: [action.payload, ...state.items]
                }
                case NEW_PASTORDERS:
                    return {
                        ...state,
                        items: [action.payload, ...state.items]
                    }
                    case EMPTY_CART:
                        return {
                            ...state,
                            items: [action.payload, ...state.items]
                        }
        default: 
            return state;
    }
}

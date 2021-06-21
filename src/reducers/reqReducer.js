import {  NEW_REQ } from '../actions/types';
import { ADD_REQ } from '../actions/types';

const initialState = {
    items: []
}


export default function(state = initialState, action){
    switch(action.type){ 
        case NEW_REQ:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
            case ADD_REQ:
                return {
                    ...state,
                    items: [action.payload, ...state.items]
                }
        default: 
            return state;
    }
 
}

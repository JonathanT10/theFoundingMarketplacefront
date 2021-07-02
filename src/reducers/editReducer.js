import {  NEW_MERCH } from '../actions/types';

const initialState = {
    items: []
}


export default function(state = initialState, action){
    switch(action.type){ 
        case NEW_MERCH:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default: 
            return state;
    }
}

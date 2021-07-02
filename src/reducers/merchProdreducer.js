import {  MERCHID_PRODUCT } from '../actions/types';

const initialState = {
    items: []
}


export default function(state = initialState, action){
    switch(action.type){ 
        case MERCHID_PRODUCT :
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default: 
            return state;
    }
}

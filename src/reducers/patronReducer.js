import {  FETCH_PATRON } from '../actions/types';

const initialState = {
    items: []
}


export default function(state = initialState, action){
    switch(action.type){ 
            case FETCH_PATRON:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default: 
            return state;
    }
}

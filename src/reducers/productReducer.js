import { FETCH_PRODUCT, NEW_PRODUCT } from '../actions/types';

const initialState = {
    items: []
}

//...state is the current state with the spread operator
//action.payload is referring to the data being passed from the action to the reducer
export default function(state = initialState, action){
    switch(action.type){ 
        case FETCH_PRODUCT:
            return {
                ...state, //previous state
                items: action.payload //array of comment objects being pulled from the API
            };
        case NEW_PRODUCT:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        default: 
            return state;
    }
}

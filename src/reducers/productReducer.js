import { stat } from 'fs';
import { FETCH_PRODUCT, NEW_PRODUCT, NEW_IMAGE, 
    FETCHID_PRODUCT, MERCHID_PRODUCT, COMM_PROD } from '../actions/types';

const initialState = {
    items: []
}

export default function(state = initialState, action){
    switch(action.type){ 
        case FETCH_PRODUCT:
            return {
                ...state, 
                items: action.payload 
            };
        case NEW_PRODUCT:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
            case NEW_IMAGE:
                return {
                    ...state,
                    items: [action.payload, ...state.items]
                }
                case FETCHID_PRODUCT:
                return {
                    ...state,
                    items: [action.payload, ...state.items]
                }
                case MERCHID_PRODUCT:
                return {
                    ...state,
                    items: [action.payload, ...state.items]
                }
                case COMM_PROD:
                return {
                    ...state,
                    items: [action.payload, ...state.items]
                }
        default: 
            return state;
    };

}

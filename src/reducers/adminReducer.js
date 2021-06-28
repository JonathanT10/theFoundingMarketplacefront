import { EMPTY_REQUEST, FETCH_ADMINUS } from '../actions/types';
import { DELETE_HIGHUS } from '../actions/types';
import { STATUS_HIGHUS } from '../actions/types';
const initialState = {
    items: []
}


export default function(state = initialState, action){
    switch(action.type){ 
      
                case FETCH_ADMINUS:
                    return {
                        ...state,
                        items: [action.payload, ...state.items]
                    }
                    case DELETE_HIGHUS:
                        return{
                            ...state,
                            items: [action.payload, ...state.items]
                        }
                        case STATUS_HIGHUS:
                        return{
                            ...state,
                            items: [action.payload, ...state.items]
                        }
                        case EMPTY_REQUEST:
                            return{
                                ...state,
                                items: [action.payload, ...state.items]
                            }
        default: 
            return state;
    }
 
}
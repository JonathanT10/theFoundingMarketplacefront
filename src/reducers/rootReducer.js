import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authReducer from './authReducer';
import editReducer from './editReducer';
import registrationReducer from './registrationReducer';
import userReducer from './userReducer';


export default combineReducers({
    product: productReducer,
    auth: authReducer,
    edit: editReducer,
    registration: registrationReducer,
    user: userReducer
});
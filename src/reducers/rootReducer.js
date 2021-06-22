import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authReducer from './authReducer';
import editReducer from './editReducer';
import registrationReducer from './registrationReducer';
import userReducer from './userReducer';
import patronReducer from './patronReducer';
import merchantReducer from './merchantReducer';
import merchProdreducer from './merchProdreducer';
import reqReducer from './reqReducer';
import adminReducer from './adminReducer';


export default combineReducers({
    product: productReducer,
    auth: authReducer,
    edit: editReducer,
    registration: registrationReducer,
    user: userReducer,
    patron: patronReducer,
    merchant: merchantReducer,
    merchprod: merchProdreducer,
    req: reqReducer,
    admin: adminReducer,
});
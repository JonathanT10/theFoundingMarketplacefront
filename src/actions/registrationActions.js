import { NEW_REGISTRATION } from './types';
import axios from 'axios';


export const patrReg = (postpReg) => dispatch => {
    axios.post(`http://localhost:5000/api/patron/`,{
            name: postpReg.name,
            email: postpReg.email,
            password: postpReg.password,
        })
        .then(postpReg => dispatch({
            type: NEW_REGISTRATION,
            payload: postpReg.data

    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}


export const merchReg = (postmReg) => dispatch => {
    axios.post(`http://localhost:5000/api/merchant/`,{
            name: postmReg.name,
            email: postmReg.email,
            password: postmReg.password,
            hqAddress: postmReg.hqAddress,
        })
        .then(postmReg => dispatch({
            type: NEW_REGISTRATION,
            payload: postmReg.data

    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}
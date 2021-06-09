import { NEW_REGISTRATION } from './types';
import axios from 'axios';




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
import { NEW_REQ } from './types';
import { ADD_REQ } from './types';

import axios from 'axios';



export const highUS = (req) => dispatch => {
    axios.post(`http://localhost:5000/api/highlight/`, {
            request: req.request,
            merchantId: req.merchantId
        })
        .then(req => dispatch ({
            type: NEW_REQ,
            payload: req.data
        }))
           .catch(error => {
            alert("Username or Password invalid, please try again")
            console.log('Error', error);
        });
}


export const addReq = () => dispatch => {
    axios.post(`http://localhost:5000/api/admin/60ca4612b0162628c0bf1fff/highus/`,{
    })
    .then(request => dispatch({
        type: ADD_REQ,
        payload: request
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}



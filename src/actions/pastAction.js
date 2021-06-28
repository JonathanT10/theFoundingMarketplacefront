import axios from 'axios';
import {  FETCH_PATRONPPO } from './types';

export const fetchIdPatronPO = (patron_id) => dispatch => {
    axios.get(`http://localhost:5000/api/patron/${patron_id}`)
        .then(patron => dispatch({
            type: FETCH_PATRONPPO,
            payload: patron.data.pastOrders
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}
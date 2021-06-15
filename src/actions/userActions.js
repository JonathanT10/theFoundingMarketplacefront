import { FETCH_MERCH, NEW_CART } from './types';
import axios from 'axios';


export const fetchIdMerch = (merchant_id) => dispatch => {
    axios.get(`http://localhost:5000/api/merchant/${merchant_id}`)
        .then(merchant => dispatch({
            type: FETCH_MERCH,
            payload: merchant.data
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}

export const addCart = (patron_id, product) => dispatch => {
    axios .put(`http://localhost:5000/api/patron/${patron_id}/cart`,{
        cart: product
    })
    .then(product => dispatch({
        type: NEW_CART,
        payload: product
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}
import { FETCH_MERCHPAT } from './types';
import axios from 'axios';

export const fetchIdMerchPat = (merchant_id) => dispatch => {
    axios.get(`http://localhost:5000/api/product/${merchant_id}/merchant`)
        .then(product => dispatch({
            type: FETCH_MERCHPAT,
            payload: product.data
    }))   
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}
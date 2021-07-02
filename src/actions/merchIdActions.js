import { FETCH_MERCHPAT } from './types';
import axios from 'axios';

export const fetchIdMerchPat = (merchant_id) => dispatch => {
    axios.get(`http://localhost:5000/api/merchant/${merchant_id}`)
        .then(merchant => dispatch({
            type: FETCH_MERCHPAT,
            payload: merchant.data
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}
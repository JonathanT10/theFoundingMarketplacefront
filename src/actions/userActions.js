import { FETCH_MERCH } from './types';
import axios from 'axios';


export const fetchIdMerch = (merchant_id) => dispatch => {
    axios.get(`http://localhost:5000/api/product/${merchant_id}`)
        .then(merchant => dispatch({
            type: FETCH_MERCH,
            payload: merchant.data
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}


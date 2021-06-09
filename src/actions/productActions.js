import { FETCH_PRODUCT, NEW_PRODUCT } from './types';
import axios from 'axios';

//each action creator is a function
//thunk middleware allows us to call dispatch function directly so we can make asynchronous requests
//dispatch is like resolving a promise; dispatch allows for sending of data
export const fetchProduct = () => dispatch => {
    axios.get('http://localhost:5000/api/product/')
        .then(product => dispatch({
            type: FETCH_PRODUCT,
            payload: product.data
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}

export const createProduct = (postProduct) => dispatch => {
    axios.post('https://localhost:5000/api/product/',{
            name: postProduct.name,
            description: postProduct.description,
            addressMade: postProduct.addressMade,
            price: postProduct.price,
            merchantId: postProduct.merchantId,
        })
        .then(product => dispatch({
            type: NEW_PRODUCT,
            payload: product.data
    }));
}

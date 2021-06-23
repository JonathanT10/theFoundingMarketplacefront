import { FETCH_MERCH, NEW_CART, FETCH_PATRON, NEW_PASTORDERS, EMPTY_CART } from './types';
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

export const addCart = (patron_id, product_id) => dispatch => {
    axios .post(`http://localhost:5000/api/patron/${patron_id}/cart/${product_id}`,{
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

export const emptyCart = (patron_id) => dispatch => {
    axios .put(`http://localhost:5000/api/patron/${patron_id}/empty`)
    .then(cart => dispatch({
        type: EMPTY_CART,
        payload: cart
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}

export const addPastOrders = (patron_id) => dispatch => {
    axios .put(`http://localhost:5000/api/patron/${patron_id}/pastorders`,{
    
    })
    .then(cart => dispatch({
        type: NEW_PASTORDERS,
        payload: cart
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}


export const fetchIdPatron = (patron_id) => dispatch => {
    axios.get(`http://localhost:5000/api/patron/${patron_id}`)
        .then(patron => dispatch({
            type: FETCH_PATRON,
            payload: patron.data.cart
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}
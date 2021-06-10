import { FETCH_PRODUCT, NEW_PRODUCT, NEW_IMAGE, FETCHID_PRODUCT } from './types';
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

export const fetchIdProduct = (product_id) => dispatch => {
    axios.get(`http://localhost:5000/api/product/${product_id}`)
        .then(product => dispatch({
            type: FETCHID_PRODUCT,
            payload: product.data
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}

export const createProduct = (postProduct) => dispatch => {
    axios.post('http://localhost:5000/api/product/',{
            name: postProduct.name,
            description: postProduct.description,
            addressMade: postProduct.addressMade,
            price: postProduct.price,
            merchantId: postProduct.merchant_id,
        })
        .then(product => dispatch({
            type: NEW_PRODUCT,
            payload: product.data
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}


export const upImage = (imageFormObj, product_id) => {
    axios.put(`http://localhost:5000/api/product/uploadmulter/${product_id}`, {
            img: imageFormObj.img 
        })
        .then(imageFormObj => ({
            type: NEW_IMAGE,
            paload: imageFormObj
        }))
        .then ((data) => {
            if (data.data.success){
                alert("image has been successfully uploaded.");
                this.setDefaultImage("multer");
            }
        })
        .catch((err) => {
            alert("Error whil uploading image using multer");
            this.setDefaultImage("multer");
        });
     
}

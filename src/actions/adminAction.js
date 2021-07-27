import { FETCH_ADMINUS } from './types';
import { DELETE_HIGHUS } from './types';
import { STATUS_HIGHUS } from './types';
import { EMPTY_REQUEST} from './types';
import { STATUS_VET } from './types';

import axios from 'axios';

export const fetchAdminUS = () => dispatch => {
    axios.get(`http://localhost:5000/api/admin/60ca4612b0162628c0bf1fff`)
        .then(admin => dispatch({
            type: FETCH_ADMINUS,
            payload: admin.data.highUS
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}

export const deleteHighUS = (high_id) => dispatch => {
    axios.delete(`http://localhost:5000/api/highlight/${high_id}`)
    .then(highUS => dispatch({
        type: DELETE_HIGHUS,
        payload: highUS.data
    }))
}

export const statusHighUS = (merchantId) => dispatch => {
    axios.put(`http://localhost:5000/api/merchant/${merchantId}`,{
        inCountry: true
    })
    .then(merchant => dispatch({
        type: STATUS_HIGHUS,
        payload: merchant.data
}))
.catch(error => {
    alert("Invalid request")
    console.log('Error', error);
});
    
}

export const statusVet = (merchantId) => dispatch => {
    axios.put(`http://localhost:5000/api/merchant/${merchantId}/vet`,{
        veteran: true
    })
    .then(merchant => dispatch({
        type: STATUS_VET,
        payload: merchant.data
}))
.catch(error => {
    alert("Invalid request")
    console.log('Error', error);
});
    
}

export const emptyRequest = (admin_id) => dispatch => {
    axios .put(`http://localhost:5000/api/admin/${admin_id}/empty`)
    .then(highUS => dispatch({
        type: EMPTY_REQUEST,
        payload: highUS
    }))
    .catch(error => {
        alert("Invalid request")
        console.log('Error', error);
    });
}
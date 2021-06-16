import { NEW_AUTH } from './types';
import axios from 'axios';



export const logIn = (postpAuth) => {
    axios.post(`http://localhost:5000/api/auth/`, {
            email: postpAuth.email, 
            password: postpAuth.password
        })
        .then(pAuth => ({
            type: NEW_AUTH,
            paload: pAuth.data
        }))
        .then(response => {
            const  token  = response.paload;
            localStorage.setItem('token', token);
            window.location="/patronmain";
        }).catch(error => {
            alert("Username or Password invalid, please try again")
            console.log('Error', error);
        });
}


export const merchLogIn = (postmAuth) => {
    axios.post(`http://localhost:5000/api/auth/merchant`, {
            email: postmAuth.email, 
            password: postmAuth.password
        })
        .then(mAuth => ({
            type: NEW_AUTH,
            paload: mAuth.data
        }))
        .then(response => {
            const  token  = response.paload;
            localStorage.setItem('token', token);
            window.location="/merchantmain";
        }).catch(error => {
            alert("Username or Password invalid, please try again")
            console.log('Error', error);
        });
}


export const adminLogIn = (postaAuth) => {
    axios.post(`http://localhost:5000/api/auth/admin`, {
            email: postaAuth.email, 
            password: postaAuth.password
        })
        .then(aAuth => ({
            type: NEW_AUTH,
            paload: aAuth.data
        }))
        .then(response => {
            const  token  = response.paload;
            localStorage.setItem('token', token);
            window.location="/merchantmain";
        }).catch(error => {
            alert("Username or Password invalid, please try again")
            console.log('Error', error);
        });
}
import { useState } from 'react';
import axios from 'axios';



const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChange = (event) => {
        setEmail(event.target.value);
    };
    const passwordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        axios
            .post(`http://localhost:5000/api/auth/`, {email: email, password: password})
            .then(response => {
                const  token  = response.data;
                localStorage.setItem('token', token);
                window.location="/wall";
            }).catch(error => {
                alert("Username or Password invalid, please try again")
                console.log('Error', error);
            });
    }

    return(
        <container fluid>
            <table>                    
                <row className="postStyle">
                    <form  onSubmit={(event)=>handleClick(event)}>
                        
                            <label className="loginText">Email address</label>
                            <control type="email" placeholder="Enter email" onChange={emailChange}/>
                            <text className="loginText">
                            -----We'll never share your email with anyone else.
                            </text>
                      

             
                            <label className="loginText">Password</label>
                            <control type="password" placeholder="Password" onChange={passwordChange}/>
                       
                        <button variant="primary" type="submit">
                            Submit  
                        </button> {'   '}
                           
                            
                        </form>
                </row>
            </table>
        </container>
    )
}



export default Login;
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';





const Register = (props)=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ name, setName] = useState('');

    const emailChange = (event) => {
        setEmail(event.target.value);
    };
    const passwordChange = (event) => {
        setPassword(event.target.value);
    };
    const nameChange = (event) => {
        setName(event.target.value);
    }

    const handleClick = (event) => {
        event.preventDefault();
        console.log(name, email, password);
        axios
            .post(`http://localhost:5000/api/user/`, {name: name, email: email, password: password})
            .then(response => {
                console.log(response);
                window.location = '/';
            });
    }

    return(
        <Container fluid>
            <Table> 
                <Row className="postStyle">
                    <Form onSubmit={(event)=>handleClick(event)}>
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label className="loginText">Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Name"onChange={nameChange}/>
                            <Form.Text className="loginText">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                        <Form.Label className="loginText">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"onChange={emailChange}/>
                            <Form.Text className="loginText">
                            -----We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="loginText">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"onChange={passwordChange}/>
                        </Form.Group>
                        <Form.Group>
                        <Form.Label className="loginText">About Me</Form.Label>
                            <Form.Control type="aboutme" placeholder="About Me"onChange={aboutMeChange}/>
                            <Form.Text className="loginText">
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button> 
                    </Form>
                    
                    Register page here
                </Row>
            </Table>
        </Container>
    )
}

export default Register;
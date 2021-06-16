import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/login.css';
import { connect } from 'react-redux';
import { patrReg } from '../actions/registrationActions';


class PatronReg extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            email: '',
            password: '',
            data: null
        };
    }

    nameChange = event => {
        const name = event.target.value;
       this.setState({
           name: name
       });
   }

    emailChange = event => {
        const email = event.target.value;
       this.setState({
           email: email
       });
   }

     passwordChange= event => {
         const password = event.target.value;
       this.setState({
           password: password
       });
   }

   handleClick = event => {
    event.preventDefault();
    const reg = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        hqAddress: this.state.hqAddress
    }
    this.props.patrReg(reg);
    window.location="/patronmain";
    }

//    fetchEmailVerificationApi = event => (async () => {
//        event.preventDefault();
//     try{
//         const response = await fetch( `http://apilayer.net/api/check?access_key=c6325710e8c28c60a3f62888787e73c8&email=${this.email}`)
//         const json = await response.json()
//         this.setState({data: json.score})
//     } catch(e) {
//         console.error(e)
//     }
//     if (this.data >= .5)
//         alert("This is not a valid email.")

//     else (
//         this.handleClick()
//     )
//    });

   

    render(){
        return(
            <Container fluid>
                <Table> 
                    <Row className="postStyle">
                        <Form onSubmit={(event)=>this.handleClick(event)}>
                        <Form.Group controlId="formBasicEmail">
                                <Form.Label className="loginText">Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Name"onChange={this.nameChange}/>
                                <Form.Text className="loginText">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label className="loginText">Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"onChange={this.emailChange}/>
                                <Form.Text className="loginText">
                                -----We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
    
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="loginText">Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"onChange={this.passwordChange}/>
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


}



export default connect(null, { patrReg })(PatronReg);

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/regPage.css';
import { connect } from 'react-redux';
import { merchReg } from '../actions/registrationActions';


class MerchantReg extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            email: '',
            password: '',
            hqAddress: ''
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

   hqAddressChange = event => {
    const hqAddress = event.target.value;
   this.setState({
       hqAddress: hqAddress
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
    this.props.merchReg(reg);
    window.location="/";
    }

    render(){
        return(
            <Container fluid className="regmain">
                <Table> 
                <h1 className="reghead">Merchant Registration Page</h1>
                    <Row className="reginfo">
                        <Form onSubmit={(event)=>this.handleClick(event)}>
                        <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Name"onChange={this.nameChange}/>
                                <Form.Text>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"onChange={this.emailChange}/>
                                <Form.Text>
                                -----We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
    
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"onChange={this.passwordChange}/>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>HQ Address</Form.Label>
                                <Form.Control type="hqaddress" placeholder="HQ Address"onChange={this.hqAddressChange}/>
                                <Form.Text>
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Register
                            </Button> 
                        </Form>
                    </Row>
                </Table>
            </Container>
        )

    }


}



export default connect(null, { merchReg })(MerchantReg);

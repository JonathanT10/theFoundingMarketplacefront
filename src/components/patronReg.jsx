import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/regPage.css';
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
    window.location="/";
    }

    
   emailVerif = async() =>{
        const response = await fetch( `http://apilayer.net/api/check?&email=${this.state.email}`)
        const json = await response.json()
        this.setState({data: json.score})
        console.log(this.state.data);
   }

   fetchEmailVerificationApi = event => {
       event.preventDefault();
    try{
        this.emailVerif();
    } catch(e) {
        console.error(e)
    }
    if (this.state.data >= .5)
        alert("This is not a valid email.")

    else (
        this.handleClick(event)
    )
   };


   

    render(){
        return(
            <Container fluid className="regmain">
                <Table > 
                <h1 className="reghead">Patron Registration Page</h1>
                    <Row className="reginfo">
                        <Form onSubmit={(event)=>this.fetchEmailVerificationApi(event)}>
                        <Form.Group controlId="formBasicEmail">
                                <Form.Label >Name</Form.Label>
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
                            <Button variant="primary" onClick={(event) => this.fetchEmailVerificationApi(event)} type="submit">
                                Register
                            </Button> 
                        </Form>
                    </Row>
                </Table>
            </Container>
        )

    }


}



export default connect(null, { patrReg })(PatronReg);

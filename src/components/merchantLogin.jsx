import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import '../css/login.css';
import { connect } from 'react-redux';
import { merchLogIn } from '../actions/authActions';


class MerchLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:''
        };
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

      handleClick(event) {
        event.preventDefault();
        const login = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.merchLogIn(login);
     
    }

      merchantLog(){
        window.location = '/merchantLogin';
    }

 render() {
    return(
        <Container>
            <Col>
            <h1>The Founding</h1>
            <h2 className="subH">Marketplace</h2>
            <p className="about">A place for free trade, with a prioity on products made in USA.</p>
           <Row>
            <Col>   
            <p className="mreg">Merchant Registartion</p>
            </Col>  
            </Row>
            <Table className="patronLog">   
            <>Merchant Login</>                 
                <Row>
                    <Form className="flog" onSubmit={(event)=>this.handleClick(event)}>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.emailChange}/>
                            <Form.Text>
                            -----We'll never share your email with anyone else.
                            </Form.Text>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.passwordChange}/>
                            </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit  
                        </Button>
                        </Form>
                </Row>
            </Table>
            </Col>
        </Container>
    )
}
}



export default connect(null, { merchLogIn })(MerchLogin);
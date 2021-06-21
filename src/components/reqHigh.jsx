import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { highUS } from '../actions/reqActions';
import jwtDecode from 'jwt-decode';
import '../css/merchantMain.css'
import { addReq } from '../actions/reqActions';

class ReqHigh extends Component {
    constructor(props){
        super(props);
        this.state = {
            request: '',
            merchant_id:''
        }
    }

    onRequestChange = event => {
        const request  = event.target.value;
        this.setState({
            request: request
        })
        this.getMerchId();
    }

    getMerchId() {
        const jwt =localStorage.getItem('token');
        const merchObject = jwtDecode(jwt);
        const merchant_id = merchObject._id;
        this.setState({
            merchant_id: merchant_id
        })
    }

        handleClick = event => {
            event.preventDefault();
            const req = {
                request: this.state.request,
                merchantId: this.state.merchant_id
            }
            this.props.highUS(req);
            this.props.addReq();
            window.location="/merchantmain";
            }



    logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };

    merchProfile(){
        window.location = '/merchprofile';
    }

    render(){
        return(
            <div className="mainm">
                <p className="logOutMerch" onClick={() => this.logOut()}>Log Out</p>
                <Container  className="merchMain" >
                    <Table >
                        <Col>
                        <Row>
                            <h1 className="headmain">Request Highlighted Status</h1>
                        </Row>
                        <Row>
                            <Button className="buttonm" onClick={() => this.merchProfile()}>Merchant Profile</Button>
                        </Row>
                        </Col>
                        <Col>
                        <Row>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Made in USA Highlight</Form.Label>
                                    <Form.Control type="about" placeholder="Request Made in USA"onChange={this.onRequestChange}/>
                                    <Form.Text>
                                    </Form.Text>
                                </Form.Group>
                                <Button className="buttonm"  variant="primary" type="submit" onClick={(event) => this.handleClick(event)}>
                                    Submit
                                </Button>
                            </Form>
                        </Row>
                        </Col>
                    </Table>
                </Container>
            </div>
        )
    }


}



export default connect(null, { highUS, addReq }) (ReqHigh);
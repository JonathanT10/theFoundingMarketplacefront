import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { editAbout } from '../actions/editAction';
import jwtDecode from 'jwt-decode';
import '../css/merchantMain.css'

class MerchantMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            about: '',
            merchant_id:''
        }
    }

    onAboutChange = event => {
        const about  = event.target.value;
        this.setState({
            about: about
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
            const abt = {
                about: this.state.about,
            }
            this.props.editAbout(this.state.merchant_id, abt);
            window.location="/productmain";
            }

    patronMain(){
        window.location = '/patronMain';
    }

    merchProduct(){
        window.location = '/merchproduct';
    }

    logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };

    merchProfile(){
        window.location = '/merchprofile';
    }

    reqHigh(){
        window.location = '/reqhigh';
    }

    render(){
        return(
            <div className="mainm">
                <p className="logOutMerch" onClick={() => this.logOut()}>Log Out</p>
                <Container  className="merchMain" >
                    <Table >
                        <Col>
                        <Row>
                            <h1 className="headmain">Merchant Tasks</h1>
                        </Row>
                        <Row>
                            <Button className="buttonm" onClick={() => this.merchProfile()}>Merchant Profile</Button>
                        </Row>
                        <Row>
                            <Button className="buttonm" onClick={() => this.merchProduct()}>Add Product</Button>
                        </Row>
                        <Row>
                            <Button className="buttonm" onClick={() => this.patronMain()}>View Patron Main Page</Button>
                        </Row>
                        <Row>
                            <Button className="buttonm" onClick={() => this.reqHigh()}>Submit Request for Highlighted Status</Button>
                        </Row>
                        </Col>
                        <Col>
                        <Row>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Edit About Section</Form.Label>
                                    <Form.Control type="about" placeholder="Edit About"onChange={this.onAboutChange}/>
                                    <Form.Text>
                                    </Form.Text>
                                </Form.Group>
                                <Button className="buttonm"  variant="primary" type="submit" onClick={() => this.getMerchId(), this.handleClick}>
                                    Edit
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

const mapStateToProps = state => ({
    about: state.about.items
});

export default connect(null, { editAbout }) (MerchantMain);
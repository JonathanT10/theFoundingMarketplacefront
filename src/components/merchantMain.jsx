import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { editAbout } from '../actions/editAction';
import jwtDecode from 'jwt-decode';

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
        //     const jwt=localStorage.getItem('token');
        //    const merchObject = jwtDecode(jwt);
        //    const merhcnat_id = merchObject._id;
        //    this.setState({
        //        merchant_id: merchant_id
        //    })
            this.props.editAbout(this.state.merchant_id, abt);
            window.location="/productmain";
            }

    patronMain(){
        window.location = '/patronMain';
    }

    merchProduct(){
        window.location = '/merchproduct';
    }

    render(){
        return(
            <div>
                <Container>
                    <Table>
                        <Row>
                            <h1>Welcom to main merchant page</h1>
                        </Row>
                        <Row>
                            <Button onClick={() => this.merchProduct()}>Add Product</Button>
                        </Row>
                        <Row>
                            <Button onClick={() => this.patronMain()}>View Patron Main Page</Button>
                        </Row>
                        <Row>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Edit About Section</Form.Label>
                                    <Form.Control type="about" placeholder="Edit About"onChange={this.onAboutChange}/>
                                    <Form.Text>
                                    </Form.Text>
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={() => this.getMerchId(), this.handleClick}>
                                    Edit
                                </Button>
                            </Form>
                        </Row>
                        <Row>
                            <Button>Submit Request for Highlighted Status</Button>
                        </Row>
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
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchIdProduct } from '../actions/productActions'
import '../css/patronMain.css'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import jwtDecode from 'jwt-decode';
import { fetchIdMerch } from '../actions/userActions';
import { fetchIdMerchProd } from '../actions/productActions';


class MerchProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            merchant_id: '',
            productImg: '',
            product: [],
            product_id: ''
        };
    }


    componentDidMount(){
        const jwt = localStorage.getItem('token');
        const userObject = jwtDecode(jwt);
        const merchant_id = userObject._id;
        this.setState({
            merchant_id: merchant_id
        })
        this.props.fetchIdMerch(merchant_id);
        this.props.fetchIdMerchProd(merchant_id);
        const product= [];
        this.setState({
            product: product.array
        })
    }

    mapProduct(){
        const productImg = "http://localhost:5000/";
        console.log("product items", this.props.mproduct);
        
        return this.props.product.map(product => (
            product.map(product => (
            <div key={product.id}>
                <Container className='products'>
                    <div clas='row'>
                    <div class='col'>
                    <img src={productImg+product.img}></img>
                    </div>
                    <div class='col'>
                <Table>  
                <p className="product">{product.name}</p>
                <p className="product">{product.description}</p>
                <p className="product">{product.addressMade}</p>
                <p className="product">{product.price}</p>
                <Button className="button" onClick={() => window.location = '/googlemaps'}>Google Map</Button>
                   
                <Col>
                <Button value={product.id} className="button" onClick={() =>
                 window.location = "/productimg"}>Upload Image</Button>
                </Col>
                </Table>
                </div>
                </div>
                </Container>
            </div>
        ))));
    }


    logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };


    render(){
        return(
            <div className="main">
                <p className="logOut" onClick={() => this.logOut()}>Logout</p>
                <Container>
                <h1 className="merchHead">Merchant Profile</h1>
                {/* <h2>{this.props.merchant.about}</h2>
                <p>{this.props.merchant.hqAddress}</p> */}
                {this.mapProduct()}
                </Container>
            </div>
        )
    }


}


const mapStateToProps = state => ({
    product: state.product.items
});

export default connect(mapStateToProps, { fetchIdMerchProd, fetchIdMerch }) (MerchProfile);
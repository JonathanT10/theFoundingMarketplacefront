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
import axios from 'axios';


class PatMerchProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            merchant_id: '',
            productImg: '',
            product: [],
            product_id: '',
            selectedFile: File,
            isSelected: false,
        };
    }


    componentDidMount(){
        const jwt = localStorage.getItem('merchant_id');
        const merchant_id = jwt
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
        console.log('products', this.props.product)
        console.log("merchant product items", this.props.merchprod);
        
        return this.props.merchprod.map(product => (
            product.map(product => (
            <div key={product._id}>
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

    patmain = () => {
        localStorage.removeItem('merchant_id')
        window.location = '/patronMain';
    };


    render(){
        return(
            <div className="main">
                <p className="logOut" onClick={() => this.logOut()}>Logout</p>
                <p className="logOut" onClick={() => this.patmain()}>Back</p>
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
    merchprod: state.merchprod.items,
    merchPat: state.merchPat.items,
    product: state.product.items,
    merchprod: state.merchprod.items
});

export default connect(mapStateToProps, { fetchIdMerchProd, fetchIdMerch }) (PatMerchProfile);
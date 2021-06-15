import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/productActions'
import '../css/patronMain.css'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import { addCart } from '../actions/userActions';
import jwtDecode from 'jwt-decode';
import GoogleMaps from './googleMaps';




class PatronMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: {},
            cart: [],
            patron_id: '',
            productImg: ''
        }
    }

    clickCart(product){
        const jwt = localStorage.getItem('token');
        const userObject = jwtDecode(jwt);
        const patron_id = userObject._id;
        this.setState({
            patron_id: patron_id
        })
    }
 


    componentDidMount(){
        this.props.fetchProduct()
        const productImg = "";
        this.setState({
            productImg: "http://localhost:5000/"
        })
    }

   

  

    mapProduct(){
        const productImg = "http://localhost:5000/";
        console.log("product items", this.props.product);
        return this.props.product.map(product => (
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
                <p className="product">{product.img}</p>
                <Button className="button" onClick={() => window.location = '/googlemaps'}>Google Map</Button>
                   
                <Col>
                <Button value={product} className="button">Add to cart</Button>
                </Col>
                </Table>
                </div>
                </div>
                </Container>
            </div>
        ));
    }

    logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };


    render(){
        return(
            <div className='main'>
                <p className="logOut" onClick={() => this.logOut()}>Logout</p>
                <Container>
                <h1 className='heading'>Welcome to main product page</h1>
                <img src='../images/capial.png' />
                {this.mapProduct()}
                </Container>
            </div>
        )
    }


}


const mapStateToProps = state => ({
    product: state.product.items
});

export default connect(mapStateToProps, { fetchProduct }) (PatronMain);
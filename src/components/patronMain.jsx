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


class PatronMain extends Component {
    

    componentDidMount(){
        this.props.fetchProduct()
    }

    mapProduct(){
        console.log("product items", this.props.product);
        return this.props.product.map(product => (
            <div key={product.id}>
                <Container>
                <Table>
                <iamge url={product.img}/>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>{product.addressMade}</p>
                <p>{product.price}</p>
                </Table>
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
            <div>
                <p className="logOut" onClick={() => this.logOut()}>Logout</p>
                <Container>
                <h1>Welcome to main product page</h1>
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
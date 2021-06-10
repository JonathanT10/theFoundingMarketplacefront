import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/productActions'

class PatronMain extends Component {

    componentDidMount(){
        this.props.fetchProduct()
    }

    mapProduct(){
        console.log("product items", this.props.product);
        return this.props.product.map(product => (
            <div key={product.id}>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>{product.addressMade}</p>
                <p>{product.price}</p>
            </div>
        ));
    }
    render(){
        return(
            <div>
                <h1>Welcom to main product page</h1>
                {this.mapProduct()}
            </div>
        )
    }


}


const mapStateToProps = state => ({
    product: state.product.items
});

export default connect(mapStateToProps, { fetchProduct }) (PatronMain);
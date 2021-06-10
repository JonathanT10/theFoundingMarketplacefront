import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { createProduct } from '../actions/productActions';

class MerchantMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            addressMade: '',
            price: '',
            merchantId: ''
        }
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
                <h1>Welcom to main merchant page</h1>
                <button onClick={() => this.merchProduct()}>Add Product</button>
                <button onClick={() => this.patronMain()}>View Patron Main Page</button>
                <button>Edit Profile</button>
                <button>Submit Request for Highlighted Status</button>
            </div>
        )
    }


}

// const mapStateToProps = state => ({
//     product: state.product.items
// });

export default MerchantMain;
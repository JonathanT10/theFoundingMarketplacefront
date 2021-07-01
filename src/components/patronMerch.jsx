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
                   
                <Col>
                <form onSubmit={this.handleSubmission} encType='multipart/form-data'>
                    <input type="file" name="img" onChange={this.imgChange} />
                    {this.isSelected ? ( 
                        <div className="loginText">
                            <p>Filename: {this.selectedFile.name}</p>
                            <p>Filetype: {this.selectedFile.type}</p>
                            <p>Size in bytes: {this.selectedFile.size}</p>
                        </div>
                    ) : (
                    <p className="loginText">Select a file to show details</p>
                    )}
                    <div className="loginText">
                    <button value={product._id} className="btn btn-success btn-md"  onClick={(event) => 
                    this.handleSubmission(event)}>Submit</button>
                    </div>  
                </form> 
                <Button value={product.id} className="button" onClick={(event) =>
                 window.location = "/productimg"}>Upload Image</Button>
                </Col>
                </Table>
                </div>
                </div>
                </Container>
            </div>
        ))));
    }

    imgChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });
       console.log("image file", this.state.selectedFile)
	};


    handleSubmission = (event) => {
        event.preventDefault();
       
        console.log('imgchange',this.state.selectedFile[0])
        const formData = new FormData();
        formData.append("img", this.state.selectedFile);


        
        var config = {
            method: 'put',
            url: `http://localhost:5000/api/product/uploadmulter/${event.currentTarget.value}`, 
            data : formData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });        
        window.location = '/merchprofile';
	};


    logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };

    merchMain = () => {
        window.location = '/merchantmain';
    };


    render(){
        return(
            <div className="main">
                <p className="logOut" onClick={() => this.logOut()}>Logout</p>
                <p className="logOut" onClick={() => this.merchMain()}>Back</p>
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
    merchprod: state.merchprod.items
});

export default connect(mapStateToProps, { fetchIdMerchProd, fetchIdMerch }) (PatMerchProfile);
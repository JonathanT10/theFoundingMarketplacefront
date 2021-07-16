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
import MadeInUS from '../images/MadeInUS.jpg'


class MerchProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            merchant_id: '',
            productImg: '',
            product: [],
            product_id: '',
            selectedFile: File,
            isSelected: false,
            user: {},
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
        const user = {};
        console.log("product items", this.props.mproduct);
        
        return this.props.merchprod.map(product => (
            product.map(product => (
            <div key={product._id}>
                <Container className='products'>
                    <div clas='row'>
                    <div class='col'>
                    <img className="prodPic" src={productImg+product.img}></img>
                    </div>
                    <div class='col'>
                <Table>  
                <p className="product">{product.name}</p>
                <p className="product">{product.description}</p>
                <p className="product">{product.addressMade}</p>
                <p className="product">{product.price}</p>
                <p className="commentHead">Comments:</p>
                <p className="comment">{product.comment}</p>
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
                    <p className="loginText">Select a file</p>
                    )}
                    <div className="loginText">
                    <button value={product._id} className="button"  onClick={(event) => 
                    this.handleSubmission(event)}>Upload Image</button>
                    </div>  
                </form> 
                </Col>
                </Table>
                </div>
               
                </div>
                </Container>
            </div>
        ))));
    }

  

    mapUser(){
        return this.props.user.map(merchant => (
            <div key={merchant.id}>
                <Container>
                    <p className="merchName">{merchant.name}</p>
                    <p>{merchant.hqAddress}</p>
                    <p>{merchant.about}</p>
                    <p>{this.highLightUS()}</p>
                </Container>
            </div>
        ));
    }

    highLightUS(){
        if(this.props.user[0].inCountry = true){
            return(
        <img class ="centerUS" src = {MadeInUS} height="30" width="10%"></img>)
        }else{
            console.log("no highlight")
        }
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

    merchProduct(){
        window.location = '/merchproduct';
    }


    render(){
        return(
            <div className="main">
                <p className="logOut" onClick={() => this.logOut()}>Logout</p>
                <p className="logOut" onClick={() => this.merchMain()}>Back</p>
                <Container>
                    <div className="merchHead">
                        <h1 className="merchHead">Merchant Profile</h1>
                       <p className='about'>{this.mapUser()}</p> 
                    </div>
               
                {this.mapProduct()}
                <Row>
                            <Button className="buttonm" onClick={() => this.merchProduct()}>Add Product</Button>
                </Row>
                </Container>
                
            </div>
        )
    }


}



const mapStateToProps = state => ({
    merchprod: state.merchprod.items,
    user: state.user.items
});

export default connect(mapStateToProps, { fetchIdMerchProd, fetchIdMerch }) (MerchProfile);
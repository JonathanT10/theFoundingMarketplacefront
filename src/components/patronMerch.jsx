import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../css/patronMain.css'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import jwtDecode from 'jwt-decode';
import { fetchIdMerch } from '../actions/userActions';
import { fetchIdMerchProd } from '../actions/productActions';
import { addCart } from '../actions/userActions';
import MadeInUS from '../images/MadeInUS.jpg'
import VOB from '../images/VOB.jpg'
import Fire from '../images/Fire.jpg'


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
                    <div className='row'>
                    <div className='col'>
                    <img className="prodPic" src={productImg+product.img} alt="Product that this merchant sells"></img>
                    </div>
                    <div class='col'>
                <Table>  
                <p className="product">{product.name}</p>
                <p className="product">{product.description}</p>
                <p className="product">{product.addressMade}</p>
                <p className="product">{product.price}</p>
                <Button className="button" value={product.lat, product.lng}
                onClick={(event) => this.handleGoogle(product.lat, product.lng)}>Google Map</Button>
                <Col>
                <Button value={product._id} className="button" 
                onClick={(event) => 
                    this.handleClick(event)}>Add to cart</Button>
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
                <Container className="merchProf">
                    <p className="merchName">{merchant.name}</p>
                    <p>{merchant.hqAddress}</p>
                    <p>{merchant.about}</p>
                    <p>{this.highLightUS()}</p>
                    <p>{this.highLightVet()}</p>
                    <p>{this.highLightFire()}</p>
                    {/* <p>{this.highLightPolice()}</p> */}
                </Container>
            </div>
        ));
    }

    handleGoogle(plat, plng){
        localStorage.setItem('lat', plat)
        localStorage.setItem('lng', plng)
        window.location = '/googlemaps'
    }

    highLightUS(){
        if(this.props.user[0].inCountry === true){
            return(
        <img class ="centerUS" src = {MadeInUS} height="30" width="10%" alt="Made in the USA badge"></img>)
        }else{
            console.log("no highlight")
        }
    }

    highLightVet(){
        if(this.props.user[0].veteran === true){
            return(
        <img class ="centerUS" src = {VOB} height="38" width="6%" alt="Veteran Owned Business badge"></img>)
        }else{
            console.log("no  vet highlight")
        }
    }

    highLightFire(){
        if(this.props.user[0].fire === true){
            return(
        <img class ="centerUS" src = {Fire} height="30" width="10%" alt="Firefighter Owned Business badge"></img>)
        }else{
            console.log("no fire highlight")
        }
    }

    highLightPolice(){
        if(this.props.user[0].police === true){
            return(
        <img class ="centerUS" src = {MadeInUS} height="30" width="10%" alt="Police Owned Business badge"></img>)
        }else{
            console.log("no  police highlight")
        }
    }

    handleClick= event => {
        const jwt = localStorage.getItem('token');
    const userObject = jwtDecode(jwt);
    const patron_id = userObject._id;
        this.props.addCart(patron_id, event.currentTarget.value)
        window.location = "/cart";
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
                <p className="merchAbout">{this.mapUser()}</p> 
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
    user: state.user.items
});

export default connect(mapStateToProps, { fetchIdMerchProd, fetchIdMerch, addCart }) (PatMerchProfile);
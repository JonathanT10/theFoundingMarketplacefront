import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../css/patronMain.css'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import jwtDecode from 'jwt-decode';
import { fetchIdPatron } from '../actions/userActions';
import { addPastOrders } from '../actions/userActions';
import { emptyCart } from '../actions/userActions';



class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
           patron: {},
           pastOrders: [],
           
        }
    }

    componentDidMount(){
        const jwt = localStorage.getItem('token');
    const userObject = jwtDecode(jwt);
    const patron_id = userObject._id;
    this.props.fetchIdPatron(patron_id);
    }


    mapProductCart(){
        const productImg = "http://localhost:5000/";
        console.log("product items", this.props.patron);
        return this.props.patron.map(cart => (
            cart.map(product => (
            <div key={product.id}>
                <Container className='products'>
                    <img className="prodPic" src={productImg+product.img}></img>
                    <div class='col'>
                        <Table>  
                        <p className="product">{product.name}</p>
                        <p className="product">{product.description}</p>
                        <p className="product">{product.addressMade}</p>
                        <p className="product">{product.price}</p>
                        <Button className="button" 
                        onClick={() => window.location = '/googlemaps'}>Google Map</Button>
                        </Table>
                    </div>
                </Container>
            </div>
            
              
              ))));
        
    }

    checkout = (event) => {
        event.preventDefault();
        const pOrder = this.props.patron.splice(0,this.props.patron.length);
        console.log(pOrder[0]);
        const jwt = localStorage.getItem('token');
        const userObject = jwtDecode(jwt);
        const patron_id = userObject._id;
        this.props.addPastOrders(patron_id);
        this.props.emptyCart(patron_id);
        window.location = '/pastorders';
    }

    clearCart = (event) => {
        event.preventDefault();
        const jwt = localStorage.getItem('token');
        const userObject = jwtDecode(jwt);
        const patron_id = userObject._id;
        this.props.emptyCart(patron_id);
        window.location = '/cart';
    }    

    logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };

    
    main = () => {
        window.location = '/patronmain';
    };

    past = () => {
        window.location = '/pastorders';
    };

    render(){
        return(
            <div className='mainp'>
                <p className="logOut" onClick={() => this.logOut()}>Logout</p>
                <p className="logOut" onClick={() => this.main()}>Back</p>
                <p className="logOut" onClick={() => this.past()}>Order History</p>
                <Container>
                <h1 className='heading'>Welcome to your cart.</h1>
                {this.mapProductCart()}
                <Button onClick={(event) => this.checkout(event)}>Checkout</Button>
                <Button className="clearCart" onClick={(event) => this.clearCart(event)}>Clear Cart</Button>
                </Container>
            </div>
            
        )
    }

}

const mapStateToProps = state => ({
    patron: state.patron.items
});

export default connect(mapStateToProps, { fetchIdPatron, addPastOrders, emptyCart }) (Cart);
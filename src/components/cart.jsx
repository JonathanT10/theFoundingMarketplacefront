import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../css/patronMain.css'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
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
           total: '',
           
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
                    <img className="prodPic" src={productImg+product.img} 
                    alt="Product listed for sale"></img>
                    <div className='col'>
                        <Table>  
                        <p className="product">{product.name}</p>
                        <p className="product">{product.description}</p>
                        <p className="product">{product.addressMade}</p>
                        <p className="product">{product.price}</p>
                        <Button className="button" value={product.lat, product.lng}
                onClick={(event) => this.handleGoogle(product.lat, product.lng)}>Google Map</Button>
                        </Table>
                    </div>
                </Container>
            </div>
            
              
              ))));
        
    }

    handleGoogle(plat, plng){
        localStorage.setItem('lat', plat)
        localStorage.setItem('lng', plng)
        window.location = '/googlemaps'
    
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
import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../css/patronMain.css'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import jwtDecode from 'jwt-decode';
import { fetchIdPatronPO } from '../actions/pastAction';




class PastOrders extends Component {
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
    this.props.fetchIdPatronPO(patron_id);
    console.log(this.props.pastOrder)
    }


    mapProductCart(){
        const productImg = "http://localhost:5000/";
        console.log("history items", this.props.user);
        return this.props.pastOrder.map(pastOrders => (
            pastOrders.map(product => (
                product.map(product => (
            <div key={product.id}>
                <Container className='products'>
                    <img className="prodPic" src={productImg+product.img}></img>
                    <div class='col'>
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
            
              
              ))))));
        
    }


    handleGoogle(plat, plng){
        localStorage.setItem('lat', plat)
        localStorage.setItem('lng', plng)
        {window.location = '/googlemaps'}
    }

    logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };

    
    main = () => {
        window.location = '/patronmain';
    };

    render(){
        return(
            <div className='mainp'>
                <p className="logOut" onClick={() => this.logOut()}>Logout</p>
                <p className="logOut" onClick={() => this.main()}>Home</p>
                <Container>
                <h1 className='heading'>Order History</h1>
                {this.mapProductCart()}
                </Container>
            </div>
            
        )
    }

}

const mapStateToProps = state => ({
    pastOrder: state.pastOrder.items
});

export default connect(mapStateToProps, { fetchIdPatronPO }) (PastOrders);
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
import { Map, GoogleApiWrapper } from 'google-maps-react';
import '../css/googleMaps.css';
import Maps from './googleMaps';
import { commentProd } from '../actions/productActions';





class PatronMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: {},
            cart: [],
            patron_id: '',
            product_id: '',
            productImg: '',
            comment: ''
        }
    }


 


    componentDidMount(){
        this.props.fetchProduct()
    }


    nameComment = event => {
        const comment = event.target.value;
       this.setState({
           comment: comment
       });
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
                <Button className="button" 
                onClick={() => window.location = '/googlemaps'}>Google Map</Button>
                   
                <Col>
                <Button value={product._id} className="button" 
                onClick={(event) => 
                    this.handleClick(event)}>Add to cart</Button>
                    <Col className="comments">
                    <p className="commentHead">Comments:</p>
                    <p className="comment">{product.comment}</p>
                    </Col>
                </Col>
                </Table>
                </div>
                <Form >
                    <Form.Group controlId="formComments">
                        <Form.Label className="addComment">Post Comment</Form.Label>
                        <Form.Control type="comment" placeholder="Comment Here"onChange={this.onCommentChange}/>
                        <Form.Text className="loginText">
                        </Form.Text>
                    </Form.Group>
                    <Button value={product._id} className="buttonp"
                    onClick={(ev) => 
                    this.handleComment(ev)} >
                                Post
                            </Button> 
                </Form>
                </div>
                </Container>
            </div>
        ));
    }

    handleClick= event => {
        const jwt = localStorage.getItem('token');
    const userObject = jwtDecode(jwt);
    const patron_id = userObject._id;
    this.setState({
        patron_id: patron_id,
    })
        this.props.addCart(patron_id, event.currentTarget.value)
    }

    onCommentChange = event => {
        const comment  = event.target.value;
        this.setState({
            comment: comment
        })
    }
  
    handleComment= event => {
    event.preventDefualt();
    this.props.commentProd(this.comment, event.currentTarget.value);

    }


    logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };


    render(){
        return(
            <div className='mainp'>
                <p className="logOut" onClick={() => this.logOut()}>Logout</p>
                <Container>
                <h1 className='heading'>Welcome to main product page</h1>
                {this.mapProduct()}
                </Container>
            </div>
        )
    }


}


const mapStateToProps = state => ({
    product: state.product.items
});

export default  connect(mapStateToProps, { fetchProduct, addCart }) (PatronMain);
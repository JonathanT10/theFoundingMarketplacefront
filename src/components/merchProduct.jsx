import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/login.css';
import { connect } from 'react-redux';
import { createProduct } from '../actions/productActions';
import jwtDecode from 'jwt-decode';
import '../css/merchProduct.css';




class MerchantProd extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            description: '',
            addressMade: '',
            price: '',
            merchant_id: '',
            merchName: '',
        };
    }


    nameChange = event => {
        const name = event.target.value;
       this.setState({
           name: name
       });
   }

    descriptionChange = event => {
        const description = event.target.value;
       this.setState({
           description: description
       });
   }

     addressMadeChange= event => {
         const addressMade = event.target.value;
       this.setState({
           addressMade: addressMade
       });
   }

   priceChange = event => {
    const price = event.target.value;
   this.setState({
       price: price
   });
}

getMerchId() {
const jwt =localStorage.getItem('token');
const merchObject = jwtDecode(jwt);
const merchant_id = merchObject._id;
const merchantName = merchObject.name;
this.setState({
    merchant_id: merchant_id,
    merchName: merchantName
})

}

    handleClick = event => {
    event.preventDefault();
    const prod = {
        name: this.state.name,
        description: this.state.description,
        addressMade: this.state.addressMade,
        price: this.state.price,
        merchant_id: this.state.merchant_id,
        merchName: this.state.merchName,
    }
    this.props.createProduct(prod);
    window.location="/merchantmain";
    }

    logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };
    merchMain = () => {
        window.location = '/merchantmain';
    };

    render(){
        return(
            <div className="prodmdiv">
                <p className="logOutmp" onClick={() => this.logOut()}>Log Out</p>
                <p className="logOutmp" onClick={() => this.merchMain()}>Back</p>
            <Container className="mainAdd">
               
                <Table>
                    <Row>
                    <h1 className="headaddprod">Add Product</h1>
                    </Row> 
                    <Row className="postStyle">
                        <Form onSubmit={(event)=>this.handleClick(event)}>
                        <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Name"onChange={this.nameChange}/>
                                <Form.Text>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Description</Form.Label>
                                <Form.Control type="description" placeholder="Enter description"onChange={this.descriptionChange}/>
                                <Form.Text>
                                </Form.Text>
                            </Form.Group>
    
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Address Made</Form.Label>
                                <Form.Control type="addressmade" placeholder="Address Made"onChange={this.addressMadeChange}/>
                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Price</Form.Label>
                                <Form.Control type="price" placeholder="Price"onChange={this.priceChange}/>
                                <Form.Text>
                                </Form.Text>
                            </Form.Group>
                            <Button className="buttonaddp" variant="primary" type="submit" onClick={() => this.getMerchId()}>
                                Submit
                            </Button> 
                        </Form>
                    </Row>
                </Table>
            </Container>
            
            </div>
        )

    }


}



export default connect(null, { createProduct })(MerchantProd);
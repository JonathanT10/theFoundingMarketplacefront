import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import '../css/login.css';
import { connect } from 'react-redux';


class MerchantReg extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: '',
            email: '',
            password: '',
            hqAddress: ''
        };
    }

    emailChange = event => {
        const name = event.target.value;
       this.setState({
           name: name
       });
   }

    emailChange = event => {
        const email = event.target.value;
       this.setState({
           email: email
       });
   }
   
     passwordChange= event => {
         const password = event.target.value;
       this.setState({
           password: password
       });
   }

   emailChange = event => {
    const hqAddress = event.target.value;
   this.setState({
       hqAddress: hqAddress
   });
}
}

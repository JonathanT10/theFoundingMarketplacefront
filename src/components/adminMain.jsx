import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import jwtDecode from 'jwt-decode';
import '../css/merchantMain.css'
import { fetchAdminUS } from '../actions/adminAction';
import { deleteHighUS  } from '../actions/adminAction';
import { statusHighUS } from '../actions/adminAction';
import { emptyRequest } from '../actions/adminAction';
import { statusVet } from '../actions/adminAction';
import { statusFire } from '../actions/adminAction';

class AdminMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            about: '',
            merchant_id:'',
            highUS: [],
            req: {},
            admin_id: ''
        }
    }

    componentDidMount(){
        this.props.fetchAdminUS()
        console.log(this.props.admin)
    }

delHighUS(event){
    this.props.deleteHighUS(event.currentTarget.value)
}

approveHighUS(event){
    this.props.statusHighUS(event.currentTarget.value)
}

approveVet(event){
    this.props.statusVet(event.currentTarget.value)
}

approveFire(event){
    this.props.statusFire(event.currentTarget.value)
}

emptyReq(){
    const jwt =localStorage.getItem('token');
        const adminObject = jwtDecode(jwt);
        const admin_id = adminObject._id;
    this.props.emptyRequest(admin_id)
}
        
            mapHighUS(){
                return this.props.admin.map(admin => (
                   admin.map(admin =>
                    admin.map(admin =>
                    <div key={admin._id}>
                        <Container >
                        <Table>
                        <Col>
                        <Row>
                        <p className="product">{admin.request}</p>
                        <p className="product">{admin.merchantId}</p>
                        
                        </Row>
                        <Row>
                        <Button value={admin.merchantId} 
                        onClick={(event) => this.approveHighUS(event)}>Approve Made in USA Status</Button>
                        <Button value={admin.merchantId}
                        onClick={(event) => this.approveVet(event)}>Approve Veteran Status</Button>
                        <Button value={admin.merchantId}
                        onClick={(event) => this.approveFire(event)}>Approve Fire Status</Button>
                        <Button className="clearCart"  
                        value={admin._id} onClick={(event) => this.delHighUS(event)}>Deny</Button>
                        </Row>
                        
                        </Col>
                        </Table>
                        </Container>
                    </div>
                ))));
            }
        

    patronMain(){
        window.location = '/patronMain';
    }

    merchProduct(){
        window.location = '/merchproduct';
    }

    logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };

    merchProfile(){
        window.location = '/merchprofile';
    }

    render(){
        return(
            <div className="mainm">
                <p className="logOutMerch" onClick={() => this.logOut()}>Log Out</p>
                <Container  className="merchMain" >
                    <Table >
                        <Col>
                        <Row>
                            <h1 className="headmain">Admin Tasks</h1>
                        </Row>
                        <h3 className="adminbody">Highlighted Status Request</h3>
                            <Col className="adminbody">
                            <Row>
                            {this.mapHighUS()}
                            </Row>
                            </Col>
                            <Button className="adminbody" onClick={() => this.emptyReq()}>Clear Requests</Button>
                        </Col>
                    </Table>
                </Container>
            </div>
        )
    }


}


const mapStateToProps = state => ({
    admin: state.admin.items
});



export default connect(mapStateToProps, { fetchAdminUS, deleteHighUS, statusHighUS, emptyRequest, statusVet, statusFire }) (AdminMain);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import jwtDecode from 'jwt-decode';
import '../css/merchantMain.css'
import { fetchAdminUS } from '../actions/adminAction';
import { deleteHighUS  } from '../actions/adminAction';
import { statusHighUS } from '../actions/adminAction';

class AdminMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            about: '',
            merchant_id:'',
            highUS: [],
            req: {}
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
        
            mapHighUS(){
                console.log("Highlight request Made in US items", this.props.req);
                
                return this.props.admin.map(admin => (
                   admin.map(admin =>
                    admin.map(admin =>
                    <div key={admin._id}>
                        <Container >
                        <Table>
                        <Col>
                        <Row>
                       
                        <p>{admin.request}</p>
                        <p>{admin.merchantId}</p>
                        </Row>
                        <Row>
                        <Button value={admin.merchantId} onClick={(event) => this.approveHighUS(event)}>Approve</Button>
                        <Button value={admin._id} onClick={(event) => this.delHighUS(event)}>Deny</Button>
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
                        <h3>Made in US requests</h3>
                        <Row>
                        <Col>
                            
                            </Col>
                            {this.mapHighUS()}
                        </Row>
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



export default connect(mapStateToProps, { fetchAdminUS, deleteHighUS, statusHighUS }) (AdminMain);
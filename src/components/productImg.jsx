import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductImg extends Component {
    constructor(props){
        super(props);
        this.state ={
            selectedFile: [],
            isSelected: false,
            product_id: ''
        };
    }

    


     imgChange = (event) => {
        this.setState({
            selectedFile: event.target.files,
            isSelected: true
        });
       console.log("image file", this.selectedFile)
	};

     handleSubmission = (event) => {
        event.preventDefault();
       
        console.log('imgchange',this.selectedFile[0])
        const formData = new FormData();
        formData.append("img", this.selectedFile[0]);


        
        var config = {
            method: 'put',
            url: `http://localhost:5000/api/product/uploadmulter/${this.product._id}`, 
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
        window.location = '/patronMain';
	};

    logOut = () => {
        localStorage.removeItem('token');
        window.location = '/';
    };

    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmission} encType='multipart/form-data'>
            <input type="file" name="img" onChange={this.imgChange} />
            {this.isSelected ? ( 
                <div className="loginText">
                    <p>Filename: {this.selectedFile[0].name}</p>
                    <p>Filetype: {this.selectedFile[0].type}</p>
                    <p>Size in bytes: {this.selectedFile[0].size}</p>
                </div>
            ) : (
            <p className="loginText">Select a file to show details</p>
            )}
            <div className="loginText">
            <button className="btn btn-success btn-md" type="submit">Submit</button>
            </div>  
            </form>                                   
    </div>
        )
    }

}
const mapStateToProps = state => ({
    selectedFile: state.selectedFile.items
});

export default connect(mapStateToProps) (ProductImg);
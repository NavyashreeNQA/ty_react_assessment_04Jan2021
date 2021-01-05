import React from "react";
import { Component } from "react";
import { Button } from 'react-bootstrap';
import './AddEmp.css';


export default class AddEmp extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            password: '',
            phone:''
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}

handleFormSubmit(e) {
     e.preventDefault()
   localStorage.setItem('document',JSON.stringify(this.state));
}
 
// React Life Cycle
// componentDidMount() {
//     this.documentData = JSON.parse(localStorage.getItem('document'));
 
//     if (localStorage.getItem('document')) {
//         this.setState({
//            name: this.documentData.name,
//            email: this.documentData.email,
//            password: this.documentData.password,
//            phone:this.documentData.phone
//     })
// } else {
//     this.setState({
//         name: '',
//         email: '',
//         password: '',
//         phone:''
//     })
// }
// }


    render(){
    return (

        <div className="col-md-4 offset-4 card card-body mt-5">

            <form onSubmit={this.handleFormSubmit} className="cd">


                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" placeholder="Enter your name" value={this.state.name} onChange={this.handleChange} required />
                </div>


                <div className="form-group">
                    <label>Email Id</label>
                    <input type="email" className="form-control" name="email" placeholder="Enter your email-id" value={this.state.email} onChange={this.handleChange} required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Enter your password" value={this.state.password} onChange={this.handleChange} required />
                </div>

                <div className="form-group">
                    <label>Contact Number</label>
                    <input type="number" className="form-control" name="phone" placeholder="Enter your contact number" value={this.state.phone} onChange={this.handleChange} required />
                </div>

                <div>
                    <Button variant="outline-primary" type="submit" className="mr-3" >Add</Button>
                    <Button variant="btn" type="reset" type="submit">Cancel</Button>
                </div>

            </form>
            
        </div>
    )
}
}

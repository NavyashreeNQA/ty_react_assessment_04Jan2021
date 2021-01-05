import React from 'react';
import { Component } from 'react';
import Table from 'react-bootstrap/Table';

import Button from 'react-bootstrap/Button'

class Emplist extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            documentData:[]
        }

    }

    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('document'));

        if (localStorage.getItem('document')) {
            this.setState({
                name: this.documentData.name,
                email: this.documentData.email,
                phone: this.documentData.phone
            })
        } else {
            this.setState({
                name: '',
                email: '',
                phone: ''
            })
        }
    }




    render() {

        return (

            <div className="container">


                <h2>List of Employees</h2>
                <br />

                {
                    this.state.documentData.map((document) => (
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    {/* <th>SL NO</th> */}
                                    <th>Employee Name</th>
                                    <th>Email</th>
                                    <th>Contact Number</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <td>
                                        {documentData.}
                                    </td> */}
                                    <td>
                                        {document.name}
                                    </td>
                                    <td>
                                        {document.email}
                                    </td>
                                    <td>
                                        {document.password}
                                    </td>
                                    <td>
                                        {document.phone}
                                        <Button variant="success" >Update</Button>
                                        <Button variant="danger" >Delete</Button>

                                    </td>
                                </tr>

                            </tbody>


                        </Table>

                    ))
                }


            </div>
        );
    }
}

export default Emplist;

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import AddEmp from './AddEmp';
// import './navi.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Emplist from './Emplist';


class Emphome extends React.Component {
    
    


    render() {
        return (
        
            <div>
                
                   
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand>Employee Management System</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/employee">Add Employee</Nav.Link>
                                
                                <Nav.Link href="/employees">View Employee Info</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores assumenda officiis, consectetur mollitia est cupiditate recusandae in, rerum magnam adipisci quaerat, totam voluptatum amet. Quod sed provident atque explicabo et?</p>

                
                <div>
                 <Router>
                    <Route path='/employee' component={AddEmp} />
                    <Route path='/employees' component={Emplist} />
             </Router> 
             
             </div>
             </div>
             
        );
    }
}
export default Emphome;



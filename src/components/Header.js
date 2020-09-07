import React, { Component }  from 'react';
import { Nav,Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1><img src="/assets/images/logo.png"  alt="mealBite Logo" /> MealBite</h1>
                                <h2>have a Sensational taste!</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/pizalist">
                                    Pizza
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/pielist">
                                    Pies
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <span className="navbar-text ml-auto">
                            <Button outline className="btn-theme text-white" onClick={this.toggleModal}>
                                <i className="fa fa-shopping-basket fa-lg" /> Order
                            </Button>
                        </span>
                    </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>My Order</ModalHeader>
                    <ModalBody>
                        
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;
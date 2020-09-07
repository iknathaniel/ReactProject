import React from 'react';
import { Nav,Navbar, NavItem, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-8">
                        <Navbar dark expand="md">
                            <div className="container">
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
                            </div>
                        </Navbar>
                    </div>
                    <div className="col-4 col-sm-3 text-center">
                        <div className="container">
                            <div className="row p-2">
                                <div className="col-12">
                                    <img src="/assets/images/logo.png"  alt="mealBite Logo" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <a href="http://instagram.com/" target="_blank"><i className="fa fa-instagram" /></a>{' '}
                                    <a href="http://www.facebook.com/" target="_blank"><i className="fa fa-facebook" /></a>{' '}
                                    <a href="http://twitter.com/" target="_blank"><i className="fa fa-twitter" /></a>{' '}
                                    <a href="http://youtube.com/" target="_blank"><i className="fa fa-youtube" /></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
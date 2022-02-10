import React from "react";
import { Nav, Navbar, NavbarBrand, NavLink, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export default function Navibar() {
    return(
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <NavbarBrand className="ms-2">Test</NavbarBrand>
            <NavbarToggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink><Link to='/'>Home</Link></NavLink>
                    <NavLink><Link to='/users'>User</Link></NavLink>
                    <NavLink><Link to='/about'>About</Link></NavLink>
                </Nav>
                <Nav>
                    <Button variant="primary" className="me-2">Log in</Button>
                    <Button variant="primary" className="me-2">Sign out</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
)}
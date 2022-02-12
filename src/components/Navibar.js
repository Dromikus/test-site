import React from "react";
import { Nav, Navbar, NavLink, Button, Container, ButtonGroup } from "react-bootstrap";
import { Link } from 'react-router-dom'

export default function Navibar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Survival book</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink><Link className="link-light" to='/'>Home</Link></NavLink>
                            <NavLink><Link className="link-light" to='/users'>Users</Link></NavLink>
                            <NavLink><Link className="link-light" to='/about'>About</Link></NavLink>
                        </Nav>
                        <Nav>
                            <ButtonGroup aria-label="Basic example" className="my-2">
                                <Button variant="light" onClick={handleClick}>Log in</Button>
                                <Button variant="light">Sign out</Button>
                            </ButtonGroup>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

const handleClick = () => {
    console.log('Click')
};
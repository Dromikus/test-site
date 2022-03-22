import React from "react";
import { Nav, Navbar, NavLink, Container} from "react-bootstrap";
import { Link } from 'react-router-dom'
import '../style/ComponentStyle.css';

export default function Navibar() {
    return (
        <>
            <Navbar className="shadow myNavbar" fixed="top" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end"> 
                        <Nav>
                            <NavLink><Link className="link-dark myLink" to='/'>Главная</Link></NavLink>
                            <NavLink><Link className="link-dark myLink" to='/'>Энциклопедия</Link></NavLink>
                            <NavLink><Link className="link-dark myLink" to='/'>Публикации</Link></NavLink>
                            <NavLink><Link className="link-dark myLink" to='/'>Форум</Link></NavLink>
                            <NavLink><Link className="link-dark myLink" to='/users'>Профиль</Link></NavLink>
                            <NavLink><Link className="link-dark myLink" to='/about'>О нас</Link></NavLink>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    )
}
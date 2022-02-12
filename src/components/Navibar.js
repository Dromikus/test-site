import React from "react";
import { Nav, Navbar, NavLink, Container} from "react-bootstrap";
import { Link } from 'react-router-dom'
import '../style/ComponentStyle.css';

export default function Navibar() {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end"> 
                        <Nav>
                            <NavLink><Link className="link-dark myLink" to='/'>Главная</Link></NavLink>
                            <NavLink><Link className="link-dark" style={{ textDecoration: 'none' }} to='/'>Энциклопедия</Link></NavLink>
                            <NavLink><Link className="link-dark" style={{ textDecoration: 'none' }} to='/'>Публикации</Link></NavLink>
                            <NavLink><Link className="link-dark" style={{ textDecoration: 'none' }} to='/'>Форум</Link></NavLink>
                            <NavLink><Link className="link-dark" style={{ textDecoration: 'none' }} to='/users'>Профиль</Link></NavLink>
                            <NavLink><Link className="link-dark" style={{ textDecoration: 'none' }} to='/about'>О нас</Link></NavLink>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    )
}
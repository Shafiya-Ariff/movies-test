import React from 'react';
import { Navbar } from 'react-bootstrap';

export const Navigation = () => {
    return (
        <div>
            <Navbar  style={{ backgroundColor: "black"}} expand="lg">
                <Navbar.Brand href="/" style={{ fontWeight: "bold", color: "white" }}>Movie Test</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;

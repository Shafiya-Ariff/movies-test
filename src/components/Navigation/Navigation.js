import React from 'react';
import { Navbar } from 'react-bootstrap';

export const Navigation = () => {
    return (
        <div>
            <Navbar  style={{ backgroundColor: "black"}} expand="lg">
                <Navbar.Brand href="/" style={{ fontWeight: "bold", color: "white" }}>Movie Test</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <Nav className="ml-auto">
                            <Fragment>
                                <Nav.Link href="/dashboard" style={{ fontWeight: "bold" }}>Adopt</Nav.Link>
                                <Nav.Link href="/wishlist" style={{ fontWeight: "bold" }}>Wishlist</Nav.Link>
                                <Nav.Link href="/login" style={{ fontWeight: "bold" }}>Donate</Nav.Link>
                            </Fragment>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;

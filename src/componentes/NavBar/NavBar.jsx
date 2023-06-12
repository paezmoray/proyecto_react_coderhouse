import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">MILU Tienda</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Mujer</Nav.Link>
                        <Nav.Link href="#pricing">Hombre</Nav.Link>
                        <NavDropdown title="OUTLET" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Mujer</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Hombre</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Niñeces</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Con detalles</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Contactanos</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Iniciar sesión
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar




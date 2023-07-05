import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={"/"} href="#home">
                    Milu Tienda
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to={"/categoria/MUJER"} href="#features">Mujer</Nav.Link>
                        <Nav.Link as={NavLink} to={"/categoria/HOMBRE"} href="#pricing">Hombre</Nav.Link>
                        <Nav.Link as={NavLink} to={"/categoria/NENES"} href="#pricing">Niñeces</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to={"/*"} href="#deets">Contactanos</Nav.Link>
                        <Nav.Link as={NavLink} to={"/*"} eventKey={2} href="#memes">
                            Iniciar sesión
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar




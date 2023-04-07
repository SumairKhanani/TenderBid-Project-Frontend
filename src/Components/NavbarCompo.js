import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,NavLink,Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

//import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



function NavbarCompo() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} className="mb-3">
          <Container fluid>
            <NavLink className="navbar-brand" href="#" > <p class="text-warning">TenderBid</p>
                      </NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link >
        <Link to= {"/"}>
        Home
        </Link>
        </Nav.Link>
        <Nav.Link >
        <Link to= {"/signin"}>
        Login
        </Link>
        </Nav.Link>
        <Nav.Link >
        <Link to= {"/register"}>
        Signup
        </Link>
        </Nav.Link>
                 
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
      ))}
    <Outlet/>
    </>
  );
}



export default NavbarCompo;




/*<Navbar bg="light" expand="lg">
<Container>
  <Navbar.Brand href="#home">TenderBid</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link >
        <Link to= {"/"}>
        Home
        </Link>
        </Nav.Link>
        <Nav.Link >
        <Link to= {"/signin"}>
        Login
        </Link>
        </Nav.Link>
        <Nav.Link >
        <Link to= {"/register"}>
        Signup
        </Link>
        </Nav.Link>

     </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>
<Outlet/>
</>
);
}*/
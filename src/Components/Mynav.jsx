import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-4 fixed-top" >
      <Container fluid>
        <Navbar.Brand href="#" className='ms-5 fw-bold text-danger'>Computer Guru Institute</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Home" className='active'>Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Courses">Courses</Nav.Link>
            {/* <Nav.Link href="#action2">Gallery</Nav.Link> */}
            <Nav.Link href="/Contact">Contact</Nav.Link>
            
          </Nav>
          <Button variant="warning" className='px-5 me-5'>Enquire Now</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
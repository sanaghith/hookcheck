import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function navigate() {
  return (
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home">Sanfilm</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">films</Nav.Link>
        <Nav.Link href="#features">séries</Nav.Link>
        <Nav.Link href="#pricing">catégories</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default navigate
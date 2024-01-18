import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card'; // Add this import
import ListGroup from 'react-bootstrap/ListGroup'; // Add this import

function App() {
  return (
    <>
      <div className="App">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div>
        <h1>REACT BOOTSTRAP CHECKPOINT</h1>
      </div>

      <div className='card'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.allrecipes.com/thmb/9UTj7kZBJDqory0cdEv_bw6Ef_0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-2x1-BG-2976-d5926c9253d3486bbb8a985172604291.jpg" width={"200px"} height={"200px"}/>
          <Card.Body>
            <Card.Title>PEPPERONI PIZZA</Card.Title>
            <Card.Text>
            With basic ingredients, it's easy to make homemade pizza dough and sauce. The recipe makes two ..
            </Card.Text>
          </Card.Body>
          
          <Card.Body>
            <Card.Link href="#">BUY NOW</Card.Link>
            <Card.Link href="#">SHOPPING</Card.Link>
          </Card.Body>
        </Card>
      </div>




      
    </>
  );
}

export default App;

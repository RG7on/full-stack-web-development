import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import './App.css';
import CustomerAdd from './Components/CustomerAdd';
import CustomerList from './Components/CustomerList';
import customerImage from './Components/d1a3516c-acf1-4857-8e38-881183994224.png';

function Home() {
  return (
    <Row className="justify-content-center">
      <Col md={8} className="text-center">
        <h1 className="mb-4">Welcome to Customer Management</h1>
        <img src={customerImage} alt="Customer Management" className="img-fluid" style={{maxWidth: '500px'}} />
      </Col>
    </Row>
  );
}

function App() {
  return (
    <Router>
      <Container fluid>
        <Navbar color="light" light expand="md" className="mb-4">
          <Container>
            <NavbarBrand tag={Link} to="/">Customer Management</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/add">Add Customer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/list">Customer List</NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          <Routes>
            <Route path="/add" element={<CustomerAdd />} />
            <Route path="/list" element={<CustomerList />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Container>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import CustomerAdd from './Components/CustomerAdd';
import CustomerList from './Components/CustomerList';
import customerImage from './Components/d1a3516c-acf1-4857-8e38-881183994224.png';

function Home() {
  return (
    <div className="text-center">
      <h1 className="mb-4">Welcome to Customer Management</h1>
      <img src={customerImage} alt="Customer Management" className="img-fluid" style={{maxWidth: '500px'}} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">Add Customer</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">Customer List</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/add" element={<CustomerAdd />} />
          <Route path="/list" element={<CustomerList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

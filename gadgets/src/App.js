import React from 'react';
import './App.css';
import GadgetManager from './components/gadgets';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Gadget Store</span>
        </div>
      </nav>
      <div className="container mt-4">
        <GadgetManager />
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

const initialGadgets = [
  { name: "Smartphone", price: 999.99 },
  { name: "Laptop", price: 1399.99 },
  { name: "Smartwatch", price: 349.99 },
  { name: "Wireless Earbuds", price: 279.99 },
  { name: "Tablet", price: 1099.99 }
];

const GadgetManager = () => {
  const [gadgets, setGadgets] = useState(initialGadgets);
  const [newGadget, setNewGadget] = useState({ name: '', price: '' });

  const addGadget = (e) => {
    e.preventDefault();
    if (newGadget.name && newGadget.price) {
      setGadgets([...gadgets, { ...newGadget, price: parseFloat(newGadget.price) }]);
      setNewGadget({ name: '', price: '' });
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Gadgets</h2>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {gadgets.map((gadget, index) => (
            <tr key={index}>
              <td>{gadget.name}</td>
              <td>${gadget.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="mt-5 mb-3">Add New Gadget</h3>
      <form onSubmit={addGadget} className="mb-5">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Gadget Name"
            value={newGadget.name}
            onChange={(e) => setNewGadget({ ...newGadget, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            step="0.01"
            placeholder="Price"
            value={newGadget.price}
            onChange={(e) => setNewGadget({ ...newGadget, price: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Gadget</button>
      </form>
    </div>
  );
};

export default GadgetManager;
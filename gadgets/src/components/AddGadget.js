import React, { useState } from 'react'
import gadgets from './gadgets';
import GadgetList from './GadgetList'

function AddGadget() {
  const [items, setItems] = useState(gadgets);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && price) {
      const newGadget = {
        id: items.length + 1,
        name: name,
        price: parseFloat(price)
      };
      setItems([...items, newGadget]);
      setName('');
      setPrice('');
    }
  };

  return (
    <div className="container w-50 mt-5">
  <h3 className="text-center mb-4">Product Registration</h3>
  <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
    <div className="mb-3">
      <label htmlFor="pname" className="form-label">Name</label>
      <input
        id="pname"
        type="text"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="pprice" className="form-label">Price</label>
      <input
        id="pprice"
        type="number"
        className="form-control"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
    <div className="text-center">
      <button type="submit" className="btn btn-primary">Add Gadget</button>
    </div>
  </form>

  <br></br><br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
     <GadgetList items={items} />
  </div>
</div>

  );
}

export default AddGadget

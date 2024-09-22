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
    <div className="container w-50">
      <h3>Product Registration</h3>
      <form onSubmit={handleSubmit}>
        <div className="m-1 p-1 bg-light">
          <label htmlFor="pname">Name</label>
          <input
            id="pname"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="m-1 p-1 bg-light">
          <label htmlFor="pprice">Price</label>
          <input
            id="pprice"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="m-1 p-1 bg-light">
          <button type="submit">Add Gadget</button>
        </div>
      </form>
      <div>
        <GadgetList items={items} />
      </div>
    </div>
  );
}

export default AddGadget

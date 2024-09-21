import React from 'react'


function AddGadget() {
  
  
  return (
    <div className="container w-50">
      <h3>Product Registration</h3>
      <div className="m-1 p-1 bg-light">
        <label htmlFor="pname">Name</label>
        <input id="pname" type="text"  />
      </div>

      <div className="m-1 p-1 bg-light">
        <label htmlFor="pprice">Price</label>
        <input id="pprice" type="number"/>
      </div>
      <div className="m-1 p-1 bg-light">
        <button type="button" >Add Gadgets</button>
      </div>
      
    </div>
  );
}

export default AddGadget

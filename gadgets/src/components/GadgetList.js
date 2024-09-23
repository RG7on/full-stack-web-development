import React from 'react'

export default function GadgetList({items }) { 

  return (
      <div style={{width:"100%"}}>
          <h3>List of Electronic Gadgets</h3>
      <div className="mt-5">
  <h4 className="text-center mb-4">Gadget List</h4>
  <div className="table-responsive">
    <table className="table table-striped table-hover bg-white rounded shadow">
      <thead className="table-light">
        <tr>
          <th>Name</th>        
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>${item.price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

      {}
    </div>
  );
}

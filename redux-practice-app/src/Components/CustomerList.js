import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCustomer } from "../store/customerSlice";

function CustomerList() {
  const customers = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeCustomer(id));
  };

  return (
    <div className="container w-50">
      <h3>Customer List</h3>

      <table className="table table-striped table-warning">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemove(customer.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerList;
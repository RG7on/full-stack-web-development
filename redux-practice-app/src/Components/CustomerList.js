import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCustomer, updateCustomer } from "../store/customerSlice";

function CustomerList() {
  const customers = useSelector((state) => state.customers.customers);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPassword, setEditPassword] = useState("");

  const handleRemove = (id) => {
    dispatch(removeCustomer(id));
  };

  const handleUpdate = (id) => {
    if (editingId === id) {
      const updatedCustomer = { id, name: editName, email: editEmail };
      if (editPassword) {
        updatedCustomer.password = editPassword;
      }
      dispatch(updateCustomer(updatedCustomer));
      setEditingId(null);
      setEditPassword("");
    } else {
      const customer = customers.find(c => c.id === id);
      setEditName(customer.name);
      setEditEmail(customer.email);
      setEditPassword("");
      setEditingId(id);
    }
  };

  return (
    <div className="container">
      <h3 className="text-center mb-4">Customer List</h3>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>
                  {editingId === customer.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="form-control"
                    />
                  ) : (
                    customer.name
                  )}
                </td>
                <td>
                  {editingId === customer.id ? (
                    <input
                      type="email"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                      className="form-control"
                    />
                  ) : (
                    customer.email
                  )}
                </td>
                <td>
                  {editingId === customer.id ? (
                    <input
                      type="password"
                      value={editPassword}
                      onChange={(e) => setEditPassword(e.target.value)}
                      className="form-control"
                      placeholder="Leave blank to keep current password"
                    />
                  ) : (
                    "********"
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleUpdate(customer.id)}
                  >
                    {editingId === customer.id ? "Save" : "Update"}
                  </button>
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
      {customers.length === 0 && (
        <p className="text-center text-muted">No customers found.</p>
      )}
    </div>
  );
}

export default CustomerList;
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCustomer, updateCustomer } from "../store/customerSlice";
import { Container, Table, Button, Input, Alert } from 'reactstrap';

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
    <Container>
      <h3 className="text-center mb-4">Customer List</h3>
      {customers.length === 0 ? (
        <Alert color="info" className="text-center">
          No customers found.
        </Alert>
      ) : (
        <Table responsive striped hover>
          <thead>
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
                    <Input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                    />
                  ) : (
                    customer.name
                  )}
                </td>
                <td>
                  {editingId === customer.id ? (
                    <Input
                      type="email"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                    />
                  ) : (
                    customer.email
                  )}
                </td>
                <td>
                  {editingId === customer.id ? (
                    <Input
                      type="password"
                      value={editPassword}
                      onChange={(e) => setEditPassword(e.target.value)}
                      placeholder="Leave blank to keep current password"
                    />
                  ) : (
                    "********"
                  )}
                </td>
                <td>
                  <Button
                    color="primary"
                    size="sm"
                    className="me-2"
                    onClick={() => handleUpdate(customer.id)}
                  >
                    {editingId === customer.id ? "Save" : "Update"}
                  </Button>
                  <Button
                    color="danger"
                    size="sm"
                    onClick={() => handleRemove(customer.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default CustomerList;

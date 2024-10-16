import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../store/customerSlice";

function CustomerAdd() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.customers);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = Math.max(...customers.map(c => c.id), 0) + 1;
    dispatch(addCustomer({ id: newId, name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h3 className="text-center mb-4">Add New Customer</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Customer Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Customer Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Customer Password"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Register Customer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CustomerAdd;

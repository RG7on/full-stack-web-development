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
    <div className="container w-50">
      <h3>Add New Customer</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Customer Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Customer Email"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Customer Password"
            required
          />
        </div>

        <button type="submit">Register Customer</button>
      </form>
    </div>
  );
}

export default CustomerAdd;

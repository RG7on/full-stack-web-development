import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "../store/customerSlice";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

function CustomerAdd() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.customers);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = Math.max(...customers.map(c => c.id), 0) + 1;
    dispatch(addCustomer({ id: newId, name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
    setMessage({ type: 'success', text: 'Customer added successfully!' });
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h3 className="text-center mb-4">Add New Customer</h3>
          {message && (
            <Alert color={message.type}>
              {message.text}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Customer Name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Customer Email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Customer Password"
                required
              />
            </FormGroup>
            <Button color="primary" block>Register Customer</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomerAdd;

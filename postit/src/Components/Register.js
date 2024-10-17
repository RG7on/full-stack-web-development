import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
  Table,
} from "reactstrap";

import { useSelector, useDispatch } from "react-redux"
import { addUser, deleteUser, updateUser } from "../Features/UserSlice";

const Register = () => {
  const userList = useSelector((state) => state.users)
  const dispatch = useDispatch()
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!editingUser) {
      if (!formData.password) formErrors.password = "Password is required";
      if (formData.password !== formData.confirmPassword) formErrors.confirmPassword = "Passwords must match";
    } else {
      if (formData.password && formData.password !== formData.confirmPassword) {
        formErrors.confirmPassword = "Passwords must match";
      }
    }
    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    
    if (validateForm()) {
      if (editingUser) {
        const updatedUser = { 
          id: editingUser.id, 
          name: formData.name, 
          email: formData.email 
        };
        if (formData.password) {
          updatedUser.password = formData.password;
        }
        console.log("Updating user:", updatedUser);
        dispatch(updateUser(updatedUser));
        setEditingUser(null);
      } else {
        console.log("Adding new user:", formData);
        dispatch(addUser(formData));
      }
      alert(editingUser ? "User updated successfully!" : "User registered successfully!");
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    } else {
      console.log("Form validation failed. Errors:", errors);
    }
  };

  const handleUpdate = (user) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      password: '',
      confirmPassword: ''
    });
  };

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(userId));
    }
  };

  return (
    <Container fluid>
      <Row className="formrow">
        <Col className="columndiv1" lg="6">
          <Form className="div-form" onSubmit={handleSubmit}>
            <div className="appTitle">
              <h2>{editingUser ? "Update User" : "Register"}</h2>
            </div>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name..."
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email..."
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </FormGroup>
            <FormGroup>
              <Label for="password">{editingUser ? "New Password (optional)" : "Password"}</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder={editingUser ? "Enter new password (optional)" : "Enter your password..."}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </FormGroup>
            <FormGroup>
              <Label for="confirmPassword">{editingUser ? "Confirm New Password" : "Confirm Password"}</Label>
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder={editingUser ? "Confirm new password" : "Confirm your password..."}
              />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </FormGroup>
            <Button color="primary" type="submit">
              {editingUser ? "Update" : "Register"}
            </Button>
            {editingUser && (
              <Button color="secondary" onClick={() => {
                setEditingUser(null);
                setFormData({ name: '', email: '', password: '', confirmPassword: '' });
              }}>
                Cancel
              </Button>
            )}
          </Form>
        </Col>
        <Col className="columndiv2" lg="6">
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h3>List of Users</h3>
          <Table bordered>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <Button color="info" size="sm" onClick={() => handleUpdate(user)} className="mr-2">
                      Update
                    </Button>
                    <Button color="danger" size="sm" onClick={() => handleDelete(user.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

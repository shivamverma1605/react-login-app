import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './common/Form';

const Login = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // This function now correctly updates the state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    const { username, password } = formData;

    // --- Username Validation ---
    if (!username) {
      newErrors.username = 'Username is required.';
    } else if (!/^[A-Za-z0-9@._-]+$/.test(username)) {
      newErrors.username = 'Invalid username format.';
    }

    // --- Password Validation ---
    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (!/^[A-Za-z0-9@._-]+$/.test(password)) {
      newErrors.password = 'Invalid password format.';
    } else if (username && password === username) {
      newErrors.password = 'Password cannot be the same as the username.';
    }
    
    setErrors(newErrors);
    // Return true if there are no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Login successful!');

    }
  };

  const fields = [
    { name: 'username', label: 'USERNAME', type: 'text' },
    { name: 'password', label: 'NEW PASSWORD', type: 'password' },
  ];

  return (
    <Form
      title="Login"
      subtitle="Sign in to continue"
      fields={fields}
      formData={formData}
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      buttonText="LOGIN"
      footer={
        <p>Don't have an Account? <Link to="/signup">SignUp</Link></p>
      }
    />
  );
};

export default Login;

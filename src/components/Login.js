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
    if (!formData.username) {
      newErrors.username = 'Username is required.';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password === formData.username) {
      newErrors.password = 'Password should not be the same as username.';
    }
    setErrors(newErrors);
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

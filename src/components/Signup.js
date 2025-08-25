import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './common/Form';

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    // Name: Only Alphabets
    if (!/^[A-Za-z\s]+$/.test(formData.name)) newErrors.name = 'Name must only contain alphabets.';
    // User-Name: Alphanumeric with special characters
    if (!/^[A-Za-z0-9@._-]+$/.test(formData.username)) newErrors.username = 'Invalid username format.';
    // Email: Google email format
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) newErrors.email = 'Must be a valid Gmail address.';
    // Phone: Country code and number
    if (!/^\+\d{1,3}\s?\d{7,14}$/.test(formData.phone)) newErrors.phone = 'Phone must include a country code.';
    // Password: Not same as username
    if (formData.password === formData.username) newErrors.password = 'Password cannot be the same as username.';
    // Confirm Password: Must match
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Sign-up successful!');
      navigate('/');
    }
  };

  const fields = [
    { name: 'name', label: 'NAME', type: 'text' },
    { name: 'username', label: 'USERNAME', type: 'text' },
    { name: 'email', label: 'EMAIL', type: 'email' },
    { name: 'phone', label: 'PHONE NO.', type: 'text' },
    { name: 'password', label: 'NEW PASSWORD', type: 'password' },
    { name: 'confirmPassword', label: 'CONFIRM NEW PASSWORD', type: 'password' },
  ];

  return (
    <Form
      title="Create new Account"
      fields={fields}
      formData={formData}
      errors={errors}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      buttonText="SIGN UP"
      isGrid={true} // Enable the grid layout for the signup form
    />
  );
};

export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './common/Form';

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

 const validate = () => {
    const newErrors = {};

    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name must only contain alphabets and spaces.';
    }

    // b. User-Name: Combination of alphanumeric values with special characters.
    // Assuming a standard set of special characters for usernames.
    if (!/^[A-Za-z0-9@._-]+$/.test(formData.username)) {
      newErrors.username = 'Username can only contain letters, numbers, and the special characters @ . _ -';
    }

    // c. Password: Same as user-name, but username and password should not be same.
    if (!/^[A-Za-z0-9@._-]+$/.test(formData.password)) {
      newErrors.password = 'Password can only contain letters, numbers, and the special characters @ . _ -';
    } else if (formData.password && formData.password === formData.username) {
      newErrors.password = 'Password cannot be the same as the username.';
    }

    // d. Confirm: Password must be same as Password.
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    // e. Email: Same as Google email.
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid Gmail address (e.g., example@gmail.com).';
    }

    // f. Phone: Country code and phone number will be allowed only.
    if (!/^\+\d{1,3}\s?\d{7,14}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be in the format +[code] [number] (e.g., +1 1234567890).';
    }

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

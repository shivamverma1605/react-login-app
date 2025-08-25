import React, { useState } from 'react';
import EyeIcon from './EyeIcon';

const Input = ({ label, name, type, value, onChange, error }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="input-wrapper">
        <input
          type={inputType}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
        {type === 'password' && (
          <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
            <EyeIcon />
          </span>
        )}
      </div>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default Input;

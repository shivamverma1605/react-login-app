import React from 'react';
import Input from './Input';

const Form = ({
  title,
  subtitle,
  fields,
  formData,
  errors,
  handleChange,
  handleSubmit,
  buttonText,
  footer,
  isGrid = false // Prop to control grid layout
}) => {
  return (
    <div className="form-container">
      <div className="form-header">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <form onSubmit={handleSubmit} noValidate className="form-body">
        <div className={isGrid ? 'form-grid' : ''}>
          {fields.map((field) => (
            <Input
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              value={formData[field.name] || ''}
              onChange={handleChange}
              error={errors[field.name]}
            />
          ))}
        </div>
        <button type="submit" className={`form-button ${isGrid ? 'signup-button' : ''}`}>
          {buttonText}
        </button>
        {footer && <div className="form-footer">{footer}</div>}
      </form>
    </div>
  );
};

export default Form;

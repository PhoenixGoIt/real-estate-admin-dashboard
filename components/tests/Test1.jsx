'use client'
import React, { useState } from 'react';

function Test1() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let validationErrors = {};
    
    // Username validation
    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      validationErrors.username = "Username must be at least 3 characters long";
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }
    
    // Password validation
    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }
    
    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }
    
    console.log(validationErrors)

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Отправляем данные на сервер
      // console.log('Form submitted', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="username" 
        placeholder="Username" 
        value={formData.username} 
        onChange={handleChange} 
      />
      {errors.username && <span>{errors.username}</span>}

      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email} 
        onChange={handleChange} 
      />
      {errors.email && <span>{errors.email}</span>}

      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        value={formData.password} 
        onChange={handleChange} 
      />
      {errors.password && <span>{errors.password}</span>}

      <input 
        type="password" 
        name="confirmPassword" 
        placeholder="Confirm Password" 
        value={formData.confirmPassword} 
        onChange={handleChange} 
      />
      {errors.confirmPassword && <span>{errors.confirmPassword}</span>}

      <button type="submit">Register</button>
    </form>
  );
}

export default Test1;

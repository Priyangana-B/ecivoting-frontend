import React, { useState, useEffect } from 'react';

const VoterRegistration = ({ onComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    voterId: '',
    email: '',
    phone: '',
    captcha: ''
  });
  const [currentCaptcha, setCurrentCaptcha] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCurrentCaptcha(captcha);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.voterId.trim()) {
      newErrors.voterId = 'Voter ID is required';
    } else if (/[^A-Za-z0-9]/g.test(formData.voterId.toUpperCase())) {
      newErrors.voterId = 'Invalid Voter ID format (e.g., EPIC...)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.captcha.trim()) {
      newErrors.captcha = 'Captcha is required';
    } else if (formData.captcha.toUpperCase() !== currentCaptcha) {
      newErrors.captcha = 'Captcha does not match';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length === 0) {
      const voterData = {
        ...formData,
        voterId: formData.voterId.toUpperCase()
      };
      onComplete(voterData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="voting-container">
      <div className="header">
        <h1>Voter Registration</h1>
        <p>Please fill in your details to proceed with voting</p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
          {errors.name && <div className="error" style={{ display: 'block' }}>{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="voterId">Voter ID:</label>
          <input
            type="text"
            id="voterId"
            name="voterId"
            value={formData.voterId}
            onChange={handleInputChange}
            placeholder="e.g., EPIC0257663"
          />
          {errors.voterId && <div className="error" style={{ display: 'block' }}>{errors.voterId}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
          {errors.email && <div className="error" style={{ display: 'block' }}>{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter 10-digit phone number"
          />
          {errors.phone && <div className="error" style={{ display: 'block' }}>{errors.phone}</div>}
        </div>

        <div className="form-group">
          <label>Security Verification:</label>
          <div className="captcha-container">
            <div className="captcha-box" id="captchaBox">{currentCaptcha}</div>
            <button 
              type="button" 
              className="refresh-btn" 
              onClick={generateCaptcha}
            >
              🔄 Refresh
            </button>
          </div>
          <input
            type="text"
            name="captcha"
            value={formData.captcha}
            onChange={handleInputChange}
            placeholder="Enter captcha"
            className="captcha-input"
          />
          {errors.captcha && <div className="error" style={{ display: 'block' }}>{errors.captcha}</div>}
        </div>

        <button type="submit" className="submit-btn">
          Proceed to Location Selection
        </button>
      </form>

      <div className="terms">
        By proceeding, you agree to the terms and conditions of the electronic voting system.
      </div>
    </div>
  );
};

export default VoterRegistration;
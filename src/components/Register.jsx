import React, { useState, useEffect } from 'react';
import '../assets/css/register.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    relationName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    aadhaar: '',
    mobile: '',
    email: '',
    captchaInput: '',
    declaration: false
  });

  const [currentCaptcha, setCurrentCaptcha] = useState('');
  const [fieldStates, setFieldStates] = useState({});
  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    message: ''
  });
  const [voterId, setVoterId] = useState('');

  const states = [
    'Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam',
    'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir',
    'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh',
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
    'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  // Generate CAPTCHA
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCurrentCaptcha(captcha);
    setFormData(prev => ({ ...prev, captchaInput: '' }));
  };

  // Initialize CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Generate Unique Voter ID
  const generateVoterId = () => {
    const code = "EPIC";
    const year = new Date().getFullYear();
    const randomPart = Math.floor(100000 + Math.random() * 900000); // 6-digit random number
    return code + year + randomPart;
  };

  // Backend call
  let registration = async (generatedId) => {
    try {
      let res = await axios.post('http://localhost:3000/api/voters', { ...formData, voterId: generatedId });
      console.log(res.data);
    } catch (error) {
      console.log(`Error in registration: ${error}`);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Real-time validation for specific fields
    if (name === 'mobile') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({ ...prev, mobile: numericValue }));
      setFieldState(name, numericValue.length === 10 ? 'success' : numericValue.length > 0 ? 'error' : '');
    } else if (name === 'pincode') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({ ...prev, pincode: numericValue }));
      setFieldState(name, numericValue.length === 6 ? 'success' : numericValue.length > 0 ? 'error' : '');
    } else if (name === 'aadhaar') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({ ...prev, aadhaar: numericValue }));
      setFieldState(name, numericValue.length === 12 ? 'success' : numericValue.length > 0 ? 'error' : '');
    } else if (name === 'email' && value) {
      const isValid = validateEmail(value);
      setFieldState(name, isValid ? 'success' : 'error');
    } else if (name === 'dob' && value) {
      const isValid = validateAge(value);
      setFieldState(name, isValid ? 'success' : 'error');
    }
  };

  // Set field state
  const setFieldState = (fieldName, state) => {
    setFieldStates(prev => ({
      ...prev,
      [fieldName]: state
    }));
  };

  // Validation functions
  const validateEmail = (email) => {
    if (!email) return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1 >= 18;
    }
    return age >= 18;
  };

  const validateCaptcha = () => {
    return formData.captchaInput.trim() === currentCaptcha;
  };

  // Show modal
  const showModal = (title, message) => {
    setModal({
      isOpen: true,
      title,
      message
    });
  };

  // Hide modal
  const hideModal = () => {
    setModal({
      isOpen: false,
      title: '',
      message: ''
    });
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset all field states
    setFieldStates({});

    // Validate CAPTCHA first
    if (!validateCaptcha()) {
      setFieldState('captchaInput', 'error');
      showModal('CAPTCHA Error', 'The CAPTCHA code you entered is incorrect. Please try again.');
      generateCaptcha();
      return;
    }
    setFieldState('captchaInput', 'success');

    // Check declaration
    if (!formData.declaration) {
      showModal('Declaration Required', 'Please accept the declaration before submitting.');
      return;
    }

    // Validate required fields
    const requiredFields = [
      { name: 'fullName', label: 'Full Name' },
      { name: 'dob', label: 'Date of Birth' },
      { name: 'relationName', label: "Father's/Mother's/Husband's Name" },
      { name: 'addressLine1', label: 'Address Line 1' },
      { name: 'city', label: 'City/Town' },
      { name: 'state', label: 'State' },
      { name: 'pincode', label: 'Pincode' },
      { name: 'mobile', label: 'Mobile Number' }
    ];

    let hasEmptyFields = false;

    requiredFields.forEach(field => {
      if (!formData[field.name].trim()) {
        hasEmptyFields = true;
        setFieldState(field.name, 'error');
      } else {
        setFieldState(field.name, 'success');
      }
    });

    // Check gender
    if (!formData.gender) {
      hasEmptyFields = true;
      showModal('Missing Information', 'Please select your gender.');
      return;
    }

    if (hasEmptyFields) {
      showModal('Incomplete Form', 'Please fill in all required fields highlighted in red.');
      return;
    }

    // Additional validations
    if (!validateAge(formData.dob)) {
      setFieldState('dob', 'error');
      showModal('Age Requirement', 'You must be at least 18 years old to register for voting.');
      return;
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      setFieldState('mobile', 'error');
      showModal('Invalid Mobile', 'Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!/^\d{6}$/.test(formData.pincode)) {
      setFieldState('pincode', 'error');
      showModal('Invalid Pincode', 'Please enter a valid 6-digit pincode.');
      return;
    }

    if (formData.aadhaar && !/^\d{12}$/.test(formData.aadhaar)) {
      setFieldState('aadhaar', 'error');
      showModal('Invalid Aadhaar', 'Please enter a valid 12-digit Aadhaar number or leave it blank.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setFieldState('email', 'error');
      showModal('Invalid Email', 'Please enter a valid email address or leave it blank.');
      return;
    }

    // ✅ Generate voter ID on success
    const newVoterId = generateVoterId();
    setVoterId(newVoterId);

    // ✅ Send to backend
    registration(newVoterId);

    // ✅ Show success modal with voter ID
    showModal('Success!', `Your electoral roll registration has been submitted successfully.
Your Voter ID is: ${newVoterId}. You will receive a confirmation shortly.`);
  };

  return (
    <div className="registration-container">
      <header className="registration-header">
        <h1>Register in Electoral Roll</h1>
      </header>

      <form onSubmit={handleSubmit} className="registration-form">
        {/* Personal Information */}
        <section className="form-section">
          <h2>Personal Information</h2>
          
          <div className="form-group">
            <label htmlFor="fullName">Full Name: *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={fieldStates.fullName || ''}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth: *</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className={fieldStates.dob || ''}
              required
            />
          </div>

          <div className="form-group">
            <label>Gender: *</label>
            <div className="radio-group">
              {['male', 'female', 'other'].map(gender => (
                <label key={gender} className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={handleInputChange}
                  />
                  {gender.charAt(0).toUpperCase() + gender.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="relationName">Father's/Mother's/Husband's Name: *</label>
            <input
              type="text"
              id="relationName"
              name="relationName"
              value={formData.relationName}
              onChange={handleInputChange}
              className={fieldStates.relationName || ''}
              required
            />
          </div>
        </section>

        {/* Residential Address */}
        <section className="form-section">
          <h2>Residential Address</h2>
          
          <div className="form-group">
            <label htmlFor="addressLine1">Address Line 1: *</label>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              value={formData.addressLine1}
              onChange={handleInputChange}
              className={fieldStates.addressLine1 || ''}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="addressLine2">Address Line 2 (Optional):</label>
            <input
              type="text"
              id="addressLine2"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City/Town: *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className={fieldStates.city || ''}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="state">State: *</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className={fieldStates.state || ''}
              required
            >
              <option value="">Select State</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="pincode">Pincode: *</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              className={fieldStates.pincode || ''}
              maxLength="6"
              required
            />
          </div>
        </section>

        {/* Contact Information */}
        <section className="form-section">
          <h2>Contact Information</h2>
          
          <div className="form-group">
            <label htmlFor="aadhaar">Aadhaar Number (Optional):</label>
            <input
              type="text"
              id="aadhaar"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleInputChange}
              className={fieldStates.aadhaar || ''}
              maxLength="12"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number: *</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className={fieldStates.mobile || ''}
              maxLength="10"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email (Optional):</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={fieldStates.email || ''}
            />
          </div>
        </section>

        {/* Security Check */}
        <section className="form-section">
          <h2>Security Check</h2>
          
          <div className="captcha-group">
            <label>Enter CAPTCHA: *</label>
            <div className="captcha-container">
              <span className="captcha-display">{currentCaptcha}</span>
              <button
                type="button"
                onClick={generateCaptcha}
                className="refresh-btn"
                title="Refresh CAPTCHA"
              >
                🔄
              </button>
            </div>
            <input
              type="text"
              name="captchaInput"
              value={formData.captchaInput}
              onChange={handleInputChange}
              className={fieldStates.captchaInput || ''}
              required
            />
          </div>
        </section>

        {/* Declaration */}
        <div className="declaration-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="declaration"
              checked={formData.declaration}
              onChange={handleInputChange}
              required
            />
            I solemnly affirm that the information furnished is true and correct to the best of my knowledge and belief.
          </label>
        </div>

        {/* Submit Button */}
        <div className="submit-group">
          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </div>
      </form>

      {/* Modal */}
      {modal.isOpen && (
        <div className="modal_overlay" onClick={hideModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{modal.title}</h3>
            <p>{modal.message}</p>
            <button onClick={hideModal} className="modal-close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;

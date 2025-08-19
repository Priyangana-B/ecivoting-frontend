import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/UpdateDetails.css';

const UpdateDetails = () => {
  // Form state management
  const [formData, setFormData] = useState({
    epicNumber: '',
    fullName: '',
    dob: '',
    gender: '',
    relationName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    mobile: '',
    email: '',
    declaration: false
  });

  // UI state management
  const [isRetrieving, setIsRetrieving] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [detailsRetrieved, setDetailsRetrieved] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    title: '',
    message: '',
    type: 'info'
  });
  const [fieldErrors, setFieldErrors] = useState({});

  // States list
  const states = [
    { code: 'AN', name: 'Andaman and Nicobar Islands' },
    { code: 'AP', name: 'Andhra Pradesh' },
    { code: 'AR', name: 'Arunachal Pradesh' },
    { code: 'AS', name: 'Assam' },
    { code: 'BR', name: 'Bihar' },
    { code: 'CH', name: 'Chandigarh' },
    { code: 'CT', name: 'Chhattisgarh' },
    { code: 'DN', name: 'Dadra and Nagar Haveli and Daman and Diu' },
    { code: 'DL', name: 'Delhi' },
    { code: 'GA', name: 'Goa' },
    { code: 'GJ', name: 'Gujarat' },
    { code: 'HR', name: 'Haryana' },
    { code: 'HP', name: 'Himachal Pradesh' },
    { code: 'JK', name: 'Jammu and Kashmir' },
    { code: 'JH', name: 'Jharkhand' },
    { code: 'KA', name: 'Karnataka' },
    { code: 'KL', name: 'Kerala' },
    { code: 'LA', name: 'Ladakh' },
    { code: 'LD', name: 'Lakshadweep' },
    { code: 'MP', name: 'Madhya Pradesh' },
    { code: 'MH', name: 'Maharashtra' },
    { code: 'MN', name: 'Manipur' },
    { code: 'ML', name: 'Meghalaya' },
    { code: 'MZ', name: 'Mizoram' },
    { code: 'NL', name: 'Nagaland' },
    { code: 'OR', name: 'Odisha' },
    { code: 'PY', name: 'Puducherry' },
    { code: 'PB', name: 'Punjab' },
    { code: 'RJ', name: 'Rajasthan' },
    { code: 'SK', name: 'Sikkim' },
    { code: 'TN', name: 'Tamil Nadu' },
    { code: 'TG', name: 'Telangana' },
    { code: 'TR', name: 'Tripura' },
    { code: 'UP', name: 'Uttar Pradesh' },
    { code: 'UT', name: 'Uttarakhand' },
    { code: 'WB', name: 'West Bengal' }
  ];

  // Modal management
  const showModal = useCallback((title, message, type = 'info') => {
    setModal({ show: true, title, message, type });
  }, []);

  const hideModal = useCallback(() => {
    setModal(prev => ({ ...prev, show: false }));
    setTimeout(() => {
      setModal({ show: false, title: '', message: '', type: 'info' });
    }, 300);
  }, []);

  // Handle input changes
  const handleInputChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    let processedValue = value;

    // Auto-format specific inputs
    if (name === 'mobile' || name === 'pincode') {
      processedValue = value.replace(/[^0-9]/g, '');
    } else if (name === 'epicNumber') {
      processedValue = value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : processedValue
    }));

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  }, [fieldErrors]);

  // Validate EPIC number format
  const validateEpicNumber = (epicNumber) => {
    return /^[A-Za-z]{3}[0-9]{7}$/.test(epicNumber);
  };

  // Simulate retrieving details from backend
  const retrieveDetails = useCallback(async () => {
    if (!formData.epicNumber) {
      showModal('Error', 'Please enter an EPIC Number to retrieve details.', 'error');
      return;
    }

    if (!validateEpicNumber(formData.epicNumber)) {
      showModal('Error', 'Invalid EPIC format. Please enter in format: ABC1234567', 'error');
      return;
    }

    setIsRetrieving(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate retrieved data (in real app, this would come from API)
      const retrievedData = {
        fullName: 'John Doe',
        dob: '1990-05-15',
        gender: 'male',
        relationName: 'Richard Doe',
        addressLine1: '123, Main Street',
        addressLine2: 'Near Central Park',
        city: 'New Delhi',
        state: 'DL',
        pincode: '110001',
        mobile: '9876543210',
        email: 'john.doe@example.com'
      };

      setFormData(prev => ({
        ...prev,
        ...retrievedData
      }));

      setDetailsRetrieved(true);
      showModal('Success', 'Details retrieved and pre-filled successfully!', 'success');

    } catch (error) {
      showModal('Error', 'Failed to retrieve details. Please try again later.', 'error');
    } finally {
      setIsRetrieving(false);
    }
  }, [formData.epicNumber, showModal]);

  // Validate form data
  const validateForm = useCallback(() => {
    const errors = [];

    if (!formData.epicNumber) errors.push('EPIC Number is required');
    if (!formData.fullName.trim()) errors.push('Full Name is required');
    if (!formData.dob) errors.push('Date of Birth is required');
    if (!formData.gender) errors.push('Gender is required');
    if (!formData.relationName.trim()) errors.push('Father\'s/Mother\'s/Husband\'s Name is required');
    if (!formData.addressLine1.trim()) errors.push('Address Line 1 is required');
    if (!formData.city.trim()) errors.push('City/Town is required');
    if (!formData.state) errors.push('State is required');
    if (!formData.pincode) errors.push('Pincode is required');
    if (!formData.mobile) errors.push('Mobile Number is required');
    if (!formData.declaration) errors.push('Declaration must be accepted');

    // Validate formats
    if (formData.mobile && !/^[0-9]{10}$/.test(formData.mobile)) {
      errors.push('Mobile number must be exactly 10 digits');
    }
    if (formData.pincode && !/^[0-9]{6}$/.test(formData.pincode)) {
      errors.push('Pincode must be exactly 6 digits');
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }

    return errors;
  }, [formData]);

  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (!detailsRetrieved) {
      showModal('Error', 'Please retrieve your existing details first.', 'error');
      return;
    }

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      showModal('Validation Error', validationErrors[0], 'error');
      return;
    }

    setIsUpdating(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Update Form Data:', formData);
      
      showModal('Success!', 'Your details have been updated successfully!', 'success');
      
      // Reset form after successful update
      setFormData({
        epicNumber: '',
        fullName: '',
        dob: '',
        gender: '',
        relationName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        pincode: '',
        mobile: '',
        email: '',
        declaration: false
      });
      setDetailsRetrieved(false);

    } catch (error) {
      showModal('Error', 'Failed to update details. Please try again later.', 'error');
    } finally {
      setIsUpdating(false);
    }
  }, [detailsRetrieved, validateForm, formData, showModal]);

  // Handle keyboard events
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape' && modal.show) {
      hideModal();
    }
  }, [modal.show, hideModal]);

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="update-page">
      

      {/* Main Content */}
      <main className="main-content">
        <div className="update-container">
          <h1 className="update-title">Update Your Electoral Details</h1>

          <form onSubmit={handleSubmit}>
            {/* Verify Identity Section */}
            <section className="form-section">
              <h2 className="section-title">1. Verify Identity</h2>
              <p className="section-description">
                Please enter your existing EPIC number to retrieve and update your details.
              </p>
              
              <div className="form-group">
                <label htmlFor="epicNumber">
                  Existing EPIC Number <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="epicNumber"
                  name="epicNumber"
                  value={formData.epicNumber}
                  onChange={handleInputChange}
                  placeholder="e.g., ABC1234567"
                  maxLength="10"
                  style={{ textTransform: 'uppercase' }}
                  required
                />
              </div>

              <button
                type="button"
                onClick={retrieveDetails}
                className="retrieve-btn"
                disabled={isRetrieving || !formData.epicNumber}
              >
                {isRetrieving ? (
                  <>
                    <span className="loading-spinner"></span>
                    Retrieving...
                  </>
                ) : (
                  'Retrieve Details'
                )}
              </button>
            </section>

            {/* Personal Information Section */}
            <section className="form-section">
              <h2 className="section-title">2. Personal Information</h2>
              
              <div className="form-group">
                <label htmlFor="fullName">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  disabled={!detailsRetrieved}
                />
              </div>

              <div className="form-group">
                <label htmlFor="dob">
                  Date of Birth <span className="required">*</span>
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  required
                  disabled={!detailsRetrieved}
                />
              </div>

              <div className="form-group">
                <label>Gender <span className="required">*</span></label>
                <div className="radio-group">
                  {['male', 'female', 'other'].map(gender => (
                    <label key={gender} className="radio-label">
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={formData.gender === gender}
                        onChange={handleInputChange}
                        required
                        disabled={!detailsRetrieved}
                      />
                      {gender.charAt(0).toUpperCase() + gender.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="relationName">
                  Father's/Mother's/Husband's Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="relationName"
                  name="relationName"
                  value={formData.relationName}
                  onChange={handleInputChange}
                  placeholder="Enter father's/mother's/husband's name"
                  required
                  disabled={!detailsRetrieved}
                />
              </div>
            </section>

            {/* Address Information Section */}
            <section className="form-section">
              <h2 className="section-title">3. Address Information</h2>
              
              <div className="form-group">
                <label htmlFor="addressLine1">
                  Address Line 1 <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="addressLine1"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                  placeholder="Enter address line 1"
                  required
                  disabled={!detailsRetrieved}
                />
              </div>

              <div className="form-group">
                <label htmlFor="addressLine2">Address Line 2 (Optional)</label>
                <input
                  type="text"
                  id="addressLine2"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                  placeholder="Enter address line 2"
                  disabled={!detailsRetrieved}
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">
                  City/Town <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter city/town"
                  required
                  disabled={!detailsRetrieved}
                />
              </div>

              <div className="form-group">
                <label htmlFor="state">
                  State <span className="required">*</span>
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  disabled={!detailsRetrieved}
                >
                  <option value="">Select State</option>
                  {states.map(state => (
                    <option key={state.code} value={state.code}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="pincode">
                  Pincode <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  placeholder="Enter 6-digit pincode"
                  maxLength="6"
                  required
                  disabled={!detailsRetrieved}
                />
              </div>
            </section>

            {/* Contact Information Section */}
            <section className="form-section">
              <h2 className="section-title">4. Contact Information</h2>
              
              <div className="form-group">
                <label htmlFor="mobile">
                  Mobile Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="Enter 10-digit mobile number"
                  maxLength="10"
                  required
                  disabled={!detailsRetrieved}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email (Optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                  disabled={!detailsRetrieved}
                />
              </div>
            </section>

            {/* Declaration Section */}
            <section className="declaration-section">
              <h2 className="section-title">5. Declaration</h2>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleInputChange}
                  required
                  disabled={!detailsRetrieved}
                />
                <span>
                  I solemnly affirm that the updated information furnished is true and correct 
                  to the best of my knowledge and belief.
                </span>
              </label>
            </section>

            {/* Submit Button */}
            <button
              type="submit"
              className="submit-btn"
              disabled={isUpdating || !detailsRetrieved || !formData.declaration}
            >
              {isUpdating ? (
                <>
                  <span className="loading-spinner"></span>
                  Updating Details...
                </>
              ) : (
                'Update Details'
              )}
            </button>
          </form>

          {/* Message Modal */}
          {modal.show && (
            <div 
              className="modal-overlay" 
              onClick={hideModal}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              aria-describedby="modal-message"
            >
              <div 
                className={`modal-content ${modal.type}`} 
                onClick={(e) => e.stopPropagation()}
              >
                <h3 id="modal-title" className="modal-title">
                  {modal.type === 'success' && '✅ '}
                  {modal.type === 'error' && '❌ '}
                  {modal.type === 'info' && 'ℹ️ '}
                  {modal.title}
                </h3>
                <p id="modal-message" className="modal-message">
                  {modal.message}
                </p>
                <button onClick={hideModal} className="modal-close-btn" autoFocus>
                  OK
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

 

    </div>
  );
};

export default UpdateDetails;

import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/DownloadEpic.css';

const DownloadEpic = () => {
  // Form state management
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    aadhaar: '',
    voterId: '',
    captchaInput: ''
  });

  // UI state management
  const [currentCaptcha, setCurrentCaptcha] = useState('');
  const [modal, setModal] = useState({
    show: false,
    title: '',
    message: '',
    type: 'info' // 'success', 'error', 'info'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Constants
  const CAPTCHA_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const CAPTCHA_LENGTH = 6;

  // Generate random CAPTCHA
  const generateCaptcha = useCallback(() => {
    let captcha = '';
    for (let i = 0; i < CAPTCHA_LENGTH; i++) {
      captcha += CAPTCHA_CHARACTERS.charAt(Math.floor(Math.random() * CAPTCHA_CHARACTERS.length));
    }
    setCurrentCaptcha(captcha);
    setFormData(prev => ({ ...prev, captchaInput: '' }));
  }, []);

  // Initialize CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  // Modal management functions
  const showModal = useCallback((title, message, type = 'info') => {
    setModal({ show: true, title, message, type });
  }, []);

  const hideModal = useCallback(() => {
    setModal(prev => ({ ...prev, show: false }));
    setTimeout(() => {
      setModal({ show: false, title: '', message: '', type: 'info' });
    }, 300); // Allow animation to complete
  }, []);

  // Input validation functions
  const validateField = useCallback((name, value) => {
    switch (name) {
      case 'fullName':
        return value.trim().length >= 2 ? '' : 'Full name must be at least 2 characters';
      case 'mobile':
        return /^[0-9]{10}$/.test(value) ? '' : 'Mobile number must be exactly 10 digits';
      case 'aadhaar':
        return !value || /^[0-9]{12}$/.test(value) ? '' : 'Aadhaar number must be exactly 12 digits';
      case 'voterId':
        return /^[A-Za-z]{3}[0-9]{7}$/.test(value) ? '' : 'Voter ID format: 3 letters + 7 numbers (e.g., ABC1234567)';
      case 'captchaInput':
        return value.toLowerCase() === currentCaptcha.toLowerCase() ? '' : 'Invalid CAPTCHA code';
      default:
        return '';
    }
  }, [currentCaptcha]);

  // Check form validity
  const checkFormValidity = useCallback(() => {
    const requiredFields = ['fullName', 'mobile', 'voterId', 'captchaInput'];
    const isValid = requiredFields.every(field => {
      const value = formData[field];
      return value && validateField(field, value) === '';
    }) && (!formData.aadhaar || validateField('aadhaar', formData.aadhaar) === '');
    
    setIsFormValid(isValid);
  }, [formData, validateField]);

  // Update form validity when form data changes
  useEffect(() => {
    checkFormValidity();
  }, [checkFormValidity]);

  // Handle input changes with real-time validation
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    let processedValue = value;

    // Auto-format specific inputs
    switch (name) {
      case 'mobile':
      case 'aadhaar':
        processedValue = value.replace(/[^0-9]/g, '');
        break;
      case 'voterId':
        processedValue = value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
        break;
      case 'fullName':
        processedValue = value.replace(/[^a-zA-Z\s]/g, '');
        break;
      default:
        break;
    }

    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  }, [fieldErrors]);

  // Handle input blur for validation feedback
  const handleInputBlur = useCallback((e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    if (error) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: error
      }));
    } else {
      setFieldErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  }, [validateField]);

  // Comprehensive form validation
  const validateForm = useCallback(() => {
    const errors = [];

    // Validate all required fields
    if (!formData.fullName.trim()) {
      errors.push('Full name is required.');
    } else if (formData.fullName.trim().length < 2) {
      errors.push('Full name must be at least 2 characters.');
    }

    if (!formData.mobile) {
      errors.push('Mobile number is required.');
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      errors.push('Mobile number must be exactly 10 digits.');
    }

    if (!formData.voterId) {
      errors.push('Voter ID is required.');
    } else if (!/^[A-Za-z]{3}[0-9]{7}$/.test(formData.voterId)) {
      errors.push('Voter ID must be in format: 3 letters followed by 7 numbers (e.g., ABC1234567).');
    }

    // Validate optional Aadhaar if provided
    if (formData.aadhaar && !/^[0-9]{12}$/.test(formData.aadhaar)) {
      errors.push('Aadhaar number must be exactly 12 digits.');
    }

    // Validate CAPTCHA
    if (!formData.captchaInput) {
      errors.push('CAPTCHA verification is required.');
    } else if (formData.captchaInput.toLowerCase() !== currentCaptcha.toLowerCase()) {
      errors.push('Invalid CAPTCHA code.');
    }

    return errors;
  }, [formData, currentCaptcha]);

  // Simulate form processing with enhanced feedback
  const processForm = useCallback(() => {
    return new Promise((resolve, reject) => {
      // Simulate network delay
      setTimeout(() => {
        // Simulate random success/failure for demo
        const isSuccess = Math.random() > 0.1; // 90% success rate
        
        if (isSuccess) {
          resolve({
            success: true,
            message: 'Your E-EPIC download request has been processed successfully. A download link has been sent to your registered email/mobile number.',
            downloadLink: 'https://example.com/download/epic-123456789'
          });
        } else {
          reject({
            success: false,
            message: 'Unable to process your request at this time. Please try again later or contact support if the issue persists.'
          });
        }
      }, 2000);
    });
  }, []);

  // Handle form submission with comprehensive error handling
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    // Prevent double submission
    if (isLoading) return;

    // Validate form data
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      showModal('Validation Error', validationErrors[0], 'error');
      
      // Focus on first error field
      const firstErrorField = document.querySelector('.form-group input.error, .form-group input:invalid');
      if (firstErrorField) {
        firstErrorField.focus();
      }
      return;
    }

    setIsLoading(true);

    try {
      const result = await processForm();
      
      if (result.success) {
        showModal('Success!', result.message, 'success');
        
        // Reset form data
        setFormData({
          fullName: '',
          mobile: '',
          aadhaar: '',
          voterId: '',
          captchaInput: ''
        });
        
        // Clear any field errors
        setFieldErrors({});
        
        // Generate new CAPTCHA
        generateCaptcha();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showModal(
        'Processing Error', 
        error.message || 'Network error. Please check your connection and try again.',
        'error'
      );
      
      // Generate new CAPTCHA on error
      generateCaptcha();
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, validateForm, processForm, showModal, generateCaptcha]);

  // Handle keyboard events for better UX
  const handleKeyDown = useCallback((e) => {
    // Close modal with Escape key
    if (e.key === 'Escape' && modal.show) {
      hideModal();
    }
    
    // Submit form with Ctrl+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && isFormValid && !isLoading) {
      handleSubmit(e);
    }
  }, [modal.show, isFormValid, isLoading, hideModal, handleSubmit]);

  // Add global keyboard event listeners
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Auto-focus first input on component mount
  useEffect(() => {
    const firstInput = document.querySelector('#fullName');
    if (firstInput) {
      firstInput.focus();
    }
  }, []);

  return (
    <div className="download-page">
     

      {/* Main Content */}
      <main className="main-content">
        <div className="download-container">
          <div className="download-header">
            <h1 className="download-title">Download E-EPIC</h1>
            <p className="download-subtitle">
              Get your digital voter ID card instantly. Enter your details below to download your E-EPIC.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="download-form" noValidate>
            {/* Full Name Field */}
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
                onBlur={handleInputBlur}
                className={fieldErrors.fullName ? 'error' : ''}
                placeholder="Enter your full name as per voter list"
                autoComplete="name"
                required
                aria-describedby={fieldErrors.fullName ? 'fullName-error' : null}
              />
              {fieldErrors.fullName && (
                <span id="fullName-error" className="error-message">
                  {fieldErrors.fullName}
                </span>
              )}
            </div>

            {/* Mobile Number Field */}
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
                onBlur={handleInputBlur}
                className={fieldErrors.mobile ? 'error' : ''}
                maxLength="10"
                placeholder="Enter 10-digit mobile number"
                autoComplete="tel"
                required
                aria-describedby={fieldErrors.mobile ? 'mobile-error' : null}
              />
              {fieldErrors.mobile && (
                <span id="mobile-error" className="error-message">
                  {fieldErrors.mobile}
                </span>
              )}
            </div>

            {/* Aadhaar Number Field */}
            <div className="form-group">
              <label htmlFor="aadhaar">
                Aadhaar Number <span className="optional">(Optional)</span>
              </label>
              <input
                type="text"
                id="aadhaar"
                name="aadhaar"
                value={formData.aadhaar}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className={fieldErrors.aadhaar ? 'error' : ''}
                maxLength="12"
                placeholder="Enter 12-digit Aadhaar number"
                aria-describedby={fieldErrors.aadhaar ? 'aadhaar-error' : null}
              />
              {fieldErrors.aadhaar && (
                <span id="aadhaar-error" className="error-message">
                  {fieldErrors.aadhaar}
                </span>
              )}
            </div>

            {/* Voter ID Field */}
            <div className="form-group">
              <label htmlFor="voterId">
                Voter ID <span className="required">*</span>
              </label>
              <input
                type="text"
                id="voterId"
                name="voterId"
                value={formData.voterId}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className={fieldErrors.voterId ? 'error' : ''}
                maxLength="10"
                placeholder="e.g., ABC1234567"
                style={{ textTransform: 'uppercase' }}
                required
                aria-describedby={fieldErrors.voterId ? 'voterId-error' : null}
              />
              {fieldErrors.voterId && (
                <span id="voterId-error" className="error-message">
                  {fieldErrors.voterId}
                </span>
              )}
            </div>

            {/* CAPTCHA Section */}
            <div className="captcha-section">
              <label>
                CAPTCHA Verification <span className="required">*</span>
              </label>
              <div className="captcha-container">
                <div className="captcha-display" aria-label={`CAPTCHA code: ${currentCaptcha}`}>
                  {currentCaptcha}
                </div>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="refresh-btn"
                  title="Generate new CAPTCHA"
                  aria-label="Generate new CAPTCHA"
                >
                  <span className="refresh-icon">🔄</span>
                </button>
              </div>
              <input
                type="text"
                name="captchaInput"
                value={formData.captchaInput}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className={fieldErrors.captchaInput ? 'error' : ''}
                placeholder="Enter the CAPTCHA code above"
                autoComplete="off"
                required
                aria-describedby={fieldErrors.captchaInput ? 'captcha-error' : null}
              />
              {fieldErrors.captchaInput && (
                <span id="captcha-error" className="error-message">
                  {fieldErrors.captchaInput}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-actions">
              <button
                type="submit"
                className={`submit-btn ${isLoading ? 'loading' : ''}`}
                disabled={!isFormValid || isLoading}
                aria-describedby="submit-help"
              >
                {isLoading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Processing...
                  </>
                ) : (
                  'Download E-EPIC'
                )}
              </button>
              <p id="submit-help" className="form-help">
                {isLoading 
                  ? 'Please wait while we process your request...' 
                  : 'Click to download your digital voter ID card'
                }
              </p>
            </div>
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
                <div className="modal-header">
                  <h3 id="modal-title" className="modal-title">
                    {modal.type === 'success' && '✅ '}
                    {modal.type === 'error' && '❌ '}
                    {modal.type === 'info' && 'ℹ️ '}
                    {modal.title}
                  </h3>
                </div>
                <div className="modal-body">
                  <p id="modal-message" className="modal-message">
                    {modal.message}
                  </p>
                </div>
                <div className="modal-footer">
                  <button 
                    onClick={hideModal} 
                    className="modal-close-btn"
                    autoFocus
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      
    </div>
  );
};

export default DownloadEpic;

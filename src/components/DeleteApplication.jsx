import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/DeleteApplication.css';

const DeleteApplication = () => {
  // Form state management
  const [formData, setFormData] = useState({
    applicationId: '',
    email: '',
    reason: '',
    captchaInput: '',
    confirmDelete: false
  });

  // UI state management
  const [captchaQuestion, setCaptchaQuestion] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [messages, setMessages] = useState({
    success: { show: false, text: '' },
    error: { show: false, text: '' }
  });
  const [fieldValidation, setFieldValidation] = useState({
    applicationId: '',
    email: '',
    captcha: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Generate CAPTCHA
  const generateCaptcha = useCallback(() => {
    const operations = ['+', '-', '×'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1, num2, question, answer;

    switch(operation) {
      case '+':
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * 20) + 1;
        answer = num1 + num2;
        question = `${num1} + ${num2} = ?`;
        break;
      case '-':
        num1 = Math.floor(Math.random() * 20) + 10;
        num2 = Math.floor(Math.random() * 10) + 1;
        answer = num1 - num2;
        question = `${num1} - ${num2} = ?`;
        break;
      case '×':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        answer = num1 * num2;
        question = `${num1} × ${num2} = ?`;
        break;
      default:
        num1 = 5;
        num2 = 3;
        answer = 8;
        question = '5 + 3 = ?';
    }

    setCaptchaQuestion(question);
    setCaptchaAnswer(answer);
    setFormData(prev => ({ ...prev, captchaInput: '' }));
  }, []);

  // Initialize CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  // Validation functions
  const validateApplicationId = (id) => {
    const pattern = /^VP\d{4}\d{6,}$/;
    return pattern.test(id);
  };

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const validateCaptcha = () => {
    const userAnswer = parseInt(formData.captchaInput);
    return userAnswer === captchaAnswer;
  };

  // Handle input changes with real-time validation
  const handleInputChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Real-time validation feedback
    if (name === 'applicationId' && value) {
      setFieldValidation(prev => ({
        ...prev,
        applicationId: validateApplicationId(value) ? 'valid' : 'invalid'
      }));
    } else if (name === 'email' && value) {
      setFieldValidation(prev => ({
        ...prev,
        email: validateEmail(value) ? 'valid' : 'invalid'
      }));
    } else if (name === 'captchaInput' && value) {
      const userAnswer = parseInt(value);
      setFieldValidation(prev => ({
        ...prev,
        captcha: userAnswer === captchaAnswer ? 'valid' : 'invalid'
      }));
    } else if (value === '') {
      setFieldValidation(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Clear messages when user starts typing
    if (messages.error.show || messages.success.show) {
      setMessages({
        success: { show: false, text: '' },
        error: { show: false, text: '' }
      });
    }
  }, [captchaAnswer, messages]);

  // Show error message
  const showError = useCallback((message) => {
    setMessages({
      success: { show: false, text: '' },
      error: { show: true, text: message }
    });
    // Scroll to top to show error
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Show success message
  const showSuccess = useCallback((message) => {
    setMessages({
      success: { show: true, text: message },
      error: { show: false, text: '' }
    });
  }, []);

  // Show confirmation dialog
  const showConfirmationDialog = () => {
    return window.confirm(
      'Are you absolutely sure you want to delete your voter application?\n\n' +
      'This action cannot be undone and you will need to restart the entire registration process.\n\n' +
      'Click OK to proceed with deletion or Cancel to abort.'
    );
  };

  // Simulate deletion process
  const deleteApplication = useCallback(async (applicationId, email, reason) => {
    setIsDeleting(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate random success/failure for demo purposes
      const isSuccess = Math.random() > 0.2; // 80% success rate

      if (isSuccess) {
        // Success
        console.log('Application deleted:', {
          applicationId,
          email,
          reason,
          timestamp: new Date().toISOString()
        });

        showSuccess('Your voter application has been successfully deleted from our system.');
        setFormSubmitted(true);
      } else {
        // Error
        showError('Application not found or email does not match our records.');
        generateCaptcha(); // Generate new CAPTCHA on error
      }
    } catch (error) {
      showError('An error occurred while processing your request. Please try again later.');
      generateCaptcha();
    } finally {
      setIsDeleting(false);
    }
  }, [showError, showSuccess, generateCaptcha]);

  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    // Hide previous messages
    setMessages({
      success: { show: false, text: '' },
      error: { show: false, text: '' }
    });

    // Validation
    if (!formData.applicationId || !formData.email || !formData.confirmDelete) {
      showError('Please fill in all required fields and confirm the deletion.');
      return;
    }

    // Validate CAPTCHA
    if (!validateCaptcha()) {
      showError('Incorrect security verification. Please solve the math problem correctly.');
      generateCaptcha(); // Generate new CAPTCHA
      return;
    }

    // Validate Application ID format
    if (!validateApplicationId(formData.applicationId)) {
      showError('Invalid Application ID format. Please enter a valid ID (e.g., VP2025001234).');
      return;
    }

    // Validate Email
    if (!validateEmail(formData.email)) {
      showError('Please enter a valid email address.');
      return;
    }

    // Show confirmation dialog
    if (!showConfirmationDialog()) {
      return;
    }

    // Process deletion
    await deleteApplication(formData.applicationId, formData.email, formData.reason);
  }, [formData, validateCaptcha, validateApplicationId, validateEmail, showError, deleteApplication, generateCaptcha]);

  // Handle go back
  const handleGoBack = () => {
    if (window.confirm('Are you sure you want to cancel? Any entered information will be lost.')) {
      window.history.back();
    }
  };

  // Reset form for new deletion
  const handleNewDeletion = () => {
    setFormData({
      applicationId: '',
      email: '',
      reason: '',
      captchaInput: '',
      confirmDelete: false
    });
    setFieldValidation({
      applicationId: '',
      email: '',
      captcha: ''
    });
    setFormSubmitted(false);
    setMessages({
      success: { show: false, text: '' },
      error: { show: false, text: '' }
    });
    generateCaptcha();
  };

  return (
    <div className="delete-page">
      {/* Header */}
      

      {/* Main Content */}
      <main className="main-content">
        <div className="delete-container">
          {/* Messages */}
          {messages.success.show && (
            <div className="alert alert-success" role="alert">
              <h4>✅ Success</h4>
              <p>{messages.success.text}</p>
            </div>
          )}

          {messages.error.show && (
            <div className="alert alert-error" role="alert">
              <h4>❌ Error</h4>
              <p>{messages.error.text}</p>
            </div>
          )}

          {/* Success State */}
          {formSubmitted && messages.success.show ? (
            <div className="success-state">
              <div className="success-icon">✅</div>
              <h2>Application Deleted Successfully</h2>
              <p>Your voter application has been permanently removed from our system.</p>
              <div className="success-actions">
                <button 
                  onClick={handleNewDeletion} 
                  className="btn btn-primary"
                >
                  Delete Another Application
                </button>
                <Link to="/" className="btn btn-secondary">
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            /* Form State */
            <>
              <div className="page_header">
                <h1 className="page_title">Delete Voter Application</h1>
                <p className="page_description">
                  Use this form to permanently delete your voter registration application. 
                  This action cannot be undone.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="delete-form">
                {/* Application ID Field */}
                <div className="form-group">
                  <label htmlFor="applicationId">
                    Application ID <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="applicationId"
                    name="applicationId"
                    value={formData.applicationId}
                    onChange={handleInputChange}
                    className={fieldValidation.applicationId ? `input-${fieldValidation.applicationId}` : ''}
                    placeholder="Enter your application ID (e.g., VP2025001234)"
                    required
                    disabled={isDeleting}
                  />
                  <small className="field-help">
                    Your application ID can be found in your confirmation email
                  </small>
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email">
                    Email Address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={fieldValidation.email ? `input-${fieldValidation.email}` : ''}
                    placeholder="Enter your registered email address"
                    required
                    disabled={isDeleting}
                  />
                  <small className="field-help">
                    Must match the email used during registration
                  </small>
                </div>

                {/* Reason Field */}
                <div className="form-group">
                  <label htmlFor="reason">
                    Reason for Deletion (Optional)
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Please let us know why you're deleting your application (optional)"
                    disabled={isDeleting}
                  />
                </div>

                {/* CAPTCHA Section */}
                <div className="captcha-section">
                  <label>Security Verification <span className="required">*</span></label>
                  <div className="captcha-container">
                    <div className="captcha-question">
                      <span className="captcha-text">{captchaQuestion}</span>
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        className="captcha-refresh"
                        title="Generate new question"
                        disabled={isDeleting}
                      >
                        🔄
                      </button>
                    </div>
                    <input
                      type="number"
                      id="captchaInput"
                      name="captchaInput"
                      value={formData.captchaInput}
                      onChange={handleInputChange}
                      className={fieldValidation.captcha ? `input-${fieldValidation.captcha}` : ''}
                      placeholder="Enter your answer"
                      required
                      disabled={isDeleting}
                    />
                  </div>
                </div>

                {/* Confirmation Checkbox */}
                <div className="confirmation-section">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      id="confirmDelete"
                      name="confirmDelete"
                      checked={formData.confirmDelete}
                      onChange={handleInputChange}
                      required
                      disabled={isDeleting}
                    />
                    <span className="checkbox-text">
                      I understand that this action is permanent and cannot be undone. 
                      I want to delete my voter application.
                    </span>
                  </label>
                </div>

                {/* Form Actions */}
                <div className="form-actions">
                  <button
                    type="submit"
                    className="btn btn-danger"
                    disabled={isDeleting || !formData.confirmDelete}
                  >
                    {isDeleting ? (
                      <>
                        <span className="loading-spinner"></span>
                        Deleting...
                      </>
                    ) : (
                      'Delete Application'
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleGoBack}
                    className="btn btn-secondary"
                    disabled={isDeleting}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </main>

   
    
    </div>
  );
};

export default DeleteApplication;

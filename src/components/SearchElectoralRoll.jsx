import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/searchElectoralRoll.css';

const SearchElectoralRoll = () => {
  const [formData, setFormData] = useState({
    yourName: '',
    motherName: '',
    fatherName: '',
    dob: '',
    gender: '',
    aadhaarNo: '',
    nativeLanguage: '',
    otherNativeLanguage: '',
    yourAddress: '',
    state: '',
    district: '',
    assemblyName: '',
    pinCode: '',
    captchaInput: ''
  });

  const [age, setAge] = useState('');
  const [currentCaptcha, setCurrentCaptcha] = useState('');
  const [showOtherLanguage, setShowOtherLanguage] = useState(false);
  const [messageBox, setMessageBox] = useState({ show: false, message: '' });
  const [availableDistricts, setAvailableDistricts] = useState([]);

  // Language options
  const languages = [
    'Assamese', 'Bengali', 'Bodo', 'Dogri', 'Gujarati', 'Hindi', 'Kannada', 
    'Kashmiri', 'Konkani', 'Maithili', 'Malayalam', 'Manipuri', 'Marathi', 
    'Nepali', 'Odia', 'Punjabi', 'Sanskrit', 'Santali', 'Sindhi', 'Tamil', 
    'Telugu', 'Urdu', 'Other'
  ];

  // States
  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ];

  // Districts by state
  const districtsByState = {
    "Odisha": ["Khordha", "Cuttack", "Ganjam", "Puri", "Sambalpur", "Balasore", "Bhadrak", "Kendrapara"],
    "Uttar Pradesh": ["Lucknow", "Kanpur Nagar", "Varanasi", "Agra", "Prayagraj", "Ghaziabad", "Noida", "Meerut"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Thane", "Kolhapur", "Solapur"],
    "West Bengal": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur (South Dinajpur)",
      "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad",
      "Nadia", "North 24 Parganas", "Paschim Bardhaman (West Bardhaman)", "Paschim Medinipur (West Medinipur)",
      "Purba Bardhaman (East Bardhaman)", "Purba Medinipur (East Medinipur)", "Purulia", "South 24 Parganas",
      "Uttar Dinajpur (North Dinajpur)"],
    "Karnataka": ["Bengaluru Urban", "Mysuru", "Belagavi", "Hubballi-Dharwad", "Mangaluru", "Shivamogga"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli"],
    "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner", "Ajmer"],
    "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali"],
    "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Ambala", "Hisar", "Karnal"]
  };

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

  // Calculate age
  const calculateAge = (dob) => {
    if (!dob) {
      setAge('');
      return;
    }
    
    const dobDate = new Date(dob);
    if (isNaN(dobDate)) {
      setAge('');
      return;
    }

    const today = new Date();
    let calculatedAge = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
      calculatedAge--;
    }
    
    setAge(`Age: ${calculatedAge} years`);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Special handling for DOB
    if (name === 'dob') {
      calculateAge(value);
    }

    // Special handling for native language
    if (name === 'nativeLanguage') {
      setShowOtherLanguage(value === 'Other');
      if (value !== 'Other') {
        setFormData(prev => ({ ...prev, otherNativeLanguage: '' }));
      }
    }

    // Special handling for state selection
    if (name === 'state') {
      setAvailableDistricts(districtsByState[value] || []);
      setFormData(prev => ({ ...prev, district: '', assemblyName: '' }));
    }
  };

  // Show message box
  const showMessageBox = (message) => {
    setMessageBox({ show: true, message });
  };

  // Hide message box
  const hideMessageBox = () => {
    setMessageBox({ show: false, message: '' });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate CAPTCHA
    if (formData.captchaInput !== currentCaptcha) {
      showMessageBox('Incorrect Captcha. Please try again.');
      generateCaptcha();
      setFormData(prev => ({ ...prev, captchaInput: '' }));
      return;
    }

    // Determine native language value
    let selectedNativeLanguage = formData.nativeLanguage;
    if (selectedNativeLanguage === 'Other') {
      selectedNativeLanguage = formData.otherNativeLanguage;
    }

    // Collect form data
    const submissionData = {
      yourName: formData.yourName,
      motherName: formData.motherName,
      fatherName: formData.fatherName,
      dob: formData.dob,
      age: age.replace('Age: ', '').replace(' years', ''),
      gender: formData.gender,
      aadhaarNo: formData.aadhaarNo,
      nativeLanguage: selectedNativeLanguage,
      yourAddress: formData.yourAddress,
      state: formData.state,
      district: formData.district,
      assemblyName: formData.assemblyName,
      pinCode: formData.pinCode
    };

    console.log('Form Submitted:', submissionData);
    showMessageBox('Form submitted successfully! (Check console for data)');
  };

  // Clear form
  const handleClear = () => {
    setFormData({
      yourName: '',
      motherName: '',
      fatherName: '',
      dob: '',
      gender: '',
      aadhaarNo: '',
      nativeLanguage: '',
      otherNativeLanguage: '',
      yourAddress: '',
      state: '',
      district: '',
      assemblyName: '',
      pinCode: '',
      captchaInput: ''
    });
    setAge('');
    setShowOtherLanguage(false);
    setAvailableDistricts([]);
    generateCaptcha();
    showMessageBox('Form cleared!');
  };

  return (
    <>
    
      <div className="search-page">
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <h1 className="portal-title">Electors Portal</h1>
            <nav aria-label="Main navigation">
              <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <div className="search-container">
            <h1 className="search-title">Electoral Roll Search</h1>
            
            <form onSubmit={handleSubmit} className="search-form">
              {/* Personal Details Section */}
              <section className="form-section">
                <h2>Personal Details</h2>
                
                <div className="form-group">
                  <label htmlFor="yourName">Your Name</label>
                  <input
                    type="text"
                    id="yourName"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="motherName">Mother's Name</label>
                  <input
                    type="text"
                    id="motherName"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fatherName">Father's Name</label>
                  <input
                    type="text"
                    id="fatherName"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                  />
                  {age && <span className="age-display">{age}</span>}
                </div>

                <div className="form-group">
                  <label>Gender</label>
                  <div className="radio-group">
                    {['Male', 'Female', 'Other'].map(gender => (
                      <label key={gender} className="radio-label">
                        <input
                          type="radio"
                          name="gender"
                          value={gender}
                          checked={formData.gender === gender}
                          onChange={handleInputChange}
                        />
                        {gender}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="aadhaarNo">Aadhaar Card No.</label>
                  <input
                    type="text"
                    id="aadhaarNo"
                    name="aadhaarNo"
                    value={formData.aadhaarNo}
                    onChange={handleInputChange}
                    maxLength="12"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="nativeLanguage">Your Native Language</label>
                  <select
                    id="nativeLanguage"
                    name="nativeLanguage"
                    value={formData.nativeLanguage}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Language</option>
                    {languages.map(lang => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                </div>

                {showOtherLanguage && (
                  <div className="form-group">
                    <label htmlFor="otherNativeLanguage">Please specify your language</label>
                    <input
                      type="text"
                      id="otherNativeLanguage"
                      name="otherNativeLanguage"
                      value={formData.otherNativeLanguage}
                      onChange={handleInputChange}
                      placeholder="Enter your language"
                    />
                  </div>
                )}
              </section>

              {/* Address Details Section */}
              <section className="form-section">
                <h2>Address Details</h2>
                
                <div className="form-group">
                  <label htmlFor="yourAddress">Your Address</label>
                  <textarea
                    id="yourAddress"
                    name="yourAddress"
                    value={formData.yourAddress}
                    onChange={handleInputChange}
                    rows="3"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select State</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="district">District</label>
                  <select
                    id="district"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    disabled={!formData.state}
                  >
                    <option value="">Select District</option>
                    {availableDistricts.map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="assemblyName">Assembly Name</label>
                  <input
                    type="text"
                    id="assemblyName"
                    name="assemblyName"
                    value={formData.assemblyName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pinCode">Pin Code</label>
                  <input
                    type="text"
                    id="pinCode"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleInputChange}
                    maxLength="6"
                  />
                </div>
              </section>

              {/* CAPTCHA Section */}
              <section className="form-section">
                <div className="captcha-group">
                  <label>CAPTCHA</label>
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
                    placeholder="Enter CAPTCHA"
                    required
                  />
                </div>
              </section>

              {/* Form Actions */}
              <div className="form-actions">
                <button type="submit" className="submit-btn">Search</button>
                <button type="button" onClick={handleClear} className="clear-btn">Clear</button>
              </div>
            </form>

            {/* Message Box Modal */}
            {messageBox.show && (
              <div className="message-box-overlay">
                <div className="message-box">
                  <p>{messageBox.message}</p>
                  <button onClick={hideMessageBox} className="message-box-btn">OK</button>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2025 Electors Portal. All rights reserved.</p>
            <p>Designed with commitment to democratic participation.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SearchElectoralRoll;

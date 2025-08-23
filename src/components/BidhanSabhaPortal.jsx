import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Election_Management/Sabha_Portal.css';
import axios from "axios";

const BidhanSabhaPortal = () => {
    const navigate = useNavigate();
    const [captcha, setCaptcha] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [members, setMembers] = useState([]);
    const [showMembersTable, setShowMembersTable] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    // Sample data for members
    const membersData = {
        'west-bengal': {
            'kolkata': [
                { name: 'Dr. Rajesh Kumar Singh', aadhar: '1234-****-9012', assembly: 'Kolkata North' },
                { name: 'Smt. Priya Sharma Devi', aadhar: '2345-****-0123', assembly: 'Kolkata South' },
                { name: 'Shri Amit Chatterjee Roy', aadhar: '3456-****-1234', assembly: 'Kolkata East' },
                { name: 'Smt. Sunita Banerjee Das', aadhar: '4567-****-2345', assembly: 'Kolkata West' },
                { name: 'Dr. Debasis Mukherjee Sen', aadhar: '5678-****-3456', assembly: 'Kolkata Central' },
                { name: 'Smt. Mamata Roy Ghosh', aadhar: '6789-****-4567', assembly: 'Behala East' },
                { name: 'Shri Subrata Das Gupta', aadhar: '7890-****-5678', assembly: 'Behala West' },
                { name: 'Dr. Ruma Chakraborty Pal', aadhar: '8901-****-6789', assembly: 'Jadavpur' },
                { name: 'Shri Tapan Bhattacharya Jha', aadhar: '9012-****-7890', assembly: 'Tollygunge' },
                { name: 'Smt. Kavita Sinha Mitra', aadhar: '0123-****-8901', assembly: 'Ballygunge' }
            ],
            'howrah': [
                { name: 'Shri Binod Kumar Jha', aadhar: '1111-****-3333', assembly: 'Howrah North' },
                { name: 'Smt. Geeta Rani Singh', aadhar: '2222-****-4444', assembly: 'Howrah South' },
                { name: 'Dr. Manoj Tiwari Yadav', aadhar: '3333-****-5555', assembly: 'Howrah Central' },
                { name: 'Smt. Sushma Devi Gupta', aadhar: '4444-****-6666', assembly: 'Bally' },
                { name: 'Shri Rakesh Pandey Shah', aadhar: '5555-****-7777', assembly: 'Uluberia' },
                { name: 'Dr. Nita Sharma Mishra', aadhar: '6666-****-8888', assembly: 'Sankrail' },
                { name: 'Shri Vikash Kumar Roy', aadhar: '7777-****-9999', assembly: 'Panchla' },
                { name: 'Smt. Sunanda Devi Lal', aadhar: '8888-****-0000', assembly: 'Jagatballavpur' },
                { name: 'Dr. Ramesh Chandra Das', aadhar: '9999-****-1111', assembly: 'Domjur' },
                { name: 'Smt. Pushpa Rani Jain', aadhar: '0000-****-2222', assembly: 'Uttarpara' }
            ]
        },
        'maharashtra': {
            'mumbai': [
                { name: 'Shri Suresh Patil Rao', aadhar: '1122-****-5566', assembly: 'Mumbai North' },
                { name: 'Smt. Vandana Kulkarni Joshi', aadhar: '2233-****-6677', assembly: 'Mumbai South' },
                { name: 'Dr. Rahul Deshmukh More', aadhar: '3344-****-7788', assembly: 'Mumbai Central' },
                { name: 'Smt. Shweta Sharma Agarwal', aadhar: '4455-****-8899', assembly: 'Andheri East' },
                { name: 'Shri Ganesh Yadav Thakur', aadhar: '5566-****-9900', assembly: 'Andheri West' },
                { name: 'Dr. Meera Gupta Sinha', aadhar: '6677-****-0011', assembly: 'Borivali' },
                { name: 'Shri Santosh Kumar Verma', aadhar: '7788-****-1122', assembly: 'Malad' },
                { name: 'Smt. Rekha Devi Pandey', aadhar: '8899-****-2233', assembly: 'Kandivali' },
                { name: 'Dr. Ajay Singh Rajput', aadhar: '9900-****-3344', assembly: 'Bandra' },
                { name: 'Smt. Pooja Sharma Tiwari', aadhar: '0011-****-4455', assembly: 'Kurla' }
            ]
        }
    };

    // District data
    const districtData = {
        'west-bengal': ['kolkata', 'howrah', 'north-24-parganas', 'south-24-parganas', 'darjeeling'],
        'maharashtra': ['mumbai', 'pune', 'nagpur', 'nashik', 'thane'],
        'uttar-pradesh': ['lucknow', 'kanpur', 'agra', 'varanasi', 'allahabad'],
        'karnataka': ['bangalore', 'mysore', 'hubli', 'mangalore', 'belgaum'],
        'tamil-nadu': ['chennai', 'coimbatore', 'madurai', 'salem', 'tiruchirappalli']
    };

    // Generate captcha function
    const generateCaptcha = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let newCaptcha = '';
        for (let i = 0; i < 5; i++) {
            newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCaptcha(newCaptcha);
    };

    // Handle state change
    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);
        setSelectedDistrict('');
        setShowMembersTable(false);
        setMembers([]);
    };

    // Handle district change
    const handleDistrictChange = (e) => {
        const district = e.target.value;
        setSelectedDistrict(district);

        if (selectedState && district) {
            const membersList = membersData[selectedState] && membersData[selectedState][district];
            if (membersList) {
                setMembers(membersList);
                setShowMembersTable(true);
            } else {
                setMembers([]);
                setShowMembersTable(true);
            }
        } else {
            setShowMembersTable(false);
        }
    };

    // Handle form submission - FIXED
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // Clear previous messages
        setSuccessMessage('');
        setErrorMessage('');
        setIsAuthenticating(true);

        // Get form data
        const formData = new FormData(e.target);
        const data = {
            voterId: formData.get('voterId')?.trim() || '',
            email: formData.get('email')?.trim() || '',
            mobile: formData.get('mobile')?.trim() || '',
            name: formData.get('name')?.trim() || '',
            captcha: formData.get('captcha')?.trim() || ''
        };

        console.log('Form data collected:', data); // Debug log

        // Validate all required fields
        if (!data.voterId || !data.email || !data.mobile || !data.name || !data.captcha) {
            setErrorMessage('❌ Please fill in all required fields.');
            setIsAuthenticating(false);
            return;
        }

        // Validate captcha - FIXED
        if (data.captcha.toUpperCase() !== captcha.toUpperCase()) {
            setErrorMessage('❌ Security code verification failed. Please try again with the correct code.');
            generateCaptcha();
            e.target.captcha.value = '';
            setIsAuthenticating(false);
            return;
        }

        // Validate voter ID format - FIXED
        if (data.voterId.length < 6 || data.voterId.length > 15) {
            setErrorMessage('❌ Please enter a valid Voter ID (6-15 characters).');
            setIsAuthenticating(false);
            return;
        }

        // Validate phone number - FIXED
        if (!/^[6-9]\d{9}$/.test(data.mobile)) {
            setErrorMessage('❌ Please enter a valid 10-digit Indian mobile number starting with 6-9.');
            setIsAuthenticating(false);
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            setErrorMessage('❌ Please enter a valid email address.');
            setIsAuthenticating(false);
            return;
        }

        // Validate name
        if (data.name.length < 3) {
            setErrorMessage('❌ Please enter your full name as per Voter ID (minimum 3 characters).');
            setIsAuthenticating(false);
            return;
        }

        // Prepare payload for backend - FIXED
        const payload = {
            voterId: data.voterId.toUpperCase(),
            email: data.email.toLowerCase(),
            mobile: data.mobile,
            fullName: data.name
        };

        console.log('Payload being sent:', payload); // Debug log

        try {
            console.log('Sending request to server...'); // Debug log

            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/voters`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 10000, // 10 second timeout
            });

            console.log('Server response:', response.data); // Debug log

            const { success, data: voter, message } = response.data;

            if (!success) {
                throw new Error(message || "Authentication failed");
            }

            // Build the object to persist for the voting app
            const voterAuthData = {
                voterId: voter.voterId,
                email: voter.email,
                mobile: voter.mobile,
                fullName: voter.fullName,
                authenticatedAt: new Date().toISOString(),
                constituency: selectedDistrict || voter.city || 'General',
                state: selectedState || voter.state || 'General'
            };

            localStorage.setItem('voterAuthData', JSON.stringify(voterAuthData));

            setSuccessMessage(`✅ Authentication Successful!\nWelcome ${voter.fullName}!\nRedirecting to voting portal...`);

            setTimeout(() => {
                setIsAuthenticating(false);
                navigate('/OnlineVoting_Home');
            }, 3000);

            e.target.reset();
            generateCaptcha();

        } catch (err) {
            console.error("Authentication error:", err); // Debug log

            let errorMsg = "Authentication failed. Please try again.";

            if (err.code === 'ECONNABORTED') {
                errorMsg = "Request timeout. Please check your connection and try again.";
            } else if (err.response) {
                // Server responded with error status
                errorMsg = err.response.data?.message || err.response.data?.error || `Server error: ${err.response.status}`;
            } else if (err.request) {
                // Request was made but no response received
                errorMsg = "Unable to connect to server. Please check if the server is running.";
            } else {
                // Something else happened
                errorMsg = err.message || "An unexpected error occurred.";
            }

            setErrorMessage(`❌ ${errorMsg}`);
            setIsAuthenticating(false);
        }
    };

    // Input formatters - FIXED
    const handlePhoneInput = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        e.target.value = value;
    };

    const handleVoterIdInput = (e) => {
        let value = e.target.value.replace(/[^A-Za-z0-9]/g, '');
        e.target.value = value.toUpperCase();
    };

    const handleCaptchaInput = (e) => {
        let value = e.target.value.replace(/[^A-Za-z0-9]/g, '');
        e.target.value = value.toUpperCase();
    };

    const handleNameInput = (e) => {
        let value = e.target.value;
        // Allow only letters and spaces
        value = value.replace(/[^a-zA-Z\s]/g, '');
        // Capitalize first letter of each word
        value = value.replace(/\b\w/g, function (match) {
            return match.toUpperCase();
        });
        e.target.value = value;
    };

    // Handle input focus and blur for styling
    const handleInputFocus = (e) => {
        e.target.style.borderColor = '#2196F3';
        e.target.style.boxShadow = '0 0 0 2px rgba(33, 150, 243, 0.2)';
    };

    const handleInputBlur = (e) => {
        e.target.style.boxShadow = 'none';
        if (e.target.checkValidity() && e.target.value.trim()) {
            e.target.style.borderColor = '#4caf50';
        } else if (e.target.value.trim()) {
            e.target.style.borderColor = '#f44336';
        } else {
            e.target.style.borderColor = '#ddd';
        }
    };

    // Handle gallery item clicks
    const handleGalleryClick = (e) => {
        e.currentTarget.style.transform = 'scale(0.98)';
        setTimeout(() => {
            e.currentTarget.style.transform = 'translateY(-2px)';
        }, 150);
    };

    useEffect(() => {
        // Generate initial captcha
        generateCaptcha();

        // Clear any existing auth data when component mounts
        localStorage.removeItem('voterAuthData');

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }, []);

    return (
        <div>
            <div className="container">
                <section className="info-banner" id="info-banner-section">
                    <h3>🔒 Secure Voting Portal</h3>
                    <p>This is the official Election Commission of India portal for Bidhan Sabha elections. All voter information is encrypted and securely transmitted. Please ensure you have your valid Voter ID and registered mobile number before proceeding.</p>
                </section>

                <section className="section" id="voter-authentication">
                    <div className="section-header">
                        <div className="section-icon">👤</div>
                        <h2>Voter Authentication</h2>
                    </div>

                    {successMessage && (
                        <div className="success-message" style={{ display: 'block' }}>
                            <strong>{successMessage.split('\n')[0]}</strong><br />
                            {successMessage.split('\n').slice(1).map((line, index) => (
                                <span key={index}>{line}<br /></span>
                            ))}
                            {isAuthenticating && (
                                <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div className="loading-spinner"></div>
                                    <span>Please wait while we redirect you...</span>
                                </div>
                            )}
                        </div>
                    )}

                    {errorMessage && (
                        <div className="error-message" style={{ display: 'block' }}>
                            {errorMessage}
                        </div>
                    )}

                    <form className="login-form" onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="voterId">Voter ID <span className="required">*</span></label>
                            <input
                                type="text"
                                id="voterId"
                                name="voterId"
                                required
                                placeholder="Enter Voter ID (e.g., ABC1234567)"
                                maxLength="15"
                                minLength="6"
                                onInput={handleVoterIdInput}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                disabled={isAuthenticating}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address <span className="required">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Enter registered email address"
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                disabled={isAuthenticating}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mobile">Mobile Number <span className="required">*</span></label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                required
                                pattern="[6-9][0-9]{9}"
                                placeholder="10-digit mobile number"
                                maxLength="10"
                                minLength="10"
                                onInput={handlePhoneInput}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                disabled={isAuthenticating}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Full Name <span className="required">*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Name as per Voter ID"
                                minLength="3"
                                onInput={handleNameInput}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                disabled={isAuthenticating}
                            />
                        </div>

                        <div className="captcha-container">
                            <div className="captcha-label">Security Code <span className="required">*</span></div>
                            <div className="captcha-display">{captcha}</div>
                            <button
                                type="button"
                                className="captcha-refresh"
                                onClick={generateCaptcha}
                                disabled={isAuthenticating}
                            >
                                Refresh
                            </button>
                            <input
                                type="text"
                                className="captcha-input"
                                name="captcha"
                                required
                                placeholder="Enter code"
                                maxLength="5"
                                minLength="5"
                                onInput={handleCaptchaInput}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                disabled={isAuthenticating}
                            />
                        </div>

                        <button
                            type="submit"
                            className="login-btn"
                            disabled={isAuthenticating}
                        >
                            {isAuthenticating ? 'Authenticating...' : 'Authenticate & Proceed to Vote'}
                        </button>
                    </form>
                </section>

                <section className="section" id="Bidhan-sabha-representatives">
                    <div className="section-header">
                        <div className="section-icon">🏛️</div>
                        <h2>Bidhan Sabha Representatives</h2>
                    </div>

                    <p style={{ marginBottom: "25px", color: "#666", lineHeight: "1.6" }}>Select your state and district to view the current Bidhan Sabha members representing your constituency.</p>

                    <div className="selection-container">
                        <div className="form-group">
                            <label htmlFor="stateSelect">Select State</label>
                            <select
                                id="stateSelect"
                                name="state"
                                value={selectedState}
                                onChange={handleStateChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            >
                                <option value="">-- Choose Your State --</option>
                                <option value="west-bengal">West Bengal</option>
                                <option value="maharashtra">Maharashtra</option>
                                <option value="uttar-pradesh">Uttar Pradesh</option>
                                <option value="karnataka">Karnataka</option>
                                <option value="tamil-nadu">Tamil Nadu</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="districtSelect">Select District</label>
                            <select
                                id="districtSelect"
                                name="district"
                                value={selectedDistrict}
                                onChange={handleDistrictChange}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            >
                                <option value="">-- Choose Your District --</option>
                                {selectedState && districtData[selectedState] && districtData[selectedState].map(district => (
                                    <option key={district} value={district}>
                                        {district.split('-').map(word =>
                                            word.charAt(0).toUpperCase() + word.slice(1)
                                        ).join(' ')}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div id="membersContainer">
                        {showMembersTable && (
                            <table className="members-table" style={{ display: "table" }}>
                                <thead>
                                    <tr>
                                        <th>Serial No.</th>
                                        <th>Representative Name</th>
                                        <th>Aadhar ID</th>
                                        <th>Constituency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {members.length > 0 ? (
                                        members.map((member, index) => (
                                            <tr key={index}>
                                                <td style={{ fontWeight: "600" }}>{String(index + 1).padStart(2, '0')}</td>
                                                <td style={{ fontWeight: "600", color: "#2196F3" }}>{member.name}</td>
                                                <td style={{ fontFamily: "monospace" }}>{member.aadhar}</td>
                                                <td>{member.assembly}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" style={{ textAlign: "center", padding: "40px", color: "#666", fontStyle: "italic" }}>
                                                No representative data available for this district.<br />
                                                Please contact the Election Commission office for more information.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                </section>

                <section className="section" id="democracy-in-action">
                    <div className="section-header">
                        <div className="section-icon">📸</div>
                        <h2>Democracy in Action</h2>
                    </div>

                    <p style={{ marginBottom: "25px", color: "#666", lineHeight: "1.6" }}>Witness the democratic process through these glimpses of India's electoral journey and the institutions that uphold our democracy.</p>

                    <div className="gallery">
                        <div className="gallery-item" onClick={handleGalleryClick}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCHrhwzL5VUSSjPvzHd1FnOI0DxyMN52Grg&s" alt="Parliament House" />
                        </div>

                        <div className="gallery-item" onClick={handleGalleryClick}>
                            <img src="https://wpblogassets.paytm.com/paytmblog/uploads/2023/08/Blog_Paytm_Electronic-Voting-Machine-EVM-Take-a-Look-inside-for-more-Info-800x500.jpg" alt="Electronic Voting" />
                        </div>

                        <div className="gallery-item" onClick={handleGalleryClick}>
                            <img src="https://vajiramandravi.com/upsc-exam/wp-content/uploads/2025/01/data-207.jpg" alt="Citizen Participation" />
                        </div>

                        <div className="gallery-item" onClick={handleGalleryClick}>
                            <img src="https://img.manoramayearbook.in/content/dam/yearbook/learn/world/images/2020/may/election-commission.jpg" alt="Election Commission" />
                        </div>

                        <div className="gallery-item" onClick={handleGalleryClick}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZE88tj7As0l9vJfIfe0yJ_-4XKGYi5im9zg&s" alt="Democratic Victory" />
                        </div>

                        <div className="gallery-item" onClick={handleGalleryClick}>
                            <img src="https://i.ndtvimg.com/i/2016-09/evm_650x400_71473856309.jpg" alt="Vote Counting" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BidhanSabhaPortal;

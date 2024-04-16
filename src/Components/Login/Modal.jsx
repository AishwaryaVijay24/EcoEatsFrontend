import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModalLogin.css';
import { X, EyeOff, Eye } from 'lucide-react'; // Assuming Eye and EyeOff icons for password visibility
import axios from 'axios';
import { useAuth } from './AuthContext';

const backendUrl = process.env.ENVIRONMENT === "dev" ? "http://localhost:8000" : "https://eco-eats-website-back-end.vercel.app";

const Modal = ({ onClose }) => {
  const [action, setAction] = useState("Please Login to Continue");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  
  const submit = async (e) => {
    e.preventDefault();
    // Reset error message
    setError('');

    // Perform validation checks
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid phone number');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      if (action === "Please Register to Continue") {
        // If action is to register, send a POST request with signup data
        const response = await axios.post(backendUrl, {
          name,
          email,
          phoneNumber,
          password,
          countryCode
        });

        if (response.data === "exist") {
          setError('User already exists');
        } else if (response.data === "doesnotexist") {
          history("/");
        }
      }
      else {
        // If action is to login, send a POST request with login data
        const response = await axios.post(`${backendUrl}/login`, {
          email,
          password,
        });

        if (response.data.message === "Login successful") {
          history("/services"); // Redirect to the dashboard upon successful login
        } else {
          setError('Invalid email or password');
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setError('An error occurred during login');
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick = () => {
    setAction(action === "Please Login to Continue" ? "Please Register to Continue" : "Please Login to Continue");
  };

  return (
    <div>
      <div className='blurred-background'></div>
      <div className='blur-layer'></div>
      <div className='modal-content'>
        <button onClick={onClose} className='CloseButton'><X /></button>
        <div className="PageBlock">
          <p className="Registration" id="TextPage">{action}</p>
          <form className='FormContainer'>
            {action === "Please Register to Continue" && (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <div className="phone-number-input">
                    <input
                      className='CountryCode'
                      type="text"
                      placeholder="+91"
                      name="countryCode"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      className='TextFieldLogin'
                      id="PhoneField"
                      placeholder="Phone Number"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    className='TextFieldLogin'
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      backgroundImage: `url(${showPassword ? EyeOff : Eye})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right'
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                    className='TextFieldLogin'
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    style={{
                      backgroundImage: `url(${showPassword ? EyeOff : Eye})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right'
                    }}
                  />
                </div>
              </>
            )}

            {action === "Please Login to Continue" && (
              <>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    className='TextFieldLogin'
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    className='TextFieldLogin'
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      backgroundImage: `url(${showPassword ? EyeOff : Eye})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right'
                    }}
                  />
                </div>
              </>
            )}

            {error && <div className="error-message">{error}</div>}

            <div className="SignUP">
              <button type="submit" onClick={submit}>{action === "Please Login to Continue" ? "Login" : "Sign Up"}</button>
            </div>
          </form>

          <button onClick={handleLoginClick} className="SmallLogin">
            {action === "Please Login to Continue" ? "Don't have an account? Register" : "Already Have An Account? Login"}
          </button>

         
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ModalLogin.css';
import { X, EyeOff, Eye } from 'lucide-react'; // Assuming Eye and EyeOff icons for password visibility
import axios from 'axios';
import { useAuth } from './AuthContext';
  
const backendUrl= process.env.ENVIRONMENT==="dev"?"http://localhost:8000":"https://eco-eats-website-back-end.vercel.app"

const Modal = ({ onClose }) => {
  const [action, setAction] = useState("Please Login to Continue");

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setphoneNumber] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [countryCode, setcountryCode] = useState('');
  const history = useNavigate();
  const { isLoggedIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {

  };
 
  const submit = async (e) => {
    e.preventDefault()
    try {
      

      if (action === "Please Register to Continue") {
        // If action is to register, send a POST request with signup data
        try {
          alert("submitted");
          await axios.post(backendUrl, {
            name,
            email,
            phoneNumber,
            password,
            countryCode
          })
            .then(res => {
              if (res.data === "exist") {
                alert("user already exists")
              }
              else if (res.data === "doesnotexist") {
                history("/")
              }
            })
        }
        catch (e) {
          console.log(e);
        }
      }
      else {
        // If action is to login, send a POST request with login data
        // Inside the submit function in Modal.jsx
        try {
          // Send POST request to login endpoint
          const response = await axios.post(`${backendUrl}/login`, {
            email,
            password,
          });

          // Check the response from the server
          if (response.data.message === "Login successful") {
            // Redirect or perform any necessary action for successful login
            history("/services");// Example redirection to the dashboard
          }
          else {
            // Handle unsuccessful login
            alert("Invalid email or password");
          }
        } catch (error) {
          console.error("Error during login:", error);
          // Handle network errors or other issues
          alert("An error occurred during login");
        }

      }
    } catch (error) {
      console.log(error); // Log any errors to the console
    }
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
          <form  className='FormContainer'>
            {action === "Please Register to Continue" && (
              <>
                <div className="form-group">
                  <div className="ItemBlocks">
                    <label htmlFor="name">Name:</label>
                    <input
                      className='TextFieldLogin'
                      type="text"
                      id="name"
                      name="name"
                      placeholder='&nbsp;Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="ItemBlocks">
                    <label htmlFor="email">Email:</label>
                    <input
                      className='TextFieldLogin'
                      type="email"
                      id="email"
                      name="email"
                      placeholder='&nbsp; Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="ItemBlocks">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <div className="phone-number-input">
                      <input
                        className='CountryCode'
                        type="text"
                        placeholder="+91"
                        name="countryCode"
                        value={countryCode}
                        onChange={(e) => setcountryCode(e.target.value)}
                        required
                      />
                      <input
                        type="text"
                        className='TextFieldLogin'
                        id="PhoneField"
                        placeholder=" &nbsp;Phone Number"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setphoneNumber(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="ItemBlocks">
                    <label htmlFor="password">Password:</label>
                    <input
                      className='TextFieldLogin'
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder='&nbsp;Password'
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      required
                      style={{
                        backgroundImage: `url(${showPassword ? EyeOff : Eye})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right'
                      }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="ItemBlocks">
                    <label htmlFor="password">Confirm Password:</label>
                    <input
                      className='TextFieldLogin'
                      type={showPassword ? "text" : "password"}
                      id="confirmpassword"
                      name="confirmpassword"
                      placeholder='&nbsp;Confirm Password'
                      value={confirmPassword}
                      onChange={(e) => setconfirmPassword(e.target.value)}
                      required
                      style={{
                        backgroundImage: `url(${showPassword ? EyeOff : Eye})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right'
                      }}
                    />
                  </div>
                </div>
              </>
            )}


            {action === "Please Login to Continue" && (
              <>
                <div className="form-group">
                  <div className="ItemBlocks">
                    <label htmlFor="email">Email:</label>
                    <input
                      className='TextFieldLogin'
                      type="email"
                      id="email"
                      name="email"
                      placeholder='&nbsp;  Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="ItemBlocks">
                    <label htmlFor="password">Password:</label>
                    <input
                      className='TextFieldLogin'
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder='&nbsp;Password'
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      required
                      style={{
                        backgroundImage: `url(${showPassword ? EyeOff : Eye})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right'
                      }}
                    />
                  </div>
                </div>
                <div className="Remember-me">
                  <label>
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      onChange={handleChange}
                    />
                    <span className="checkmark"></span> Remember Me
                  </label>
                  <a id="Forgot-Password" href="/forgotpassword">Forgot Password?</a>
                </div>


              </>
            )}

            <div className="SignUP">
              <button type="submit" onClick={submit}>{action === "Please Login to Continue" ? "Login" : "Sign Up"}</button>
            </div>
          </form>

          <button onClick={handleLoginClick} className="SmallLogin">
            {action === "Please Login to Continue" ? "Don't have an account? Register" : "Already Have An Account? Login"}
          </button>

          <div className="OR-Line">
            <div className="Line-1"></div>
            <p className="PageOR">OR</p>
            <div className="Line-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

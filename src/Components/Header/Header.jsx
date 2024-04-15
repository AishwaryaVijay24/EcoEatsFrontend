import React, { useState } from 'react';
import { NavLink }  from 'react-router-dom';
import Logo from './Logo.png'; // Import your logo image
import './Header.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import CustomerLogout from '../Logout/CustomerLogout';


const Header = () => {
  const [showProfileAction, setShowProfileAction] = useState(false)
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/business');
  };

  const handleCustomers=()=>{
    navigate('/customer')
  }

  return (
    <header className="Header">
      <div className="HeaderLogo-Container">
        <img src={Logo} alt="Logo" />
        <div className="Header-Title-Container">
          <NavLink to="/" className="Header-Title-Page">EcoEats</NavLink>
        </div>
      </div>

      <nav className="HeaderNav-Container">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact-us">Contact Us</NavLink>
        <button className="Btn-Profile" onClick={() => setShowProfileAction(true)}>Logout</button>
         {showProfileAction && <CustomerLogout onClose={() => setShowProfileAction(false)} />}

      </nav>


      <div className="HeaderNavLink-Container">
        <button className="NavButton" onClick={handleCustomers}>Customer</button>
        <button className="NavButton" onClick={handleClick}>Business</button>
      </div>
    </header>
  );
}

export default Header;



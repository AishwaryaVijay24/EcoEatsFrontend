import React, { useState } from 'react';
import { NavLink }  from 'react-router-dom';
import Logo from './Logo.png'; // Import your logo image
import './Header.css'; // Import your CSS file
import Modal from '../Login/Modal';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const BusinessHeader = ({ ownerEmail }) => {
  const [showAction, setShowAction] = useState(false)
  const navigate = useNavigate();
  const {restaurantId}=useParams();
  const handleClick = () => {
    navigate('/business');
  };

  return (
    <header className="Header">
      <div className="HeaderLogo-Container">
        <img src={Logo} alt="Logo" />
        <div className="Header-Title-Container">
          <NavLink to="/" className="Header-Title-Page">EcoEats</NavLink>
        </div>
      </div>

      <nav className="HeaderNav-Container">
        <NavLink to={'/dashboard'}>Dashboard</NavLink>
      </nav>
      <nav className="HeaderNav-Container">
        <NavLink to={`/restdetails/${ownerEmail}`}>Restaurant Details</NavLink>
      </nav>
      <nav className="HeaderNav-Container">
        <NavLink to={`/menudetails/${restaurantId}`}>Menu Details</NavLink>
      </nav>

      <div className="HeaderNavLink-Container">
        <button className="NavButton" onClick={() => setShowAction(true)}>Customer</button>
        <button className="NavButton" onClick={handleClick}>Business</button>
        {showAction && <Modal onClose={() => setShowAction(false)} />}
      </div>
    </header>
  );
}

export default BusinessHeader;

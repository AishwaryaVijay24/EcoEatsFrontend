import React from 'react';
import { useNavigate } from 'react-router';
import './Sure.css'
const Sure = ({ onClose }) => {
  
 const navigate=useNavigate();

 const handleLogoutHere = () => {
    // Implement your logout logic here
    // For example, clear user session, redirect to login page, etc.
    
    // Here's an example of redirecting to the login page using React Router
    navigate('/businessLogin');
  };
  
  
  return (
    <div>
      <div className='blurred-background'></div>
      <div className='blur-layer'></div>
      <div className='LogoutDivContainer '>
 
        <div className="Logoutcard">
                <div className="headerLogout">
                    <div className="imageLogout"><svg aria-hidden="true" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
                        <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" strokeLinejoin="round" strokeLinecap="round" />
                    </svg></div>
                    <div className="contentLogout">
                        <span className="titleLogout">Logout account</span>
                        <p className="messageLogout">Are you sure you want to logout?</p>
                    </div>
                    <div className="actionsLogout">
                        <button className="desactivateLogout" type="button" onClick={handleLogoutHere}>Logout</button>
                        <button className="cancelLogout" type="button" onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Sure;
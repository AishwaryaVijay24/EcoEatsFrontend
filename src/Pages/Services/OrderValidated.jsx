import React from 'react';
import './OrderValidated.css';
import { useNavigate } from 'react-router';

const OrderValidated = ({ onClose }) => {
const navigate= useNavigate();
    const handleConfirm =()=>{
        navigate('/services');
    }
  return (
    <div>
        <div className='blurred-background'>
     
      <div className='LogoutDivContainer '>
      <div className="Logoutcard">
  <div className="Ordercard"> 
    
    <div className="Orderheader"> 
      <div className="Orderimage">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
      </div> 
      <div className="Ordercontent">
        <span className="Ordertitle">Order validated</span> 
        <p className="Ordermessage">Thank you for your purchase. Please Pick Up Your Parcel</p> 
      </div> 
      <div className="Orderactions">
        <button className="Orderhistory" type="button" onClick={handleConfirm}>Confirm</button> 
        <button className="Ordertrack" type="button" onClick={onClose}>Cancel</button> 
      </div> 
    </div> 
  </div>
</div>
</div>
</div>
</div>



  )
}

export default OrderValidated
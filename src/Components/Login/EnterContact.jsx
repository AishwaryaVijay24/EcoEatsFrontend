import React, { useState } from 'react';
import './ModalLogin.css';
import { X } from 'lucide-react'; // Assuming Eye and EyeOff icons for password visibility
import axios from 'axios';
const EnterContact = ({ onClose }) => {
  
  const [contactName, setcontactName] = useState('')
  const [contactEmail, setcontactEmail ]= useState('')
  const [contactMessage, setcontactMessage ]= useState('')

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try{
    await axios.post("http://localhost:8000/contactus",{
      contactName,
      contactEmail,
      contactMessage
    })
  }catch(e){
    console.log(e);
  }
  };



  return (
    <div>
      <div className='blurred-background'></div>
      <div className='blur-layer'></div>
      <div className='modal-content'>
        <button onClick={onClose} className='CloseButton'><X /></button>
        <div className="PageBlock">
          <p className="Registration" id="TextPage">Please Enter Your Information</p>
          <form className='FormContainer'>
            <div className="form-group">
              <div className="ItemBlocks">
                <label htmlFor="name">Name:</label>
                <input
                  className='TextFieldLogin'
                  type="text"
                  id="Contactname"
                  name="Contactname"
                  placeholder='&nbsp;Name'
                  value={contactName}
                  onChange={(e)=>setcontactName(e.target.value)}
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
                  id="Contactemail"
                  name="Contactemail"
                  placeholder='&nbsp; Email'
                  value={contactEmail}
                  onChange={(e)=>setcontactEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group" >
              <div className="ItemBlocks" >
                <label htmlFor="message" >Message:</label>
                <textarea
                  className='ContactTextField'
                  id="Contactmessage"
                  name="Contactmessage"
                  placeholder='&nbsp; Message'
                  value={contactMessage}
                  onChange={(e)=>setcontactMessage(e.target.value)}
                  rows="4" // Adjust the number of rows as needed
                  required
                />
              </div>
            </div>

            <div className="SignUP">
              <button type="submit" onClick={handleContactSubmit}>Contact Us</button>
            </div>
          </form>


        </div>
      </div>
    </div>
  );
};

export default EnterContact;


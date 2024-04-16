import React from 'react';
import { useState } from 'react';
import './ContactUs.css'
import EnterContact from '../../Components/Login/EnterContact';
import ContactUsPlant from './PlantContact.png';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Contact from './contact-removebg-preview.png'
const ContactUs = () => { 
  const [showContact, setShowContact]=useState(false)

  return (
    <div className='ContactUs-Page'>
      <Header/>
      <div className="Contact-Content">
        <div className="FirstPartAbout">
          <div className="Contact-Wastage">
            <div className="Content-Wastage">
              <div className="Contact-Title">
                <p>Want To  Know More?<br />
                  Reach Out To Us !</p>
              </div>
              <div className="Button-Div">
              <button className="fancy" onClick={() => setShowContact(true)}>
                <span className="top-key" />
                <span className="text">Contact Us</span>
                <span className="bottom-key-1" />
                <span className="bottom-key-2" />
              </button>
              {showContact && <EnterContact onClose={()=> setShowContact(false)}/>}
              </div>
              <div className="Contact-Line"></div>
              
                <div className="Contact-Logo">
                  <img src={ContactUsPlant} alt="PlantLogo" />
                </div>
                <div className="Contact-Info-Container">
                <div className="PlantText">
                  <p className="">Begin your journey with EcoEats and gain effortless access to sustainable food options. Join us today and start making eco-friendly choices for a better tomorrow.</p>
                </div>
                
              </div>
              
            </div>
            
          </div>
          <div className="Contact-Image-Container">
        
        <div className="reflection-content-Contact">
          {/* Add content for reflection effect */}
          <img src={Contact} alt="Green" />
        </div>
      </div>
        </div>






      </div>
      <Footer/>
    </div>
  )
}

export default ContactUs
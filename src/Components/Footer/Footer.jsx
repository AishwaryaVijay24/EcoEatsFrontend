import React from 'react';
import './Footer.css';
import Instagram from './Instagram.png';
import Facebook from './Facebook.png';
import LinkedIn from './LinkedIn.png';
import Twitter from './Twitter.png';
const Footer = () => {
  return (
    <div className='footer'>
      <div className="Footerflex">
        <div className='firstblock'>
          <div className="link-group">
            <button className="PrivacyPolicy">Privacy Policy</button>
            <button className="PrivacyPolicy">Cookie Policy</button>
            <button className="PrivacyPolicy">Terms And Conditions</button>
            <button className="PrivacyPolicy">Anti-Harassment Policy</button>
            <button className="PrivacyPolicy">Candidate Notice</button>
          </div>
        </div>
        <div className='firstblock'>
          <div className="link-group">
            <button className="PrivacyPolicy">Work</button>
            <button className="PrivacyPolicy">Community</button>
            <button className="PrivacyPolicy">Careers</button>
            <button className="PrivacyPolicy">DSA Disclosure</button>
            <button className="PrivacyPolicy">Contact</button>
          </div>
        </div>
        <div className='firstblock'>
          <div className="link-group">
            <button className="PrivacyPolicy">Support</button>
            <button className="PrivacyPolicy">Board Of Members</button>
            <button className="PrivacyPolicy">MyStore</button>
            <button className="PrivacyPolicy">Code Of Ethics</button>
            <button className="PrivacyPolicy">Legal</button>
          </div>
        </div>
        <div className='PageFooter'>
          <div className="ButtonskaCSS">
            <button className="instafb">
              <img src={Instagram} alt="Instagram emblem" />
            </button>
            <button className="instafb">
              <img src={Facebook} alt="Facebook emblem" />
            </button>
            <button className="instafb">
              <img src={Twitter} alt="Twitter emblem" />
            </button>
            <button className="instafb">
              <img src={LinkedIn} alt="LinkedIn emblem" />
            </button>
          </div>
          <div className="blockTextu">
            <div className="textu">Copyright © 2024  All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

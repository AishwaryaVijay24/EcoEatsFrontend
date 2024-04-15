import React from 'react';
import '../About/About.css';
import { useNavigate } from 'react-router-dom';
import './Business.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Business = () => {
    const navigate = useNavigate();

    const submitBusiness=()=>{
        navigate('/businessLogin');
    };

    return (
        <div className='About-Page'>
            <Header/>
            <div className="No-Wastage">
                <div className="PortionOne">
                    <div className="FirstPartAbout">
                        <div className="Food-Wastage">
                            <div className="Text-Wastage">
                                <div className="Food-Title">
                                    <p>OWN A  <span id="waste-id">PROFIT </span> BUSINESS?</p>
                                </div>
                                <div className="Food-Content" id="ProfitSurplus">
                                    <p >Maximize your surplus resources to enhance your financial standing.</p>
                                </div>

                                <div className="ProfitButtonReg">

                                    <button class="BusinessRegistration-Button" onClick={submitBusiness}>
                                        <span class="Businesstext-container">
                                            <span class="Businesstext">Register Your Business</span>
                                        </span>
                                    </button>

                                </div>

                            </div>
                        </div>
                        <div className="Image-Wastage">
                            <div className="Green-Food reflection-container">

                                <div className="reflection-content">
                                    {/* Add content for reflection effect */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default Business;

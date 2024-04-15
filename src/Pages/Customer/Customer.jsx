import React,{useState} from 'react';
import '../About/About.css';
import '../Business/Business.css';
import Header from '../../Components/Header/Header';
import Modal from '../../Components/Login/Modal';
import Footer from '../../Components/Footer/Footer';


const Customer = () => {
    const [showAction, setShowAction] = useState(false)

    return (
        <div className='About-Page'>
            <Header/>
            <div className="No-Wastage">
                <div className="PortionOne">
                    <div className="FirstPartAbout">
                        <div className="Food-Wastage">
                            <div className="Text-Wastage">
                                <div className="Food-Title">
                                    <p>WANT TO <span id="waste-id">REGISTER</span> ?</p>
                                </div>
                                <div className="Food-Content" id="ProfitSurplus">
                                    <p >Join Eco Eats to register as a sustainable food-conscious customer and help the environment</p>
                                </div>

                                <div className="ProfitButtonReg">

                                    <button class="BusinessRegistration-Button" onClick={() => setShowAction(true)}>
                                        <span class="Businesstext-container">
                                            <span class="Businesstext">Register As Customer</span>
                                        </span>
                                    </button>
                                    {showAction && <Modal onClose={() => setShowAction(false)} />}


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

export default Customer;
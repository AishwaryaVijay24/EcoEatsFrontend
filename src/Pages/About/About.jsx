import React from 'react';
import './About.css';
import { LuArrowDownNarrowWide } from "react-icons/lu";
import Green from './food-green.jpg';
import { Leaf, SmilePlus } from 'lucide-react';
import { PiggyBank } from 'lucide-react';
import { Smile } from 'lucide-react';
import { Sprout } from 'lucide-react';
import { HeartHandshake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


const About = () => {
  const navigate = useNavigate();
  const handleClickArrow = () => {
  
    window.scrollBy({
      top: window.innerHeight, // Scroll down by the height of the viewport
      behavior: 'smooth' // Add smooth scrolling effect
    });// Reset after 300ms
  };
  const handleClick = () => {
    navigate('/business');
  };

  return (
    <div className='About-Page'>
      <Header/>
        <div className="PortionOne">
        <div className="FirstPartAbout">
          <div className="Food-Wastage">
            <div className="Text-Wastage">
              <div className="Food-Title">
                <p>Lets prevent <span id="waste-id">food wastage</span> together !</p>
              </div>
              <div className="Food-Content">
                <p >Reducing food waste is a big problem, but we can help solve it. <br />
                  EcoEats is an app that lets you save leftover food from your favorite places at a good price.
                  You can use the app to find shops and restaurants nearby, and buy surprise bags of extra food to stop it from
                  being thrown away.</p>
              </div>

              <div className="Icon-Container">
                <button className="Arrow-Icon" onClick={handleClickArrow }>
                  <LuArrowDownNarrowWide />
                </button>
              </div>
            </div>
          </div>
          <div className="Image-Wastage">
      <div className="Green-Food reflection-container">
        <img src={Green} alt="Green" />
        <div className="reflection-content">
          {/* Add content for reflection effect */}
        </div>
      </div>
    </div>
        </div>
        <div className="SecondPart">
          <div className="IconWrapper">
            <Leaf className='Icon-CSS' id="LeafMargin"/>
            <PiggyBank className='Icon-CSS' id="PiggyMargin"/>
            <SmilePlus className='Icon-CSS'id="SmileMargin" />
          </div>
        </div>
        <div className="TextPart">
          <div className="TextPortion">
            <p className="Title-CSS">Environmental</p>
            <span id="Text-CSS">Food waste is responsible for 10% of greenhouse gas emissions 
              </span>
          </div>

          <div className="TextPortion">
            <p className="Title-CSS">Economical</p>
            <span id="Text-CSS">Wasting food costs us $1.2 trillion each year which could be used to feed so many people
              </span>
          </div>
          <div className="TextPortion">
            <p className="Title-CSS">Social</p>
            <span id="Text-CSS">We waste 2.5 billion tonnes of food annually whilst billions of people sleep hungry
              </span>
          </div>
        </div>
        </div>
        <div className="PartTwo">
        <div className="Image-Wastage" id="Image-Bg">
            <div className="Green-Food" id="Image-Bg">
              <img src={Green} alt="Green" />
            </div>
          </div>

          <div className="Food-Wastage" id="Image-Bg">
            <div className="Text-Wastage" id="Image-Bg">
              <div className="Food-Title" id="Image-Bg">
                <p>Unlock  <span id="waste-id">Value</span> From Your Surplus Food </p>
              </div>
              <div className="Food-Content" id="Image-Bg">
                <p >Unsold food at the end of the day? We can help! Join the thousands of businesses using EcoEats 
                  to put your surplus straight into the hands of happy customers 
                  and give good food a second chance.</p>
              </div>
              <div className="New-Ideas">
                <div className="IdeaOne">
                  <div id="Sprout">
                    <Sprout className='Icon-CSS ' id="ImageSprout"/>
                    <p id="TextSprout">REDUCE YOUR WASTE AND HELP THE ENVIRONMENT.</p>
                  </div>
                </div>
                <div className="IdeaOne">
                  <div id="Sprout">
                    <Smile className='Icon-CSS ' id="ImageSprout"/>
                    <p id="TextSprout">TURN YOUR SURPLUS FOOD INTO EXTRA INCOME WITH MINIMAL EFFORT.</p>
                  </div>
                </div>
                <div className="IdeaOne">
                  <div id="Sprout">
                    <HeartHandshake className='Icon-CSS ' id="ImageSprout"/>
                    <p id="TextSprout">INCREASE VISIBILITY AND ATTRACT NEW CUSTOMERS BOTH ON AND OFF THE APP.</p>
                  </div>
                </div>
                <div className="IdeaOne" id="RegButton">
                    <button className='Registration-Button' onClick={handleClick}>
                      Click To Register Your Business
                    </button>
                   
                </div>
                
              </div>

              
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  )
}

export default About;

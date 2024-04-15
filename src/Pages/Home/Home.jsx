import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import Video from './Video.mp4'; // Adjust the path to your video file
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div className="homePage">
      <Header />
      <div className="HomeContainer">
        <div className="video-container">
          <video autoPlay loop muted className="video-background">
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;

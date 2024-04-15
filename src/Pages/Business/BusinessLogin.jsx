import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Video from '../Home/Video.mp4'
import Footer from '../../Components/Footer/Footer';
const BusinessLoginRegister = () => {
  const [Owneremail, setOwnerEmail] = useState('');
  const [Ownerpassword, setOwnerPassword] = useState('');
  const navigate =useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission with email and password
    console.log("Email:", Owneremail);
    console.log("Password:", Ownerpassword);
  };

  const submitBusinessLogin = async (e) => {
    e.preventDefault();
    try{
     await axios.post("http://localhost:8000/submitbusinesslogin",{
      Owneremail,
      Ownerpassword
    });
    
    navigate(`/restdetails/${Owneremail}`);
  
  }catch(e){
    console.log(e);
  }
  };
const onSignupClick =(e)=>{
  navigate('/businessRegister');
}
  return ( 
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLoginSubmit}>
            <input
              type="email"
              autoComplete="email"
              required
              value={Owneremail}
              onChange={(e) => setOwnerEmail(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
            <input
              type="password"
              autoComplete="current-password"
              required
              value={Ownerpassword}
              onChange={(e) => setOwnerPassword(e.target.value)}
              className="appearance-none block w-full mt-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
            />
            <div>
              <button
              onClick={submitBusinessLogin}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-800 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?
            <button
              className="font-medium text-blue-600 hover:text-blue-300"
              onClick={onSignupClick}
            >
              Sign up
            </button>
          </p>
        </div>
        
      </div>
      <Footer/>
    </motion.div>
  );
};

export default BusinessLoginRegister;

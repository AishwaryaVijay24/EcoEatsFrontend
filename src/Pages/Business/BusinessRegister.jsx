import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Footer from '../../Components/Footer/Footer';

const backendUrl= process.env.ENVIRONMENT==="dev"?"http://localhost:8000":"https://eco-eats-website-back-end.vercel.app"


const BusinessSignupForm = () => {
  const [Ownername, setOwnername] = useState('');
  const [Owneremail, setOwneremail] = useState('');
  const [Ownerpassword, setOwnerpassword] = useState('');
  const [Ownerphone, setOwnerphone] = useState('');
  const [Ownercity, setOwnercity] = useState('');
  const [OwnerconfirmPassword, setOwnerConfirmPassword] = useState('');
  const [OwnerkycFile, setOwnerKycFile] = useState(null);
  const navigate = useNavigate();
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup form submission
    console.log("Name:", Ownername);
    console.log("Email:", Owneremail);
    console.log("Password:", Ownerpassword);
    console.log("Phone:", Ownerphone);
    console.log("City:", Ownercity);

  };


  const onLoginClick = (e) => {
    navigate('/businessLogin');
  }

  const submitBusinessRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${backendUrl}/submitbusinessregistration`, {
        Ownername,
        Owneremail,
        Ownerphone,
        Ownerpassword,
        Ownercity
      });

      navigate(`/restdetails/${Owneremail}`);

    } catch (e) {
      console.log(e);
    }
  };


  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Create an account
            </h2>
          </div>
          <form className="mt-8 space-y-6" >
            <input
              type="text"
              autoComplete="name"
              required
              value={Ownername}
              onChange={(e) => setOwnername(e.target.value)}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Name"
              rules={[{
                required: true,
                message: 'please input your name!',
              }]}
            />
            <input
              type="email"
              autoComplete="email"
              required
              value={Owneremail}
              onChange={(e) => setOwneremail(e.target.value)}
              className="appearance-none block w-full mt-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
            <input
              type="password"
              autoComplete="new-password"
              required
              value={Ownerpassword}
              onChange={(e) => setOwnerpassword(e.target.value)}
              className="appearance-none block w-full mt-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
            />
            <input
              type="text"
              autoComplete="tel"
              required
              value={Ownerphone}
              onChange={(e) => setOwnerphone(e.target.value)}
              className="appearance-none block w-full mt-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Phone number"
            />
            <input
              type="text"
              autoComplete="address-level1"
              required
              value={Ownercity}
              onChange={(e) => setOwnercity(e.target.value)}
              className="appearance-none block w-full mt-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="City"
            />
            <input
              type="password"
              autoComplete="new-password"
              required
              value={OwnerconfirmPassword}
              onChange={(e) => setOwnerConfirmPassword(e.target.value)}
              className="appearance-none block w-full mt-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Confirm Password"
            />
            <div className="mt-4">
              <label htmlFor="kycFile" className="block text-sm font-medium text-gray-500">
                Upload KYC Document
              </label>
              <input
                type="file"
                id="kycFile"
                name="kycFile"
                accept=".pdf,.jpg,.jpeg,.png"
                required
                onChange={(e) => setOwnerKycFile(e.target.files[0])}
                className="mt-1 py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <button onClick={submitBusinessRegister}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  bg-green-800 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?
            <button
              className="font-medium text-blue-600 hover:text-blue-300"
              onClick={onLoginClick}
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
      <Footer/>
    </motion.div>
  );
};

export default BusinessSignupForm;

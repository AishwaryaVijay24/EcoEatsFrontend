import React, { useState } from 'react';
import BusinessHeader from '../../../Components/Header/BusinessHeader';
import axios from 'axios';
import { useNavigate } from 'react-router';
import BusinessLogout from '../../../Components/Logout/businessLogout';
import Footer from '../../../Components/Footer/Footer';

const backendUrl= process.env.ENVIRONMENT==="dev"?"http://localhost:8000":"https://eco-eats-website-back-end.vercel.app"

const RestDetails = () => {
    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantAddress, setRestaurantAddress] = useState('');
    const [restaurantImage, setRestaurantImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission for restaurant details
        console.log({
            restaurantName,
            restaurantAddress,
            restaurantImage
        });
    };

    const submitRestDetails = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${backendUrl}/restdetails`, {
                restaurantName,
                restaurantAddress,
                restaurantImage
            });
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
        }
    }

    const submitDashboard= async(e)=>{
        navigate('/dashboard');
    }

    function convertToBase64(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setRestaurantImage(reader.result); // Update state with base64 data
        };
        reader.onerror = function (error) {
            console.error("Error:", error);
        };
    }


    return (
        <div style={{
            width: 'auto',
            height: '100vh',
            backgroundColor: 'antiquewhite',
          }}>
            <BusinessHeader />
            <BusinessLogout/>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md mt-8" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                background: 'linear-gradient(45deg, #ccfbf1, #166534)',
                padding: '30px',
                width: '450px',
                borderRadius: '20px',
                fontFamily:
                    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                transition: 'background 0.3s ease',
                marginBottom:'3rem'
            }}>
                <h2 className="text-2xl font-semibold text-center text-white mb-8">Add Restaurant Details</h2>
                <label className="block" style={{ color: 'white', fontWeight: '600' }}>
                    <span className="text-gray-700">Restaurant Name:</span>
                    <input type="text"
                        value={restaurantName}
                        onChange={(e) => setRestaurantName(e.target.value)}
                        className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-4 py-2" />
                </label>
                <label className="block mt-4" style={{ color: 'white', fontWeight: '600' }}>
                    <span className="text-gray-700">Address:</span>
                    <input type="text" value={restaurantAddress} onChange={(e) => setRestaurantAddress(e.target.value)} className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-4 py-2" />
                </label>

                <label className="block mt-4" style={{ color: 'white', fontWeight: '600' }}>
                    <span className="text-gray-700">Image:</span>
                    <input type="file" accept="image/*" onChange={convertToBase64} className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-4 py-2" />

                    {restaurantImage && (
                        <img width={100} height={100} src={restaurantImage} alt="Restaurant" />
                    )}
                </label>
                <button type="submit" className="mt-4 bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm"
                    onClick={submitRestDetails}>Submit Restaurant Details</button>
                <button type="submit" className="mt-4 bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm"
                    onClick={submitDashboard}>Nothing To Add Move To Dashboard!</button>
            </form>
            <Footer className="sm:mt-8"/>
        </div>

    );
};

export default RestDetails;



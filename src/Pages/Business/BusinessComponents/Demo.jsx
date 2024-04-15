
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BusinessHeader from '../../../Components/Header/BusinessHeader';
import BusinessLogout from '../../../Components/Logout/businessLogout';
import { useNavigate } from 'react-router';
const Demo = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const addmenu = (restaurantId) => {
        try {
            navigate(`/menudetails/${restaurantId}`);

        } catch (error) {
            console.error('Error navigating to dashboard:', error);
        }

    }
    useEffect(() => {
        // Function to fetch restaurant details from the backend
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get("http://localhost:8000/restaurants");
                if (response.data && Array.isArray(response.data)) {
                    setRestaurants(response.data);
                } else {
                    throw new Error("Invalid response structure");
                }
            } catch (error) {
                console.error('Error fetching restaurants:', error);
                setError("Error fetching restaurants. Please try again later.");
            }
        };

        fetchRestaurants();
    }, []); // Call the function only once on component mount

    return (
        <div>
            <BusinessHeader />
            <BusinessLogout />

            {error && <p>{error}</p>}
            {restaurants.map((restaurant, index) => (
                <button key={index} onClick={() => addmenu(restaurant._id)}>
                    <div className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all">
                        {restaurant.restaurantImage && <img src={restaurant.restaurantImage} alt="Restaurant" className="w-44 card1img aspect-square text-[#abd373] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto" />}
                        <p className="cardtxt font-semibold text-gray-600 tracking-wider group-hover:text-gray-700 text-xl">{restaurant.restaurantName}</p>
                        <p className="blueberry font-semibold text-gray-600 text-xs">{restaurant.restaurantAddress}</p>
                        <div className="ordernow flex flex-row justify-between items-center w-full">
                            <p className="ordernow-text text-[#abd373] font-semibold group-hover:text-gray-800"></p>
                        </div>
                    </div>
                </button>
            ))}
        </div>
    );
};

export default Demo;

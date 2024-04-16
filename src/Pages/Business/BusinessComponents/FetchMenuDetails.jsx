import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BusinessHeader from '../../../Components/Header/BusinessHeader';
import './FetchMenuDetails.css'
import BusinessLogout from '../../../Components/Logout/businessLogout';
import Done from '../../../Components/Logout/Done';
import Footer from '../../../Components/Footer/Footer';

const backendUrl= process.env.ENVIRONMENT==="dev"?"http://localhost:8000":"https://eco-eats-website-back-end.vercel.app"

const FetchMenuDetails = () => {
    const { restaurantId } = useParams();
    const [menuItems, setMenuItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get(`${backendUrl}/menuitems/${restaurantId}`);
                console.log('Response from backend:', response); // Log received data
                if (response.data.success === true && Array.isArray(response.data.result)) {
                    setMenuItems(response.data.result);
                }
            } catch (error) {
                console.error('Error fetching menu items:', error);
                setError("Error fetching menu items. Please try again later.");
            }
        };
        fetchMenuItems();
    }, [restaurantId]);

    const handleRemoveItem = async (itemName) => {
        try {
            await axios.delete(`${backendUrl}/menuitems/${itemName}`);
            setMenuItems(prevItems => prevItems.filter(item => item.itemName !== itemName));
        } catch (error) {
            console.error('Error removing menu item:', error);
            setError("Error removing menu item. Please try again later.");
        }
    };
    

    return (
        <div>
            <BusinessHeader />
            <BusinessLogout/>
            {error && <p>{error}</p>}
            <ul>
                {menuItems.map((item, index) => {
                    try {
                        return (
                            <div class="card-container">
                                <div class="card" key={index}>
                                    <div class="card-details">
                                        <p class="text-title">Name: {item.itemName}</p>
                                        <p class="text-body">
                                            <p>Price: {item.itemPrice}</p>
                                            <p>Category: {item.itemCategory}</p>
                                        </p>
                                    </div>
                                    <button class="card-button" onClick={() => handleRemoveItem(item.itemName)}>Remove Item</button>
                                </div>
                            </div>
                        );
                    } catch (error) {
                        console.error('Error rendering menu item:', error);
                        return null; // Return null for the problematic item
                    }
                })}
            </ul>
            <Done/>
            <Footer/>
        </div>

    );
};

export default FetchMenuDetails;



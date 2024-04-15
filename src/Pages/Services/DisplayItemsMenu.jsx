import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Services.css';
import './DisplayItemMenu.css';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import CardButton from './CardButton';
import Cart from './Cart';
import Footer from '../../Components/Footer/Footer';

const DisplayItemsMenu = () => {
    const { restaurantId } = useParams();
    const [menuItems, setMenuItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [error, setError] = useState(null);

    const addToCart = (item) => {
        setCart([...cart, { ...item, quantity: 1 }]);
    };

    const removeFromCart = (itemId) => {
        const itemIndex = cart.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            const updatedCart = [...cart];
            if (updatedCart[itemIndex].quantity > 1) {
                updatedCart[itemIndex].quantity -= 1; // Decrease quantity
            } else {
                updatedCart.splice(itemIndex, 1); // Remove item if quantity is 1
            }
            setCart(updatedCart);
        }
    };

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/menuitems/${restaurantId}`);
                console.log('Response from backend:', response); // Log received data
                if (response.data.success === true && Array.isArray(response.data.result)) {
                    const itemsWithScore = response.data.result.map(item => ({ ...item, score: 0 }));
                    setMenuItems(itemsWithScore);
                }
            } catch (error) {
                console.error('Error fetching menu items:', error);
                setError("Error fetching menu items. Please try again later.");
            }
        };
        fetchMenuItems();
    }, [restaurantId]);


    
    return (
        <div className='Services-Container'>
            <Header />
            <div className="Service-Title"> Select the items you want and add them to cart</div>
            <div className="ServicesPage">
                <div className="PageOfServices">
                    {error && <p>{error}</p>}
                    <div className="DisplaycardContainer"> {/* Flex container for cards */}
                        {menuItems.map((item, index) => {
                            try {
                                return (
                                    <div className="Displaycard" key={index}>
                                        <div className="Displaycard__wrapper">
                                            <p className="Displaycard__title">{item.itemName}</p>
                                            <p className="Displaycard__subtitle"><br />Category: {item.itemCategory}</p>
                                        </div>
                                        <div className="Displaycard__price"><br />Rs: {item.itemPrice}</div>
                                        <div className="Displaycard__wrapper"><br />
                                            
                                        </div>
                                        <button className="AddToCartButton" onClick={() => addToCart(item)}>+</button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button className="AddToCartButton" onClick={() => removeFromCart(item.id)}>  -</button>
                                    </div>
                                );
                            } catch (error) {
                                console.error('Error rendering menu item:', error);
                                return null; // Return null for the problematic item
                            }
                        })}
                    </div>
                </div>
            </div>
            <CardButton />
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="ForContainerCart">
            <Cart cart={cart} />
            </div>
            <Footer/>
        </div>
    );
};

export default DisplayItemsMenu;




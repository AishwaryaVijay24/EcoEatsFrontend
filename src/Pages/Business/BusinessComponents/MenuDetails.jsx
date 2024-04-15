import React, { useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import BusinessHeader from "../../../Components/Header/BusinessHeader";
import BusinessLogout from "../../../Components/Logout/businessLogout";

const backendUrl= process.env.ENVIRONMENT==="dev"?"http://localhost:8000":"https://eco-eats-website-back-end.vercel.app"

const MenuDetails = () => {
    const [items, setItems] = useState([{ itemName: '', itemPrice: '', itemCategory: '' }]);
    const { restaurantId } = useParams();
    const navigate = useNavigate();
    const handleItemChange = (index, event) => {
        const { name, value } = event.target;
        const newItems = [...items];
        newItems[index][name] = value;
        setItems(newItems);
    };

    const addItem = () => {
        setItems([...items, { itemName: '', itemPrice: '', itemCategory: '' }]);
    };

    const removeItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    const handleNothing=(e)=>{
        navigate(`/displaymenu/${restaurantId}`);

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission for menu items
        console.log({ items });
    };

    const handleSubmitMenu = async (e) => {
        e.preventDefault();
        try {
            for (const item of items) {
                await axios.post(`${backendUrl}/menuitems`, { ...item, restaurantId });
            }
            console.log("Menu items submitted successfully!");
            navigate(`/displaymenu/${restaurantId}`);
            // Optionally, you can redirect the user or show a success message here
        }
        catch (e) {
            console.log(e);
        }
    };

    return (
        <div
        style={{
            width: 'auto',
            height: 'auto',
            backgroundColor: 'antiquewhite',
           
          }}>
            <BusinessHeader />
            <BusinessLogout/>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md mt-8"
                style={{
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
                    
                }}
            >
                <h2 className="text-3xl font-semibold text-center text-white mb-8">Add Menu Items</h2>
                {items.map((item, index) => (
                    <div key={index} className="mt-4">
                        <label className="block" style={{ color: 'white', fontWeight: '600' }}>
                            <span className="text-gray-900">Item Name:</span>
                            <input
                                type="text"
                                name="itemName"
                                value={item.itemName}
                                onChange={(e) => handleItemChange(index, e)}
                                className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-indigo-100 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-4 py-2"
                                style={{ marginLeft: '10px', borderRadius: '10rem', border: 'none', height: '100%' }}
                            />
                        </label>
                        <label className="block mt-4" style={{ color: 'white', fontWeight: '600' }}>
                            <span className="text-gray-900">Item Price:</span>
                            <input
                                type="text"
                                name="itemPrice"
                                value={item.itemPrice}
                                onChange={(e) => handleItemChange(index, e)}
                                className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-4 py-2"
                                style={{ marginLeft: '10px', borderRadius: '10rem', border: 'none', height: '100%' }}
                            />
                        </label>
                        <label className="block mt-4" style={{ color: 'white', fontWeight: '600' }}>
                            <span className="text-gray-900">Item Category:</span>
                            <select
                                name="itemCategory"
                                value={item.itemCategory}
                                onChange={(e) => handleItemChange(index, e)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 px-4 py-2"
                                style={{
                                    marginLeft: '10px',
                                    borderRadius: '10rem',
                                    border: 'none',
                                    height: '100%',
                                    backgroundColor: '#f5f5f5', // Light grey background color
                                    color: 'black', // Black text color
                                  }}  >
                                <option value="Pizza">Pizza</option>
                                <option value="Burger">Burger</option>
                                <option value="Noodles">Noodles</option>
                                <option value="Roti-sabji">Roti-sabji</option>
                                <option value="Rice bowls">Rice bowls</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Others">Others</option>
                            </select>
                        </label>
                        <button
                            type="button"
                            onClick={() => removeItem(index)}
                            className="mt-2 text-sm text-red-600 hover:text-red-700"
                            style={{ marginLeft: '72%', cursor: 'pointer' }}
                        >
                            Remove Item
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addItem}
                    className="mt-4 bg-green-900 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm"
                    style={{ cursor: 'pointer' }}
                >
                    Add Item
                </button>
                
                <button
                    type="submit"
                    className="mt-4 bg-green-900 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm"
                    onClick={handleSubmitMenu}
                    style={{ cursor: 'pointer' }}
                >
                    Submit Menu Items
                </button>
                <button
                    type="button"
                    onClick={handleNothing}
                    className="mt-4 bg-green-900 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm"
                    style={{ cursor: 'pointer' }}
                >
                    Nothing To Add!
                </button>
            </form>

        </div>
    );
};

export default MenuDetails;

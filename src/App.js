import React from "react";
// import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Business from "./Pages/Business/Business";
import BusinessLoginRegister from "./Pages/Business/BusinessLogin";
import BusinessSignupForm from "./Pages/Business/BusinessRegister";
import RestDetails from "./Pages/Business/BusinessComponents/RestDetails";
import MenuDetails from "./Pages/Business/BusinessComponents/MenuDetails";
import Demo from "./Pages/Business/BusinessComponents/Demo";
import Sure from "./Components/Logout/Sure";
import FetchMenuDetails from "./Pages/Business/BusinessComponents/FetchMenuDetails";
import Services from "./Pages/Services/Services";
import DisplayItemsMenu from "./Pages/Services/DisplayItemsMenu";
import Customer from "./Pages/Customer/Customer";
import { AuthProvider } from "./Components/Login/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/business" element={<Business />}></Route>
        <Route path="/businessLogin" element={<BusinessLoginRegister />}></Route>
        <Route path="/businessRegister" element={<BusinessSignupForm />}></Route>
        <Route path="/dashboard" element={<Demo />}></Route>
        <Route path="/restdetails/:ownerEmail" element={<RestDetails />}></Route>
        <Route path="/menudetails/:restaurantId" element={<MenuDetails />}></Route>
        <Route path="/usure" element={<Sure />}></Route>
        <Route path="/displaymenu/:restaurantId" element={<FetchMenuDetails />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/displayitems/:restaurantId" element={<DisplayItemsMenu />}></Route>
        <Route path="/customer" element={<Customer />}></Route>

      </Routes>
      </AuthProvider>
      

    </BrowserRouter>
  )};

  
export default App
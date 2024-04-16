import React,{useState} from 'react';
import './Cart.css'
import { useNavigate } from 'react-router';
import OrderValidated from './OrderValidated';

const Cart = ({ cart }) => {
  const [showOrder, setShowOrder]=useState(false);

    const totalPrice = cart.reduce((total, item) => total + item.itemPrice * item.quantity, 0);
    const navigate=useNavigate();
const handleCheckout=()=>{
navigate('/order');
}
    return (
        <div className='ContactUs-Page'>
      <div className="Contact-Content">
        <div className="FirstPartAbout">
          <div className="Contact-Wastage">
            <div className="Content-Wastage">
           
            
        <div className="Cartcontainer">
  <div className="Cartcard Cartcart">
    <label className="Carttitle">VIEW CART</label>
    <div className="steps">
      <div className="step">
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.itemName} - Rs {item.itemPrice * item.quantity} ({item.quantity})
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div>
  <span>PAYMENT METHOD</span>
  <div>
  <span>
  <input type="radio" id="cod" name="paymentMethod" value="cod" checked />
    &nbsp;  &nbsp; Cash on Delivery</span>
  </div>
</div>

        <hr />
        <div className="Cartpromo">
          <span>HAVE A PROMO CODE?</span>
          <form className="Cartform">
            <input type="text" placeholder="Enter a Promo Code" className="Cartinput_field" />
            <button className='Cartcheckout-btn'>Apply</button>
          </form>
        </div>
        <hr />
        <div className="Cartpayments">
          <span>PAYMENT</span>
          <div className="Cartdetails">
            <span>Subtotal: </span> 
                                       <span>Rs.{totalPrice}</span>
             {/* Display total price */}
            <span>Shipping:</span>
            <span>Rs.0</span>
            <span>Tax:</span>
            <span>Rs.0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="Cartcard Cartcheckout">
    <div className="Cartfooter">
      <label className="Cartprice">Total: Rs {totalPrice}</label>
      <br/> {/* Display total price */}
      <button className="Cartcheckout-btn" onClick={() => setShowOrder(true)}>Checkout</button>

      {showOrder && <OrderValidated onClose={()=> setShowOrder(false)}/>}

    </div>
  </div>
</div>
</div>
</div>
</div>

</div>
</div>



    );
};

export default Cart;


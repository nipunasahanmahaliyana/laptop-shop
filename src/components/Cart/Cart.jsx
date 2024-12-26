import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Header from '../Header';
import Footer from '../Footer';
import { useCart } from './CartContext';
import { AiOutlineClose } from "react-icons/ai"; // Import custom cross icon from react-icons

const CartPage = () => {

  const [shipping, setShipping] = useState('Enter your address to view shipping');
  const [country, setCountry] = useState("Sri Lanka")
  const [street, setStreet] = useState("");
  const [postcode, setPostcode] = useState("");
  const [showShipping, setShowShipping] = useState(false);
    const [loading, setLoading] = useState(false);


    const handleUpdateShipping = () => {
      setLoading(true);
      setTimeout(() => {
        setShipping('රු. 500');
        setShowShipping(true);
         setLoading(false);
      }, 1000);


  };

  const cartItems = localStorage.getItem('cartItems');

  // Parse the cartItems from string to an array
  const parsedCartItems = JSON.parse(cartItems);
  
  console.log(parsedCartItems);

  const { cart, removeFromCart, updateQuantity,clearCart } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
    <div className="">
        <Header></Header>
    </div>
    <div className="bg-white p-10">
      <div className="container mx-auto px-4 py-8">
      <div className="w-[100%]  flex items-center justify-between mb-8">
          {cart.length > 0 ? (
        <div>
          <table className="w-[200vh] bg-white rounded-lg shadow-md">
  <thead>
    <tr className="bg-gray-200 text-left">
      <th className="px-4 py-2">Product Name</th>
      <th className="px-4 py-2">Price</th>
      <th className="px-4 py-2">Quantity</th>
      <th className="px-4 py-2">Total</th>
      <th className="px-4 py-2"></th>
    </tr>
  </thead>
  <tbody>
    {cart.map((item) => (
      <tr key={item.id} className="border-b">
        <td className="px-4 py-2">{item.name}</td>
        <td className="px-4 py-2">LKR {item.price.toFixed(2)}</td>
        <td className="px-4 py-2 flex items-center">
          <button
            className="px-2 py-1 bg-gray-300 rounded"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
          <span className="px-4">{item.quantity}</span>
          <button
            className="px-2 py-1 bg-gray-300 rounded"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </td>
        <td className="px-4 py-2">
         LKR { item.price * item.quantity}
        </td>
        <td className="px-4 py-2">
          <button
            className="px-2 py-1 bg-red-500 text-white rounded"
            onClick={() => removeFromCart(item.id)}
          >
            <AiOutlineClose></AiOutlineClose>
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

          <div className="font-semibold text-lg">Total: LKR {totalPrice.toFixed(2)}</div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}

        </div>


        <div className="flex justify-between items-center mb-8">
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded inline-flex items-center">
            <FaArrowLeft className="mr-2" />
            Back To Shop
          </button>
          <div className='space-x-2'>
          <button
          className="border border-gray-400 rounded px-4 py-2 hover:border-gray-600"
          onClick={clearCart}
        >
          Clear Cart
        </button>
            <button className='border border-gray-400 rounded px-4 py-2 hover:border-gray-600'>
              Update cart
          </button>
        </div>
        </div>



        <div className="flex">
          <div className="w-2/3 pr-8">
            <div className="border border-gray-300 rounded-lg p-4 mb-8">
              <div className="flex justify-between items-center">
                 <h2 className="text-xl font-bold mb-4">Calculate shipping</h2>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
              </div>
                 <select className="border border-gray-300 rounded-md p-2 w-full mb-4" value={country} onChange={(e)=> setCountry(e.target.value)}>
                      <option>Sri Lanka</option>
                      <option>United States</option>
                      <option>Canada</option>
                  </select>
                <input type="text" placeholder='Street Address' value={street} onChange={(e) => setStreet(e.target.value)} className="border border-gray-300 rounded-md p-2 w-full mb-4"/>
                <input type="text" placeholder='Postcode / ZIP' value={postcode} onChange={(e) => setPostcode(e.target.value)}  className="border border-gray-300 rounded-md p-2 w-full mb-4"/>
                <button className="bg-gray-200 hover:bg-gray-300 rounded py-2 px-4 text-gray-700 font-medium" onClick={handleUpdateShipping} disabled={loading}>
                {loading ? 'Updating...' : 'Update'}
          </button>


            </div>
          </div>

          <div className="w-1/3 pl-8">
              <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-gray-700">රු.{totalPrice.toFixed(2)}</p>
              </div>


                  <div className="flex justify-between mb-2 relative">
                    <p className='text-gray-600'>Shipping</p>
                       {showShipping ? <p className='text-gray-700'> {shipping}</p> :
                      <p className="text-gray-500 italic">
                           {shipping}
                      </p>
                       }


                </div>

               <div className="flex justify-between items-center mt-4 font-bold text-xl">
                  <p>Total</p>
                    <p className='text-red-500'>රු.{ totalPrice.toFixed(2)}</p>
               </div>

             <button className="bg-gray-900 hover:bg-gray-800 text-white rounded py-2 px-4 mt-4 w-full">
               Proceed to checkout
               </button>
              </div>
          </div>
        </div>

      </div>
    </div>
    <div className="">
    <Footer></Footer>
    </div>
    </>
  );
};

export default CartPage;
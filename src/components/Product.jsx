import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Images from '../assets/image';
import Breadcrumb from "./Breadcrumb";
import { useParams, useLocation } from "react-router-dom";
import { useCart } from './Cart/CartContext';
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const ProductPage = () => {
  const { addToCart } = useCart();
  const { id } = useParams(); // Get item ID from URL
  const location = useLocation(); // Get item details from state
  const product = location.state?.product; // Use state if available

  const [isHovered, setIsHovered] = useState(false);
  const [backgroundPosition, setBackgroundPosition] = useState("center");

  const handleMouseMove = (e) => {
    if (!isHovered) return;

    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setBackgroundPosition("center");
  };

  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Laptop", link: "/page" },
    { label: "Details", link: null },
  ];

  const calculateDiscountPercentage = (price, originalPrice) => {
    if (!originalPrice || originalPrice === 0) return 0; // Prevent division by zero
    const discount = ((originalPrice - price) / originalPrice) * 100;
    return Math.round(discount); // Round to the nearest whole number
  };
  return (
    <>
      <Header />
      <Breadcrumb></Breadcrumb>
      <ToastContainer></ToastContainer>
      <div className="container mx-auto px-20 py-8">
        {product ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">
                Brand: <span className="font-medium">{product.name}</span>
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={30} className="text-blue-600 hover:text-blue-800" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={30} className="text-blue-400 hover:text-blue-600" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={30} className="text-pink-600 hover:text-pink-800" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Product Image */}
              <div
                className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  backgroundImage: `url("${Images.laptop2}")`, // Replace with actual image path
                  backgroundSize: isHovered ? "200%" : "100%", // Zoom on hover
                  backgroundPosition: backgroundPosition,
                  backgroundRepeat: "no-repeat",
                  width: "80vh",
                  height: "70vh",
                }}
              >
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs uppercase">
                  Refurbished
                </span>
              </div>

              {/* Product Details */}
              <div>
                <div className="bg-gray-100 p-5">
                  <p className="text-3xl font-bold text-red-500">
                    රු.{product.price}
                    {" "}
                    <span className="text-gray-500 line-through text-sm">
                      රු.{product.originalPrice}
                    </span>{" "}
                    <span className="text-green-500 text-sm">{calculateDiscountPercentage(product.price,product.originalPrice)}%</span>
                  </p>
                  <p className="text-green-600 mb-4">Status: In stock</p>
                  <h2 className="text-2xl font-bold mb-4">
                    Lenovo ThinkCentre M700 Tiny | Core i5 6th Gen DDR4 | 8GB RAM
                    | 512GB SSD | 20" LED Wide Monitor
                  </h2>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Make/Mode – Lenovo ThinkCentre M700 Tiny Desktop PC</li>
                    <li>Processor Class – Intel Core i5 6th GEN</li>
                    <li>Motherboard – Lenovo</li>
                    <li>Memory / RAM – 8GB DDR4</li>
                    <li>Hard Disk – 512GB SSD</li>
                    <li>Graphics – Intel HD Graphics</li>
                    <li>Monitor – 20″ wide LED Monitor</li>
                    <li>Mouse & Keyboard</li>
                    <li>Warranty – 3-12 Months</li>
                    <li>Software – Microsoft Security Essentials, Malwarebytes, VLC, Chrome, Firefox</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <div className="flex items-center">
                    <p className="mr-2">Quantity:</p>
                    <button className="bg-gray-200 px-2 py-1 rounded">-</button>
                    <span className="mx-2">1</span>
                    <button className="bg-gray-200 px-2 py-1 rounded">+</button>
                  </div>
                  <button 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
                  onClick={()=>{addToCart(product);}} // Call addToCart with the product}}
                  >
                    Add to cart
                  </button>
                </div>
                <p className="mt-4 text-gray-600">
                  Category:{" "}
                  <a
                    href="/budget-desktop-computers"
                    className="text-blue-500"
                  >
                    Budget Desktop Computers
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-8">
              <nav className="flex border-b border-gray-300">
                <a
                  href="#description"
                  className="px-4 py-2 font-medium text-gray-700 border-b-2 border-blue-500"
                >
                  Description
                </a>
                <a href="#specification" className="px-4 py-2 font-medium text-gray-700">
                  Specification
                </a>
              </nav>
            </div>

            <h2 className="text-2xl font-bold my-8">Related Products</h2>
            <div className="grid grid-cols-3 gap-4">
              {/* Product Card 1 */}
              <div className="border border-gray-300 rounded-lg p-4 relative">
                <span className="absolute top-2 left-2 bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs uppercase font-bold">
                  -11%
                </span>
                <img
                  src="D:\\Babu_Ecommerce\\laptop-shop\\src\\assets\\images\\1.jpg"
                  alt="Computer"
                  className="w-full h-auto mb-4"
                />
                <h3 className="text-lg font-medium mb-2">Product Title</h3>
                <p className="text-gray-500 line-through">රු.70,000.00</p>
                <p className="text-red-500 font-bold">රු.62,000.00</p>
              </div>

              {/* Product Card 2 */}
              <div className="border border-gray-300 rounded-lg p-4 relative">
                <span className="absolute top-0 left-0 bg-red-600 text-white px-2 py-1 rounded-tl rounded-br text-sm font-bold">
                  Out of Stock
                </span>
                <img src="computer2.jpg" alt="Computer" className="w-full h-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">
                  Dell OptiPlex 9020 SFF Core i3 4th Gen Full Set
                </h3>
                <p className="text-gray-500 line-through">රු.72,000.00</p>
                <p className="text-red-500 font-bold">රු.72,000.00</p>
              </div>
            </div>
          </>
        ) : (
          <p>Loading item details for ID: {id}</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;

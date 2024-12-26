import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Images from '../assets/image';

const Footer = () => {
  return (
    <footer className="bg-black p-10 text-center text-white">
      {/* First Section: Island Delivery, Return, Secure Payment, Support */}
      <div className="container mx-auto flex justify-between items-center border-b pb-4 text-sm space-x-2">
        <div className="w-[25%] border-r pb-3">
          <h3 className="font-bold mb-4 text-gray-300">Island Wide Delivery</h3>
          <p>All Island Delivery Available</p>
        </div>

        <div className="w-[25%] border-r pb-3">
          <h3 className="font-bold mb-4 text-gray-300">7 Days Return</h3>
          <p>If goods have problems</p>
        </div>

        <div className="w-[25%] border-r pb-3">
          <h3 className="font-bold mb-4 text-gray-300">Secure Payment</h3>
          <p>100% secure payment</p>
        </div>

        <div className="w-[25%]">
          <h3 className="font-bold mb-4 text-gray-300">24/7 Support</h3>
          <p>Dedicated support</p>
        </div>
      </div>

      {/* Second Section: Contact Us, Popular Categories, Social Media, and Image */}
      <div className="container mx-auto py-8 text-sm px-10 text-gray-400 flex items-start justify-between space-x-8 w-full">
        {/* Contact Us */}
        <div className="flex flex-col w-[25%] text-left">
          <h3 className="text-gray-300 mb-2 font-medium">Contact Us</h3>
          <address>
            <span>Address:</span> <span className="text-sm">191 Old Road, Maharagama.</span>
            <br />
            <span>Head Office:</span> <span>(+94) 11 3 68 64 60</span>
            <br />
            <span>Store:</span> <span>(+94) 11 2 84 30 70</span>
            <br />
            <span>Hotline:</span> <span>(+94) 777 66 28 58</span>
            <br />
            <span>Mobile:</span> <span>(+94) 76 8 66 28 58</span>
            <br />
            <span>Email:</span> <span className="text-gray-300">info@myitem.lk</span>
          </address>
        </div>

        {/* Popular Categories */}
        <div className="flex flex-col w-[25%] text-left">
          <h3 className="text-gray-300 font-medium mb-2">Popular Categories</h3>
          <span className="text-gray-400 mb-1">Laptops</span>
          <span className="text-gray-400 mb-1">Monitors</span>
          <span className="text-gray-400 mb-1">Desktop Computers</span>
          <span className="text-gray-400 mb-1">Computer Accessories</span>
          <span className="text-gray-400 mb-1">Gaming Accessories</span>
          <span className="text-gray-400 mb-1">Budget Desktop Computers</span>
        </div>

        {/* Follow Us */}
        <div className="flex flex-col w-[25%] text-left">
          <h3 className="text-gray-300 font-medium mb-2">Follow Us</h3>
          <div className="flex items-center gap-3">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="text-blue-600 hover:text-blue-800" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} className="text-blue-400 hover:text-blue-600" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="text-pink-600 hover:text-pink-800" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="text-blue-700 hover:text-blue-900" />
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col w-[25%]">
          {Images.background}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto border-t mt-2 p-4 text-gray-500 text-sm">
        <p className="text-center">
          © 2024 <span className="text-gray-400 text-orange-600">YAKDEV Solutions.</span> All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

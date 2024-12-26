import React from 'react';
import Images from '../assets/image';
import { HiOutlinePrinter, HiOutlineShoppingCart, HiOutlineUser, HiOutlinePhone, HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="bg-white text-gray-800">
      {/* Welcome Banner */}
      <div className="bg-black h-10 flex items-center justify-center p-2 sm:p-4">
        <p className="text-white text-xs sm:text-base">
          Welcome to Myitem.lk (PVT) LTD. | Sri Lanka's No1 Brand New and Used Computers
        </p>
      </div>

      {/* Main Header Section */}
      <div className="bg-white flex flex-wrap justify-between items-center px-4 sm:px-20 py-3 container mx-auto">
        {/* Logo and Shop Name */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img src={Images.laptop1} alt="Logo" className="h-8" />
          <p className="text-2xl sm:text-4xl p-2 sm:p-4">Laptop Shop</p>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded w-full sm:w-auto">
          <select name="category" className="text-sm sm:text-lg text-gray-700 focus:outline-none rounded bg-gray-100 p-1">
            <option value="All">All</option>
            <option value="Brands">Brands</option>
            <option value="Accessories">Accessories</option>
          </select>
          <div className="border-r"></div>
          <input
            type="text"
            placeholder="I'm shopping for..."
            className="text-sm rounded border-none focus:outline-none p-3 w-full sm:w-[250px] text-gray-700"
          />
          <button className="p-3 w-full sm:w-[15vh] bg-black text-white rounded text-sm font-medium hover:bg-red-600">
            <span className="font-bold">Search</span>
          </button>
        </div>

        {/* Icon Links */}
        <div className="flex items-center gap-4 sm:gap-5 ml-0 sm:ml-10 mt-3 sm:mt-0">
          {/* Hotline */}
          <div className="flex flex-column items-center hover:cursor-pointer">
            <HiOutlinePhone className="text-gray-700 w-8 h-8 sm:w-10 sm:h-10" />
            <div className="text-center p-2">
              <h3 className="text-sm sm:text-base">Hotline</h3>
              <span className="text-xs sm:text-lg font-bold">0777 662 858</span>
            </div>
          </div>

          {/* Printer Icon */}
          <div className="p-2">
          <Link to="/bill"><HiOutlinePrinter className="text-gray-700 w-8 h-8 sm:w-10 sm:h-10 hover:cursor-pointer" /></Link>
          </div>

          {/* Shopping Cart Icon */}
          <div className="p-2">
          <Link to="/cart"><HiOutlineShoppingCart className="text-gray-700 w-8 h-8 sm:w-10 sm:h-10 hover:cursor-pointer" />  </Link>
          </div>

          {/* User Icon */}
          <div className="p-2 flex items-center gap-2">
            <HiOutlineUser className="text-gray-700 w-8 h-8 sm:w-10 sm:h-10 hover:cursor-pointer" />
            <span className="hidden sm:block">Login or Register</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-black py-4">
        <div className="container mx-auto text-white flex justify-center items-center flex-wrap">
          {/* Product Categories Dropdown */}
          <div className="dropdown inline-block relative">
            <div className="cursor-pointer flex items-center group text-md sm:text-lg">
              <span className='font-bold'>Product Categories</span>
              <HiChevronDown className="text-gray-700 w-4 h-4 sm:w-5 sm:h-5 hover:cursor-pointer text-white ml-1" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-gray-200 font-medium flex flex-wrap justify-center ml-12 space-x-4 sm:space-x-8 mt-2 sm:mt-0">
            <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8">
              <li className="cursor-pointer text-md sm:text-md"><Link to="/">Home</Link></li>
              <li className="cursor-pointer text-md sm:text-md"><Link to="/page">Laptop</Link></li>
              <li className="cursor-pointer text-md sm:text-md"><Link to="/checkout">Checkout</Link></li>
              <li className="cursor-pointer text-md sm:text-md"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

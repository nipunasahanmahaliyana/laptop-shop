import React from 'react';

const CategoryCard = ({ title, imageUrl, onClick }) => {
  return (
    <div className="w-full md:w-auto cursor-pointer relative group overflow-hidden bg-black rounded-xl">
      {/* Image Container with Hover Effects */}
      <div
        className="flex justify-center items-center bg-cover bg-center w-full h-[30vh] group-hover:scale-110 transition-transform duration-500 ease-in-out"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <h3 className="text-center z-10 text-white font-bold text-4xl mb-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">{title}</h3>
      </div>

      {/* Shop Now Button with Animation */}
      <div className="bg-red-500 absolute bottom-2 right-2 transition-all duration-300 ease-in-out group-hover:bottom-5 group-hover:right-5 flex justify-center items-center p-2 cursor-pointer group-hover:bg-white/40 group-hover:scale-105 transform">
        <span className="group-hover:text-white z-20 text-sm text-gray-200 font-bold transition-all duration-300 ease-in-out transform group-hover:scale-105">
          SHOP NOW
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;

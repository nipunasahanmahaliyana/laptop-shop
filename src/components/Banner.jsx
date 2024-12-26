import React, { useState, useEffect } from 'react';
import Images from '../assets/image'; // Assuming you have an array of image paths

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // State to detect hover
  const images = [Images.laptop1, Images.laptop2, Images.laptop3]; // Example image array

  useEffect(() => {
    if (isHovered) return; // Prevent auto-slide when hovered

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length, isHovered]);

  // Function to handle dot click
  const handleDotClick = (index) => {
    setCurrentImageIndex(index); // Update the image based on the clicked dot
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)} // Set hover state when mouse enters
      onMouseLeave={() => setIsHovered(false)} // Reset hover state when mouse leaves
    >
      {/* Banner Section with sliding images */}
      <div
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '85vh',
        }}
        className="text-white bg-blend-multiply transition-all duration-1000 ease-in-out"
      >
        {/* Container for content */}
        <div className="container mx-auto text-left relative z-10 flex items-center h-full">
          {/* Content Wrapper */}
          <div className="flex h-full w-full md:w-[70%] flex-col justify-center p-4">
            {/* Banner Text */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              EXPERIENCE <br /> THE POWER OF PRECISION AND CLARITY <br /> WITH OUR <br /> PREMIUM <br /> MONITORS
            </h2>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2  cursor-pointer">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)} // Update image when dot is clicked
            className={`w-4 h-4 rounded-full cursor-pointer ${
              currentImageIndex === index ? 'bg-white' : 'bg-gray-500'
            } transition-colors duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

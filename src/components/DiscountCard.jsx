import React, { useState, useRef, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const laptops = [
  {
    image: "/path/to/laptop1.jpg", // Replace with actual image paths
    discount: "-9%",
    used: true,
    name: "Lenovo ThinkPad T470 i5 7th Gen | 512GB SSD | 8GB RAM DDR4",
    price: 89500,
    originalPrice: 95000,
  },
  {
    image: "/path/to/laptop2.jpg",
    discount: "-4%",
    used: true,
    name: "Lenovo ThinkPad T480 i5 8th Gen | 256GB SSD | 8GB RAM DDR4",
    price: 85000,
    originalPrice: 89000,
  },
  {
    image: "/path/to/laptop3.jpg",
    discount: "-6%",
    used: true,
    name: "Lenovo ThinkPad T480 i5 8th Gen | 256GB SSD | 16GB RAM DDR4",
    price: 90000,
    originalPrice: 95000,
  },
  {
    image: "/path/to/laptop4.jpg",
    discount: "-3%",
    used: true,
    name: "Lenovo ThinkPad T480 i5 8th Gen | 512GB SSD | 8GB RAM DDR4",
    price: 95000,
    originalPrice: 98000,
  },
  {
    image: "/path/to/laptop5.jpg",
    discount: "-44%",
    used: true,
    name: "Lenovo ThinkPad T480 i5 8th Gen | 512GB SSD | 8GB RAM DDR4",
    price: 100000,
    originalPrice: 180000,
  },
  {
    image: "/path/to/laptop5.jpg",
    discount: "-44%",
    used: true,
    name: "Lenovo ThinkPad T480 i5 8th Gen | 512GB SSD | 8GB RAM DDR4",
    price: 100000,
    originalPrice: 180000,
  },
  {
    image: "/path/to/laptop5.jpg",
    discount: "-44%",
    used: true,
    name: "Lenovo ThinkPad T480 i5 8th Gen | 512GB SSD | 8GB RAM DDR4",
    price: 100000,
    originalPrice: 180000,
  },
  {
    image: "/path/to/laptop5.jpg",
    discount: "-44%",
    used: true,
    name: "Lenovo ThinkPad T480 i5 8th Gen | 512GB SSD | 8GB RAM DDR4",
    price: 100000,
    originalPrice: 180000,
  },
  {
    image: "/path/to/laptop5.jpg",
    discount: "-44%",
    used: true,
    name: "Lenovo ThinkPad T480 i5 8th Gen | 512GB SSD | 8GB RAM DDR4",
    price: 100000,
    originalPrice: 180000,
  },
  {
    image: "/path/to/laptop5.jpg",
    discount: "-44%",
    used: true,
    name: "Lenovo ThinkPad T480 i5 8th Gen | 512GB SSD | 8GB RAM DDR4",
    price: 100000,
    originalPrice: 180000,
  },

];


const SpecialDiscountProducts = () => {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const itemWidth = container.children[0].offsetWidth + 16; // Including margin
    const scrollAmount = index * itemWidth;
    container.style.transform = `translateX(-${scrollAmount}px)`;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    let nextIndex = (currentIndex + 1) % laptops.length; // Loop back to 0 if at the end
    scrollToIndex(nextIndex);
  };

  const prevSlide = () => {
    let prevIndex = (currentIndex - 1 + laptops.length) % laptops.length; // Loop back to the last item if at the start
    scrollToIndex(prevIndex);
  };

  useEffect(() => {
    // Set up auto-scroll interval
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 2000);
    } else {
      clearInterval(intervalRef.current); // Clear interval when hovered
    }

    // Clear interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, [currentIndex, isHovered]);

  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop the timer when it reaches zero.

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => Math.max(prevTime - 1, 0));
    }, 1000);

    // Cleanup interval on unmount or when timeLeft reaches zero
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  // Format the time left in MM:SS
 // Format the time left in HH:MM:SS
 const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

  return (
    <div
      className="relative w-full overflow-hidden "
      onMouseEnter={() => setIsHovered(true)} // Disable auto-scroll on hover
      onMouseLeave={() => setIsHovered(false)} // Re-enable auto-scroll after hover
    >
      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 p-2 rounded-full shadow-md"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
      </button>
    <div>
    <div className="w-full h-14 bg-gray-200 flex items-center text-xl p-5 font-bold">
          <span>Special Discount Products</span>
          <div className="flex items-center justify-cente ml-5">
        <div className="bg-gray-800 text-white p-1 rounded-lg shadow-lg flex flex-row items-center">
        <p className="text-xl font-bold px-5">
          {formatTime(timeLeft)}
        </p>
        {timeLeft <= 0 && (
          <p className="text-lg text-red-500 px-2"> Time's up Discount over!</p>
        )}
      </div>
    </div>
          </div>
    </div>
      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex transition-transform duration-500 p-10"
        style={{ transform: "translateX(0px)" }}
      >
      {laptops.map((laptop, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 mr-6 relative inline-block p-15"
          >
            <div
              className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold text-white rounded bg-orange-500 ${
                laptop.discount.startsWith("-") ? "" : "bg-green-500"
              }`}
            >
              {laptop.discount}
            </div>
            <img
              src={laptop.image}
              alt={laptop.name}
              className="w-full h-48 object-contain mb-2"
            />
            <div className="flex justify-center mb-2">
              <a href="#" className="text-gray-600 hover:text-black">
                <span className="material-symbols-outlined">shopping_bag</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <span className="material-symbols-outlined">visibility</span>
              </a>
            </div>
            <span className="absolute bottom-20 left-4 px-2 py-1 text-white bg-green-600 rounded text-sm">
              {laptop.used ? "Used" : "New"}
            </span>
            <p className="text-gray-900 font-medium mb-1">{laptop.name}</p>
            <div className="flex items-center">
              <p className="text-lg font-bold text-green-600">
                ৳{laptop.price.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 line-through ml-2">
                ৳{laptop.originalPrice.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-100 p-2 rounded-full shadow-md"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
};

export default SpecialDiscountProducts;

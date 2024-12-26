import React, { useState } from 'react';
import { FaSearch, FaTh, FaList } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import Images from '../assets/image';
import { FaCartPlus, FaEye } from 'react-icons/fa';
import Items from './Item';
import { useCart } from './Cart/CartContext';
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { useNavigate } from "react-router-dom";
import Breadcrumb from './Breadcrumb';

const ProductListingPage = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [gridView, setGridView] = useState(true); // true for grid view, false for list view
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTermProcessor, setSearchTermProcessor] = useState('');
  const [searchTermScreen, setSearchTermScreen] = useState("");

  const [selectedProcessors, setSelectedProcessors] = useState([]);
  const [selectedGenerations, setSelectedGenerations] = useState([]);
  const [selectedHDDTypes, setSelectedHDDTypes] = useState([]);
  const [selectedRAMs, setSelectedRAMs] = useState([]);
  const [selectedHDDCapacities, setSelectedHDDCapacities] = useState([]);
  const [selectedGraphics, setSelectedGraphics] = useState([]);
  const [selectedOperatingSystems, setSelectedOperatingSystems] = useState([]);
  const [screenSizes, setScreenSizes] = useState([]);
  const [minPrice, setMinPrice] = useState(59990);
  const [maxPrice, setMaxPrice] = useState(153500);
  
 const toggleView = () => {
        setGridView(!gridView);
    };

    const [products, setProducts] = useState([
        {
          id: 1,
          quantity:2,
          name: "HP Probook 640 G8",
          brand: "HP",
          processor: "Core i5 11th Gen",
          generation: "11gen",
          ram: "8GB",
          ramType: "DDR4",
          hard: "SSD",
          hardType: "256GB Nvme",
          screen: "14\"",
          screenType: "IPS FHD",
          graphics: "NVIDIA",
          os: "Linux",
          image: "/images/laptop1.jpg", // Corrected image path
          warranty: "",
          price: 119900,
          originalPrice: 122900,
          discount: 2,
          used: true,
          brandNew: false,
          outOfStock: false,
        },
        {
          id: 2,
          name: "HP ELITE 850 G5",
          brand: "",
          processor: "Core i5 8th Gen",
          generation: "",
          ram: "8GB",
          ramType: "DDR4",
          hard: "SSD",
          hardType: "256GB M.2",
          screen: "15.6\"",
          screenType: "FHD",
          graphics: "",
          os: "",
          image: "/images/laptop2.jpg", // Corrected image path
          warranty: "",
          price: 98000,
          originalPrice: 110000,
          discount: 5,
          used: true,
          brandNew: false,
          outOfStock: false,
        },
        {
          id: 3,
          name: "Lenovo ThinkPad T470",
          brand: "",
          processor: "Core i5 7th Gen",
          generation: "",
          ram: "8GB",
          ramType: "DDR4",
          hard: "NVME",
          hardType: "256GB",
          screen: "14\"",
          screenType: "FHD",
          graphics: "",
          os: "",
          image: "/images/laptop3.jpg", // Corrected image path
          warranty: "",
          price: 79500,
          originalPrice: 85000,
          discount: 17,
          used: true,
          brandNew: false,
          outOfStock: false,
        },
        {
          id: 4,
          name: "Lenovo ThinkPad T470",
          brand: "",
          processor: "Core i5 7th Gen",
          generation: "",
          ram: "16GB",
          ramType: "DDR4",
          hard: "SSD",
          hardType: "256GB",
          screen: "14\"",
          screenType: "FHD",
          graphics: "",
          os: "",
          image: "/images/laptop4.jpg", // Corrected image path
          warranty: "",
          price: 84500,
          originalPrice: 89500,
          discount: 6,
          used: true,
          brandNew: false,
          outOfStock: false,
        },
        {
          id: 5,
          name: "Lenovo ThinkPad T470",
          brand: "",
          processor: "Core i5 7th Gen",
          generation: "",
          ram: "8GB",
          ramType: "DDR4",
          hard: "SSD",
          hardType: "512GB",
          screen: "14\"",
          screenType: "FHD",
          graphics: "",
          os: "",
          image: "/images/laptop5.jpg", // Corrected image path
          warranty: "",
          price: 95500,
          originalPrice: 99000,
          discount: 6,
          used: true,
          brandNew: false,
          outOfStock: false,
        },
        {
          id: 6,
          name: "Dell Latitude 5400",
          brand: "",
          processor: "Core i5 8th Gen",
          generation: "",
          ram: "16GB",
          ramType: "DDR4",
          hard: "SSD",
          hardType: "256GB",
          screen: "14\"",
          screenType: "FHD",
          graphics: "",
          os: "",
          image: "/images/laptop6.jpg", // Corrected image path
          warranty: "",
          price: 89000,
          originalPrice: 95000,
          discount: 4,
          used: true,
          brandNew: false,
          outOfStock: false,
        },
        {
          id: 7,
          name: "Dell Latitude 5400",
          brand: "",
          processor: "Core i5 8th Gen",
          generation: "",
          ram: "8GB",
          ramType: "DDR4",
          hard: "SSD",
          hardType: "512GB",
          screen: "14\"",
          screenType: "FHD",
          graphics: "",
          os: "",
          image: "/images/laptop7.jpg", // Corrected image path
          warranty: "",
          price: 85000,
          originalPrice: 98500,
          discount: 9,
          used: true,
          brandNew: false,
          outOfStock: false,
        },
        {
          id: 8,
          name: "Dell Latitude 5400",
          brand: "",
          processor: "Core i5 8th Gen",
          generation: "",
          ram: "16GB",
          ramType: "DDR4",
          hard: "SSD",
          hardType: "256GB",
          screen: "14\"",
          screenType: "FHD",
          graphics: "",
          os: "",
          image: "/images/laptop8.jpg", // Corrected image path
          warranty: "",
          price: 99000,
          originalPrice: 109000,
          discount: 3,
          used: true,
          brandNew: false,
          outOfStock: false,
        },
        {
          id: 9,
          name: "Lenovo ThinkPad T480",
          brand: "",
          processor: "Core i5 8th Gen",
          generation: "",
          ram: "8GB",
          ramType: "DDR4",
          hard: "SSD",
          hardType: "256GB",
          screen: "14\"",
          screenType: "FHD",
          graphics: "",
          os: "",
          image: "/images/laptop9.jpg", // Corrected image path
          warranty: "",
          price: 85000,
          originalPrice: 89000,
          discount: 4,
          used: true,
          brandNew: false,
          outOfStock: false,
        },
        {
          id: 10,
          name: "Dell Latitude 7280",
          brand: "",
          processor: "Core i5 6th Gen",
          generation: "",
          ram: "8GB",
          ramType: "DDR4",
          hard: "SSD",
          hardType: "256GB",
          screen: "12\"",
          screenType: "FHD",
          graphics: "",
          os: "",
          image: "/images/laptop10.jpg", // Corrected image path
          warranty: "",
          price: 59990,
          originalPrice: 75500,
          discount: 27,
          used: true,
          brandNew: false,
          outOfStock: true,
        },
        // Add more products as necessary
      ]);
      
      
      const calculateDiscountPercentage = (price, originalPrice) => {
        if (!originalPrice || originalPrice === 0) return 0; // Prevent division by zero
        const discount = ((originalPrice - price) / originalPrice) * 100;
        return Math.round(discount); // Round to the nearest whole number
      };
      
      const brands = [...new Set(products.map(product => product.brand))]; // Get unique brands
     // Get unique processor series from products
  const processorOptions = [...new Set(products.map(product => product.processor))];
  const generationOptions = [...new Set(products.map(product => product.generation))];
  const hddOptions = [...new Set(products.map((product) => product.hard))];
  const ramOptions = [...new Set(products.map((product) => product.ram))];
  const hddCapacityOptions = [...new Set(products.map((product) => product.hardType))];
  const graphicsOptions = [...new Set(products.map((product) => product.graphics))];
  const operatingSystemOptions = [...new Set(products.map((product) => product.os))];
 // Get unique screen sizes from products
 const uniqueScreenSizesOprions = [...new Set(products.map((product) => product.screen))];

  // Handle processor checkbox changes
  const handleProcessorChange = (processor) => {
    setSelectedProcessors(prevState =>
      prevState.includes(processor)
        ? prevState.filter(item => item !== processor) // Remove if already selected
        : [...prevState, processor] // Add if not selected
    );
  };

    // Handle screen size selection
    const handleScreenSizeChange = (size) => {
      setScreenSizes((prev) =>
        prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
      )
    }
  // Filter processor options by search term
  const filteredProcessorOptions = processorOptions.filter(processor =>
    processor.toLowerCase().includes(searchTerm.toLowerCase())
  );
// Filter processor options by search term
const filteredScreenOptions = uniqueScreenSizesOprions.filter(size =>
  size.toLowerCase().includes(searchTerm.toLowerCase())
);
  
      // Handle brand selection
      const handleBrandChange = (brand) => {
        setSelectedBrands(prevBrands =>
          prevBrands.includes(brand)
            ? prevBrands.filter(item => item !== brand)
            : [...prevBrands, brand]
        );
      };
    
  // Handle processor and generation selection
  const toggleSelection = (selectedList, setSelectedList, value) => {
    setSelectedList((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Filter products by selected brands and processors
  const filteredProducts = products.filter(product =>
    (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
    (selectedProcessors.length === 0 || selectedProcessors.includes(product.processor)) &&
    (selectedGenerations.length === 0 || selectedGenerations.includes(product.generation)) &&
    (selectedHDDTypes.length === 0 || selectedHDDTypes.includes(product.hddType)) &&
    (selectedRAMs.length === 0 || selectedRAMs.includes(product.ram)) &&
    (selectedHDDCapacities.length === 0 || selectedHDDCapacities.includes(product.hardType)) &&
    (selectedGraphics.length === 0 || selectedGraphics.includes(product.graphics)) &&
    (selectedOperatingSystems.length === 0 || selectedOperatingSystems.includes(product.os)) &&
    ( product.price >= minPrice && product.price <= maxPrice) &&
    (screenSizes.length === 0 || screenSizes.includes(product.screenSize)) &&
    product.name.toLowerCase().includes(searchTermScreen.toLowerCase()) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    product.processor.toLowerCase().includes(searchTermProcessor.toLowerCase())
  );

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  

// Count the number of filtered products
const filteredProductsCount = filteredProducts.length;
  return (
    <>
         <ToastContainer /> 
    <div className="">
        <Header></Header>
        <Breadcrumb></Breadcrumb>
        </div>

    <div className="bg-gray-100 p-10">
         
      <div className="container mx-auto py-8 flex">
          <aside className="w-1/4 pr-8 border-r border-gray-300">
          <div>
      <h3 className="font-bold mb-4">FILTER BY PRICE</h3>
      <div className="flex justify-between text-gray-600 mb-4">
        <span>
          Price: <span>රු.</span>{minPrice.toLocaleString()}
        </span>
        <span>
          <span>රු.</span>{maxPrice.toLocaleString()}
        </span>
      </div>
      <div className="relative flex items-center mb-6">
        {/* Range Selector Track */}
        <div className="absolute top-1/2 w-full h-1 bg-gray-300 rounded transform -translate-y-1/2 "></div>

        {/* Selected Range Track */}
        <div
          className=" top-1/2 h-1 bg-gray-800 rounded transform -translate-y-1/2"
          style={{
            left: `${((minPrice - 59990) / (153500 - 59990)) * 100}%`,
            right: `${100 - ((maxPrice - 59990) / (153500 - 59990)) * 100}%`,
          }}
        ></div>

        {/* Range Min Handle */}
        <input
          type="range"
          min="59990"
          max="153500"
          step="500"
          value={minPrice}
          onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 500))}
          className="absolute w-full appearance-none bg-transparent h-1 cursor-pointer "
        />

        {/* Range Max Handle */}
        <input
          type="range"
          min="59990"
          max="153500"
          step="500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 500))}
          className="absolute w-full appearance-none bg-transparent h-1  cursor-pointer "
        />
      </div>
</div>
     
            {/* Brand Filter */}
      <h3 className="font-bold mb-4">FILTER BY BRANDS</h3>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search Brands"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <ul className="text-gray-700">
        {brands.map((brand) => (
          <li key={brand} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={brand}
              className="mr-2"
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            <label htmlFor={brand}>
              {brand} 
              <span className="text-gray-500"> 
                ({products.filter(p => p.brand === brand).length})
              </span>
            </label>
          </li>
        ))}
      </ul>

             {/* Processor Series Filter */}
      <h3 className="font-bold mb-4 mt-6">PROCESSOR SERIES</h3>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={searchTermProcessor}
          onChange={(e) => setSearchTermProcessor(e.target.value)}
        />
        <FaSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <ul className="text-gray-700">
        {filteredProcessorOptions.map((processor, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={processor}
              className="mr-2"
              checked={selectedProcessors.includes(processor)}
              onChange={() => handleProcessorChange(processor)}
            />
            <label htmlFor={processor}>
              {processor}
              <span className="text-gray-500">
                ({products.filter(p => p.processor === processor).length})
              </span>
            </label>
          </li>
        ))}
      </ul>

      {/* Generation Filter */}
      <h3 className="font-bold mb-4 mt-6">GENERATION</h3>
      <ul className="text-gray-700">
        {generationOptions.map((gen, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`generation-${index}`}
              className="mr-2"
              checked={selectedGenerations.includes(gen)}
              onChange={() => toggleSelection(selectedGenerations, setSelectedGenerations, gen)}
            />
            <label htmlFor={`generation-${index}`}>
              {gen}{" "}
              <span className="text-gray-500">
                ({products.filter((p) => p.generation === gen).length})
              </span>
            </label>
          </li>
        ))}
      </ul>

  {/* HDD Type Filter */}
  <h3 className="font-bold mb-4 mt-6">HDD TYPE</h3>
      <ul className="text-gray-700">
        {hddOptions.map((hdd, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`hdd-${index}`}
              className="mr-2"
              checked={selectedHDDTypes.includes(hdd)}
              onChange={() => toggleSelection(selectedHDDTypes, setSelectedHDDTypes, hdd)}
            />
            <label htmlFor={`hdd-${index}`}>
              {hdd}{" "}
              <span className="text-gray-500">
                ({products.filter((p) => p.hard === hdd).length})
              </span>
            </label>
          </li>
        ))}
      </ul>

              {/* RAM Filter */}
      <h3 className="font-bold mb-4 mt-6">RAM</h3>
      <ul className="text-gray-700">
        {ramOptions.map((ram, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`ram-${index}`}
              className="mr-2"
              checked={selectedRAMs.includes(ram)}
              onChange={() => toggleSelection(selectedRAMs, setSelectedRAMs, ram)}
            />
            <label htmlFor={`ram-${index}`}>
              {ram}{" "}
              <span className="text-gray-500">
                ({products.filter((p) => p.ram === ram).length})
              </span>
            </label>
          </li>
        ))}
      </ul>


         {/* HDD Capacity Filter */}
      <h3 className="font-bold mb-4 mt-6">HDD CAPACITY</h3>
      <ul className="text-gray-700">
        {hddCapacityOptions.map((capacity, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`hdd-capacity-${index}`}
              className="mr-2"
              checked={selectedHDDCapacities.includes(capacity)}
              onChange={() => toggleSelection(selectedHDDCapacities, setSelectedHDDCapacities, capacity)}
            />
            <label htmlFor={`hdd-capacity-${index}`}>
              {capacity}{" "}
              <span className="text-gray-500">
                ({products.filter((p) => p.hardType === capacity).length})
              </span>
            </label>
          </li>
        ))}
      </ul>

{/* Graphics Filter */}
<h3 className="font-bold mb-4 mt-6">GRAPHICS</h3>
      <ul className="text-gray-700">
        {graphicsOptions.map((graphics, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`graphics-${index}`}
              className="mr-2"
              checked={selectedGraphics.includes(graphics)}
              onChange={() => toggleSelection(selectedGraphics, setSelectedGraphics, graphics)}
            />
            <label htmlFor={`graphics-${index}`}>
              {graphics}{" "}
              <span className="text-gray-500">
                ({products.filter((p) => p.graphics === graphics).length})
              </span>
            </label>
          </li>
        ))}


  {/* Operating System Filter */}
  <h3 className="font-bold mb-4 mt-6">OPERATING SYSTEM</h3>
      <ul className="text-gray-700">
        {operatingSystemOptions.map((os, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`os-${index}`}
              className="mr-2"
              checked={selectedOperatingSystems.includes(os)}
              onChange={() => toggleSelection(selectedOperatingSystems, setSelectedOperatingSystems, os)}
            />
            <label htmlFor={`os-${index}`}>
              {os}{" "}
              <span className="text-gray-500">
                ({products.filter((p) => p.os === os).length})
              </span>
            </label>
          </li>
        ))}
      </ul>

             {/* Screen Size Filter */}
             <h3 className="font-bold mb-4 mt-6">SCREEN SIZE</h3>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={searchTermScreen}
          onChange={(e) => setSearchTermScreen(e.target.value)}
        />
        <FaSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <ul className="text-gray-700">
        {filteredScreenOptions.map((size, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={size}
              className="mr-2"
              checked={screenSizes.includes(size)}
              onChange={() => handleProcessorChange(size)}
            />
            <label htmlFor={size}>
              {size}
              <span className="text-gray-500">
                ({products.filter(p => p.size === size).length})
              </span>
            </label>
          </li>
        ))}
      </ul>


                  <h3 className="font-bold mb-4 mt-6">DISPLAY RESOLUTION</h3>
                                   <ul className='text-gray-700'>
                       <li className='flex items-center mb-2'>
                    <input type='checkbox' id='full-hd-1920x1080' className='mr-2'/>
                  <label htmlFor="full-hd-1920x1080">Full HD 1920 x 1080 <span className='text-gray-500'>(28)</span> </label>
                </li>
                </ul>


            <h3 className="font-bold mb-4 mt-6">WARRANTY</h3>
                 <ul className='text-gray-700'>
                      <li className='flex items-center mb-2'>
                    <input type='checkbox' id='1-year' className='mr-2'/>
                  <label htmlFor="1-year">1 Year <span className='text-gray-500'>(1)</span> </label>
                </li>
                        <li className='flex items-center mb-2'>
                    <input type='checkbox' id='3-12-months' className='mr-2'/>
                  <label htmlFor="3-12-months">3-12 Months <span className='text-gray-500'>(27)</span> </label>
                </li>
                 </ul>
        </ul>
        </aside>

        <main className="w-3/4 pl-8">
          <div className='flex justify-between items-center mb-4'>
               <p className="text-gray-600">
                <span>{filteredProductsCount}</span> Products found
            </p>

            <div className='flex items-center space-x-4'>
               <select className="border border-gray-300 rounded-md p-2 text-gray-700">
                  <option>Default sorting</option>
              </select>
                <div className='flex space-x-2 text-gray-600'>

                    <button onClick={() => setGridView(true)}>
                      <FaTh className={`${gridView ? 'text-blue-500' : 'hover:text-blue-500'}`} />
                    </button>


                    <button onClick={() => setGridView(false)}>
                        <FaList  className={`${!gridView ? 'text-blue-500' : 'hover:text-blue-500'}`} />
                    </button>
                </div>
            </div>


          </div>

          <div className={`grid ${gridView ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : ''} gap-4`}>
          {filteredProducts.map(product => {
    // Calculate discount percentage if applicable
    const discountPercentage = calculateDiscountPercentage(product.originalPrice,product.price);

    return (
      <div key={product.id} 
      className={`border border-gray-300 rounded-lg p-4 relative hover:shadow-xl transition-shadow duration-300${product.outOfStock ? 'opacity-50' : ''}`}
      
      >
        {/* Discount Badge */}
        {product.discount > 0 && (
          <span className="absolute top-2 right-2 bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs uppercase font-bold z-20">
            {discountPercentage}%
          </span>
        )}

        {/* Brand New Badge */}
        {product.brandNew && (
          <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs uppercase font-bold z-20">
            Brand New
          </span>
        )}

        {/* Used Badge */}
        {product.used && (
          <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs uppercase font-bold z-20">
            Used
          </span>
        )}

        {/* Out of Stock Badge */}
        {product.outOfStock && (
          <span className="absolute top-0 left-0 bg-red-600 text-white px-2 py-1 rounded-tl rounded-br text-sm font-bold z-20">
            Out of stock
          </span>
        )}

      {/* Product Image */}
      <div className="relative group">
        <img src={Images.laptop1} alt={product.name} className="w-full h-auto mb-4" />
        
        {/* White Box with Icons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all duration-300 flex space-x-4 p-2 bg-white rounded-full shadow-lg">
          <button
          onClick={() => {
            addToCart(product); // Call addToCart with the product
            const currentCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
            currentCartItems.push(product); // Add the new product to the cart array
            localStorage.setItem("cartItems", JSON.stringify(currentCartItems)); // Save updated cart items to localStorage
          }}
          ><FaCartPlus className="text-blue-500 text-xl cursor-pointer hover:text-red-400" />
          </button>
            <button
            onClick={() => openModal(product)}><FaEye className="text-blue-500 text-xl cursor-pointer hover:text-gray-400" /></button>
        </div>
      </div>
<div className="cursor-pointer"onClick={() => navigate(`/product/${product.id}`, { state: { product } })}>
        {/* Product Name */}
        <h3 className="text-md font-medium mb-2 line-clamp-2 text-blue-600" >{product.name}|{product.generation}|{product.processor}|{product.hard}</h3>

        {/* Original Price */}
        {product.originalPrice > product.price && (
          <p className="text-gray-500 line-through">රු.{product.originalPrice.toLocaleString()}</p>
        )}

        {/* Current Price */}
        <p className="text-red-500 font-bold">රු.{product.price.toLocaleString()}</p>
        </div>
      {/* Modal Component */}
      {isModalOpen ? (
  <>
    {console.log("Modal is open, rendering Items component")}
    <Items
      isOpen={isModalOpen}
      onClose={closeModal}
      product={selectedProduct}
    />
  </>
) : (
  <>
   {console.log("Modal is close")}
  </>
)}

      </div>
    );
  })}
</div>
 

           <div className="mt-8 flex justify-center text-gray-500">... LOADING ...</div>
        </main>
      </div>
    </div>
    <div className="">
        <Footer></Footer>
        </div>
    </>
  );
};

export default ProductListingPage;
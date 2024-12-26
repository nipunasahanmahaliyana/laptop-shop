import React from 'react';
import Header from './Header';
import Banner from './Banner';
import CategoryCard from './CategoryCard';
import DiscountCard from './DiscountCard';
import Footer from './Footer';
import DiscountSection from './cardExample'


const Home = () => {
  return (
    <div className="font-sans scrollbar-hide">
      {/* Header Section */}
      <Header />
      {/* Banner Section */}
      <Banner />
      
      {/* Category Cards Section */}
      <div className="bg-white-100 py-8 ">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-4">
          <CategoryCard title="Laptop" imageUrl="" onClick={() => console.log('Laptop')} />
          <CategoryCard title="Desktop" imageUrl="" onClick={() => console.log('Desktop')} />
          <CategoryCard title="Monitor" imageUrl="" onClick={() => console.log('Monitor')} />
          <CategoryCard title="Component" imageUrl="" onClick={() => console.log('Component')} />
          <CategoryCard title="Budget PC" imageUrl="" onClick={() => console.log('Budget PC')} />
          <CategoryCard title="Gaming PC" imageUrl="" onClick={() => console.log('Gaming PC')} />
        </div>
      </div>
      
      {/* Special Discount Products Section  */}
      <div className="mx-auto container px-4 whitespace-nowrap pb-5">
        <div className=" gap-2">
         
          <DiscountCard></DiscountCard>
        </div>
      </div>

      {/* Laptop Product List Section */}
      <div className="mx-auto container px-4 whitespace-nowrap pb-5">
      <div className=" gap-2">
      <div className="w-full h-10 bg-gray-200 flex items-center text-xl p-5 font-bold">
          <span>Laptops</span>
          </div>
          <DiscountSection></DiscountSection>
        </div>
      </div>
      {/* Laptop Product List Section */}
      <div className="mx-auto container px-4 whitespace-nowrap pb-5">
      <div className=" gap-2">
      <div className="w-full h-10 bg-gray-200 flex items-center text-xl p-5 font-bold">
          <span>Desktop Computers</span>
          </div>
          <DiscountSection></DiscountSection>
        </div>
      </div>

      {/* Laptop Product List Section */}
      <div className="mx-auto container px-4 whitespace-nowrap pb-5">
      <div className=" gap-2">
      <div className="w-full h-10 bg-gray-200 flex items-center text-xl p-5 font-bold">
          <span>Monitors</span>
          </div>
          <DiscountSection></DiscountSection>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;

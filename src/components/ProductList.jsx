import React from 'react';
 const ProductList = ({ title, viewAll, children }) => {
     return (
        
      <div className="container mx-auto py-8">
       <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">{title}</h2>
        <button  className='text-sm text-gray-600 hover:text-gray-800 font-medium '> {viewAll}</button>
        </div>
             <div className="flex flex-wrap justify-start gap-4  ">
                   {children}
              </div>
   </div>
     );
};
  export default ProductList;
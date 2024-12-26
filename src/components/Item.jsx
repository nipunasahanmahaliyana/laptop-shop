import React from 'react';

const ProductModal = ({ onClose, product }) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-xl relative w-full max-w-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          Close
        </button>

        <div className="flex space-x-8">
          {/* Product Image */}
          <img
            //src={product.image}
            alt={product.name}
            className="w-1/2 h-auto"
          />

          <div className="w-1/2">
            {/* Product Name */}
            <h2 className="text-xl font-bold">{product.name}</h2>

            {/* Product Details */}
            <p className="text-gray-700">
              Brand: <span className="text-blue-500">{product.brand}</span>
            </p>
            <p className="text-3xl font-bold text-red-500">
              රු.{product.price.toLocaleString()}{' '}
              {product.originalPrice > product.price && (
                <span className="text-gray-500 line-through text-sm">
                  රු.{product.originalPrice.toLocaleString()}
                </span>
              )}
            </p>
            <p className="text-green-600 mb-4">Status: Available</p>
            <h3 className="text-xl font-bold mt-4">{product.description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

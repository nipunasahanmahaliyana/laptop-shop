// ShoppingCartApp.js
import React, { useState } from 'react';

const products = [
  { id: 1, name: "Product A", price: 500, image: "https://via.placeholder.com/100" },
  { id: 2, name: "Product B", price: 1000, image: "https://via.placeholder.com/100" },
  { id: 3, name: "Product C", price: 750, image: "https://via.placeholder.com/100" },
  { id: 1, name: "Product A", price: 500, image: "https://via.placeholder.com/100" },
  { id: 2, name: "Product B", price: 1000, image: "https://via.placeholder.com/100" },
  { id: 3, name: "Product C", price: 750, image: "https://via.placeholder.com/100" },
  { id: 1, name: "Product A", price: 500, image: "https://via.placeholder.com/100" },
  { id: 2, name: "Product B", price: 1000, image: "https://via.placeholder.com/100" },
  { id: 3, name: "Product C", price: 750, image: "https://via.placeholder.com/100" },
  { id: 1, name: "Product A", price: 500, image: "https://via.placeholder.com/100" },
  { id: 2, name: "Product B", price: 1000, image: "https://via.placeholder.com/100" },
  { id: 3, name: "Product C", price: 750, image: "https://via.placeholder.com/100" },
  { id: 1, name: "Product A", price: 500, image: "https://via.placeholder.com/100" },
  { id: 2, name: "Product B", price: 1000, image: "https://via.placeholder.com/100" },
  { id: 3, name: "Product C", price: 750, image: "https://via.placeholder.com/100" },
];

function ShoppingCartApp() {
  const [cart, setCart] = useState([]);

  // Add to cart function
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Listing */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover mb-4"
                />
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-700">LKR {product.price.toFixed(2)}</p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
          {cart.length > 0 ? (
            <div className="bg-white p-4 rounded-lg shadow-md">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-4"
                >
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">LKR {item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="px-2 py-1 bg-gray-300 text-gray-800 rounded"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-300 text-gray-800 rounded"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="ml-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="text-right font-semibold text-lg">
                Total: LKR {totalPrice.toFixed(2)}
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Checkout
              </button>
            </div>
          ) : (
            <p className="text-gray-700">Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartApp;

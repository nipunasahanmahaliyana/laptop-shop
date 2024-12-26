import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  ProductPage from './components/Product'
import Page from './components/Page'
import CartPage from './components/Cart/Cart';
import CheckoutPage from './components/checkout';
import ContactPage from './components/Contact';
import Item from './components/Item';
import BillPage from './components/Bill';
import Example from './components/Example';
import { CartProvider } from './components/Cart/CartContext';
import Breadcrumb from './components/Breadcrumb';

 function App() {
     return (
         
      <CartProvider>
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
       <Route path="/page" element={<Page></Page>}/>
       <Route path="/cart" element={<CartPage></CartPage>}/>
        <Route path="/checkout" element={<CheckoutPage></CheckoutPage>}/>
        <Route path="/contact" element={<ContactPage></ContactPage>}/>
        <Route path="/item" element={<Item></Item>}/>
        <Route path="/bill" element={<BillPage></BillPage>}/>
        <Route path="/example" element={<Example></Example>}/>
      </Routes>
    </Router>
    
    </CartProvider>
   );
}
  
export default App;
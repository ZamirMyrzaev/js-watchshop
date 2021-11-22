import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/AddProduct/ProductDetails';
import ProductModal from './components/AddProduct/ProductModal';
import EditProducts from './components/Edit/EditProducts';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ProductContextProvider from './context/ProductContext';
import Cart from './components/Cart/Cart';
import AuthContextProvider from './context/AuthContext';
import Auth from './components/Auth/Auth';
import Payment from './components/Payment/Payment';
import Modal from './components/Modal/Modal'
import Comments from './components/Comments/Comments';
import Chosen from './components/Chosen/Chosen';

const MainRoutes = () => {
    return (
       <ProductContextProvider>
         <AuthContextProvider>
          <BrowserRouter>
             <Navbar />
                <Routes>
                   <Route path="/" element={<Home/>} />
                   <Route path="/add" element={<ProductModal/>} />
                   <Route path="/details/:id" element={<ProductDetails />} />
                   <Route path="/edit/:id" element={<EditProducts />} />
                   <Route path="/cart" element={<Cart />} />
                   <Route path="/auth" element={<Auth/>} />
                   <Route path="/pay" element={<Payment />} />
                   <Route path="/modal" element={<Modal />} />
                   <Route path="/comments" element={<Comments />} />
                   <Route path="/chosen" element={<Chosen />} />
                </Routes>
           </BrowserRouter>
         </AuthContextProvider>
       </ProductContextProvider>
        
        
    );
}

export default MainRoutes;
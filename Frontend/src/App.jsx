import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { Notfound } from "./components/NotFound";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import AllProduct from "./pages/AllProduct";
import ProductCategoies from "./components/ProductCategoies";


import { AnimatePresence } from "framer-motion";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AddAddress from "./pages/AddAdress";

const App = () => {
  const location = useLocation();
  const isSellerPath = location.pathname.includes("seller");
  const { showUserLogin } = useAppContext();

  return (
    <div>
      {!isSellerPath && <Navbar />}
      {showUserLogin && <Login />}
      <Toaster />

      <div className={`${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<AllProduct />} />
            <Route path="/products/:category" element={<ProductCategoies />} />
            <Route path="/products/:category/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add-address" element={<AddAddress />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </AnimatePresence>
      </div>

      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;

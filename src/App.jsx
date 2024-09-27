import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./pages/SideBar";

const App = () => {
  return (
    // browser router is accomplished
    <BrowserRouter>
    {/* header is accomplished hence it does not change */}
  <Header />
  {/* routes are accomplished */}
  <Routes>
    {/* route is accomplished for home page and product details page */}
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<ProductDetails />} />
  </Routes>
  {/* sidebar and footer are accomplished at last */}
  <SideBar />
  <Footer />
  </BrowserRouter>
  );
};
export default App;


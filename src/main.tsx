import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { Collection } from "./pages/Collection"; 
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import { Cart } from "./components/Cart";
import { PlaceOrder } from "./pages/PlaceOrder";
import { Orders } from "./pages/Orders";
import { ShopProvider } from "./context/ShopContext";
import { Footer } from "./components/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <ShopProvider>
    <Router>


      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="login" element={<Login/>}/>
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/orders" element={<Orders />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
    </ShopProvider>
  </StrictMode>
);

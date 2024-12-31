import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; 
import { BrowserRouter as Router, useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // For page transitions
import "./index.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { Collection } from "./pages/Collection"; 
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { PlaceOrder } from "./pages/PlaceOrder";
import { Orders } from "./pages/Orders";
import { ShopProvider } from "./context/ShopContext";
import { Footer } from "./components/Footer";
import { PageTransition } from "./components/PageTransition"; // Page transition component
import { Toaster } from "@/components/ui/sonner"

// Wrap routes in AnimatePresence for smooth transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    
    <AnimatePresence >
            <Toaster />
      <Routes location={location} key={location.pathname}>

        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/collection"
          element={
            <PageTransition>
              <Collection />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
        <Route
          path="/login"
          element={
            <PageTransition>
              <Login />
            </PageTransition>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <PageTransition>
              <Product />
            </PageTransition>
          }
        />
        <Route
          path="/cart"
          element={
            <PageTransition>
              <Cart />
            </PageTransition>
          }
        />
        <Route
          path="/placeorder"
          element={
            <PageTransition>
              <PlaceOrder />
            </PageTransition>
          }
        />
        <Route
          path="/orders"
          element={
            <PageTransition>
              <Orders />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    
      <Router>
      <ShopProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </ThemeProvider>
        </ShopProvider>
      </Router>
 
  </StrictMode>
);

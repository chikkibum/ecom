import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, User, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/mode-toggle";
import { ReactNode } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";  // Import NavLink
import { Profile } from "./Profile";
import { Cart } from "./Cart";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <motion.li
    whileHover={{ opacity: 0.7 }}
    transition={{ duration: 0.1 }}
    whileTap={{ scale: 0.95 }}
    className="relative"
  >
    <RouterNavLink
      to={href}
      className={({ isActive }) =>
        `text-foreground hover:text-primary transition-colors ${
          isActive ? 'underline ' : '' // Underline when active
        }`
      }
    >
      {children}
    </RouterNavLink>
  </motion.li>
);


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="w-full py-4">
      <div className="container lg:w-[75vw] md:w-[80vw] mx-auto px-8 md:px-2 mt-2 md:mt-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center  gap-12">
            <Link to="/" className="text-2xl font-bold text-foreground">
              🧑‍💻
            </Link>

            <ul className="hidden md:flex space-x-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/collection">Collection</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </ul>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="search__container">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mr-1"
                  >
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="w-full"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              initial={false}
              animate={{ width: 40, opacity: 1 }}
              className="flex items-center"
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                {isSearchOpen ? <X /> : <Search />}
              </Button>
            </motion.div>

            <Button variant="ghost" size="icon">
              <Profile/>
            </Button>

            <Button variant="ghost" size="icon">
            <Link to="/cart">
              <Cart />
            </Link>
            </Button>
            
            <ModeToggle />
          </div>

          <div className="menu lg:hidden flex items-center gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon">
            <Profile/>
              
            </Button>
            <Button variant="ghost" size="icon">
            <Link to="/cart">
              <Cart />
            </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-4 space-y-4 px-2"
            >
              <ul className="flex flex-col md:hidden items-center space-y-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/collection">Collection</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </ul>
              <div className="flex flex-col space-y-2 mt-16 md:py-8">
                <Input type="search" placeholder="Search..." />
                <Button variant="outline" className="w-full">
                  Login
                </Button>
                <Button className="w-full">Sign Up</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

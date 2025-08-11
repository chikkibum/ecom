import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SearchBar } from "./SearchBar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { ReactNode } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";  // Import NavLink
import { Profile } from "./Profile";
import { CartIcon } from "./CartIcon";
import logo from "../assets/Logo.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Home, Package, User, Phone, ShoppingCart } from "lucide-react";

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
        `text-foreground hover:text-primary transition-colors ${isActive ? 'underline ' : '' // Underline when active
        }`
      }
    >
      {children}
    </RouterNavLink>
  </motion.li>
);


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className="w-full py-4">
        <div className="container lg:w-[75vw] md:w-[80vw] mx-auto px-8 md:px-2 mt-2 md:mt-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center  gap-12">
              <Link to="/" className="text-2xl font-bold text-foreground">
                <img src={logo} alt="" className="w-12 h-12" />
              </Link>

              <ul className="hidden md:flex space-x-6">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/collection">Collection</NavLink>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <motion.li
                      whileHover={{ opacity: 0.7 }}
                      transition={{ duration: 0.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative flex items-center gap-1 cursor-pointer text-foreground hover:text-primary transition-colors"
                    >
                      Category
                      <ChevronDown className="h-4 w-4" />
                    </motion.li>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Hookah</DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Traditional Hookah</DropdownMenuItem>
                        <DropdownMenuItem>Modern Hookah</DropdownMenuItem>
                        <DropdownMenuItem>Portable Hookah</DropdownMenuItem>
                        <DropdownMenuItem>Premium Hookah</DropdownMenuItem>
                        <DropdownMenuItem>Mini Hookah</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>Hookah Flavours</DropdownMenuSubTrigger>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Mint</DropdownMenuItem>
                        <DropdownMenuItem>Apple</DropdownMenuItem>
                        <DropdownMenuItem>Grape</DropdownMenuItem>
                        <DropdownMenuItem>Strawberry</DropdownMenuItem>
                        <DropdownMenuItem>Vanilla</DropdownMenuItem>
                        <DropdownMenuItem>Chocolate</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuSub>
                  </DropdownMenuContent>
                </DropdownMenu>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </ul>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              {/* <div className="search__container">
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
              </div> */}

              {/* <motion.div
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
              </motion.div> */}
              <SearchBar className={''} />

              <Button variant="ghost" size="icon">
                <Profile />
              </Button>

              <Button variant="ghost" size="icon">
                <Link to="/cart">
                  <CartIcon />
                </Link>
              </Button>

              <ModeToggle />
            </div>

            <div className="menu lg:hidden hidden items-center gap-2">
              <ModeToggle />
              <Button variant="ghost" size="icon">
                <Profile />

              </Button>
              <Button variant="ghost" size="icon">
                <Link to="/cart">
                  <CartIcon />
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
                  <div className="text-center">
                    <div className="text-foreground hover:text-primary transition-colors mb-2">Category</div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>• Hookah</div>
                      <div className="ml-4 text-xs">
                        <div>Traditional Hookah</div>
                        <div>Modern Hookah</div>
                        <div>Portable Hookah</div>
                        <div>Premium Hookah</div>
                        <div>Mini Hookah</div>
                      </div>
                      <div>• Hookah Flavours</div>
                      <div className="ml-4 text-xs">
                        <div>Mint</div>
                        <div>Apple</div>
                        <div>Grape</div>
                        <div>Strawberry</div>
                        <div>Vanilla</div>
                        <div>Chocolate</div>
                      </div>
                    </div>
                  </div>
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/contact">Contact</NavLink>
                </ul>
                <div className="flex flex-col space-y-2 mt-16 md:py-8">
                  <SearchBar className={" justify-center"} />
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

      {/* Bottom Navigation for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50">
        <div className="flex items-center justify-evenly py-3">
          <Link
            to="/"
            className="flex flex-col items-center space-y-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>

          <Link
            to="/collection"
            className="flex flex-col items-center space-y-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <Package className="h-5 w-5" />
            <span>Collection</span>
          </Link>

          <Link
            to="/cart"
            className="flex flex-col items-center space-y-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Cart</span>
          </Link>

          <Link
            to="/about"
            className="flex flex-col items-center space-y-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <User className="h-5 w-5" />
            <span>About</span>
          </Link>

          <Link
            to="/contact"
            className="flex flex-col items-center space-y-1 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

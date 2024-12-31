
// @ts-nocheck


import { useContext,useState, useEffect, ReactNode } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ShopContext } from "@/context/ShopContext";
import { useLocation } from "react-router-dom";

export const SearchBar = ({className}) => {
  const { search, setSearch, isSearchOpen, setIsSearchOpen } =
    useContext(ShopContext);
    const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection") ) {
      setVisible(true);
      setIsSearchOpen(true)
    } else {
      setVisible(false);
    }
  }, [location]);

  return visible? (
    <>
    <div className={` gap-3 flex ${className}`}>
      <div className="search-container">
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
              className={`w-full`}
            >
              <Input
                type="search"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`w-full`}
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
      </div>
    </>
  ):null
};

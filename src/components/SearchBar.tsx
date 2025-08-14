import { useContext } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ShopContext } from "@/context/ShopContext";

interface SearchBarProps {
  className?: string;
}

export const SearchBar = ({ className }: SearchBarProps) => {
  const shop = useContext(ShopContext);
  if (!shop) return null;
  const { search, setSearch, isSearchOpen, setIsSearchOpen } = shop;

  return (
    <>
      <div className={`flex flex-row-reverse items-center gap-1 ${className}`}> {/* reverse flex direction, reduce gap */}
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
            className="p-2"
          >
            {isSearchOpen ? <X /> : <Search />}
          </Button>
        </motion.div>
        <div className="search-container flex items-center">
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 180 }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
                style={{ marginRight: '0.5rem' }}
              >
                <Input
                  type="search"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

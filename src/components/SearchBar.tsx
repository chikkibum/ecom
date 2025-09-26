import { useContext, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { ShopContext } from "@/context/ShopContext";

interface SearchBarProps {
  className?: string;
}

export const SearchBar = ({ className }: SearchBarProps) => {
  const shop = useContext(ShopContext);
  const placeholders = [
    "Search Best Hookah",
    "Search Best Flavours",
    "Search Accessories & Parts"
  ];
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPlaceholderIdx((prev) => (prev + 1) % placeholders.length);
        setFade(true);
      }, 300); // fade out duration
    }, 2500);
    return () => clearInterval(interval);
  }, [placeholders.length]);

  if (!shop) return null;
  const { search, setSearch } = shop;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-full">
        <Input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
        <span
          className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-opacity duration-300 ${search ? 'opacity-0' : fade ? 'opacity-100' : 'opacity-0'}`}
        >
          {placeholders[placeholderIdx]}
        </span>
      </div>
    </div>
  );
};

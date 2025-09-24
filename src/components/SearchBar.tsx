import { useContext } from "react";
import { Input } from "./ui/input";
import { ShopContext } from "@/context/ShopContext";

interface SearchBarProps {
  className?: string;
}

export const SearchBar = ({ className }: SearchBarProps) => {
  const shop = useContext(ShopContext);
  if (!shop) return null;
  const { search, setSearch } = shop;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full"
      />
    </div>
  );
};

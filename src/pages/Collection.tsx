// @ts-nocheck


import React, { useContext, useEffect, useState, useCallback } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "@/assets/assets";
import Title from "@/components/Title";
import { ProductItem } from "@/components/ProductItem";
import { SearchBar } from "@/components/SearchBar";

export const Collection = () => {
  const { products = [], search, isSearchOpen } = useContext(ShopContext) || {};
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState(products); // Initialize with products
  const [category, setCategory] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState<string[]>([]);
  const [sortType, setSortType] = useState("relevant"); // Fixed typo in "relevant"

  // Initialize products on mount
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  const handleCategory = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCategory(prev => prev.includes(value)
      ? prev.filter(item => item !== value)
      : [...prev, value]
    );
  }, []);

  const handleSubCategory = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSubCategory(prev => prev.includes(value)
      ? prev.filter(item => item !== value)
      : [...prev, value]
    );
  }, []);

  // Combined filter and sort function
  const applyFilterAndSort = useCallback(() => {
    let tempProducts = products.slice();

    if (isSearchOpen && search) {
      tempProducts = tempProducts.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    // Apply category filters
    if (category.length > 0) {
      tempProducts = tempProducts.filter(item => category.includes(item.category));
    }

    // Apply subcategory filters
    if (subCategory.length > 0) {
      tempProducts = tempProducts.filter(item => subCategory.includes(item.subCategory));
    }

    // Apply sorting
    switch (sortType) {
      case "low-high":
        tempProducts.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        tempProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        // For "relevant", keep original order
        break;
    }

    setFilterProducts(tempProducts);
  }, [category, subCategory, sortType, products, search, isSearchOpen]);

  // Single effect to handle both filtering and sorting
  useEffect(() => {
    applyFilterAndSort();
  }, [applyFilterAndSort, search, isSearchOpen]);

  return (
    <div className="container lg:w-[75vw] md:w-[80vw] mx-auto px-8 md:px-2 mt-2 md:mt-4">
      {/* <SearchBar className={"w-[60vw] bg-red-400  flex justify-center py-4 "} /> */}
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* Filter Options */}
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS
            <img
              className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
              src={assets.dropdown_icon}
              alt="Toggle filter options"
            />
          </p>

          {/* Category Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"
              } sm:block`}
          >
            {["Hookah", "Shisha", "Accessories", "Tobacco"].map((item) => (
              <p key={item} className="flex gap-2">
                <input
                  className="w-4"
                  type="checkbox"
                  value={item}
                  checked={category.includes(item)}
                  onChange={handleCategory}
                />
                <label htmlFor={item.toLowerCase()}>{item}</label>
              </p>
            ))}
          </div>

          {/* Product Type Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"
              } sm:block`}
          >
            {["Traditional", "Modern", "Premium", "Budget"].map((item) => (
              <p key={item} className="flex gap-2">
                <input
                  className="w-4"
                  type="checkbox"
                  value={item}
                  checked={subCategory.includes(item)}
                  onChange={handleSubCategory}
                />
                <label htmlFor={item.toLowerCase()}>{item}</label>
              </p>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />

            {/* Product Sort */}
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="w-full dark:text-gray-200 dark:bg-black dark:outline-none sm:w-auto border-2 border-gray-500 text-xs sm:text-sm md:text-base px-2 py-1 md:py-2"
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
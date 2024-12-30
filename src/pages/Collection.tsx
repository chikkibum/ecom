import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "@/assets/assets";
import Title  from "@/components/Title"; 

export const Collection = () => {
  const { products } = useContext(ShopContext); // Make sure this context provides products
  const [showFilter, setShowFilter] = useState(false);

  console.log(showFilter);

  return (
    <div className="container lg:w-[75vw] md:w-[80vw] mx-auto px-8 md:px-2 mt-2 md:mt-4">
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
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="flex gap-2">
              <input className="w-4" type="checkbox" id="men" />{" "}
              <label htmlFor="men">Men</label>
            </p>

            <p className="flex gap-2">
              <input className="w-4" type="checkbox" id="women" />{" "}
              <label htmlFor="women">Women</label>
            </p>

            <p className="flex gap-2">
              <input className="w-4" type="checkbox" id="kids" />{" "}
              <label htmlFor="kids">Kids</label>
            </p>
          </div>

          {/* Product Type Filter */}
          <div
            className={`border border-gray-300 pl-5 py-3 mt-6 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="flex gap-2">
              <input className="w-4" type="checkbox" id="topwear" />{" "}
              <label htmlFor="topwear">Topwear</label>
            </p>

            <p className="flex gap-2">
              <input className="w-4" type="checkbox" id="bottomwear" />{" "}
              <label htmlFor="bottomwear">Bottomwear</label>
            </p>

            <p className="flex gap-2">
              <input className="w-4" type="checkbox" id="footwear" />{" "}
              <label htmlFor="footwear">Footwear</label>
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-4">
            <Title text1={"ALL"} text2={"COLLECTIONS"} />

            {/* Product Sort */}
            <select className="w-full sm:w-auto border-2 border-gray-300 text-xs sm:text-sm md:text-base px-2 py-1 md:py-2">
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

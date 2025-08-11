// @ts-nocheck


import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext, Product as ProductType } from "../context/ShopContext";
import { assets } from "@/assets/assets";
import { RelatedProducts } from "@/components/RelatedProducts";

export const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products = [], currency = "$", addToCart } = useContext(ShopContext) || {};
  const [productData, setProductData] = useState<ProductType | null>(null);
  const [image, setImage] = useState<string>("");

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
    // Scroll to the top when productId changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productId, products]);

  return productData ? (
    <div className="container lg:w-[75vw] md:w-[80vw] mx-auto px-8 md:px-2 mt-2 md:mt-4">
      <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 dark:border-gray-700">
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* Product Images Section */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            {/* Thumbnail Images */}
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto max-h-[500px] justify-between sm:justify-normal">
              {productData.image.map((item, index) => (
                <img
                  key={index}
                  className={`w-[20%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer transition duration-300 hover:scale-103
                    ${image === item
                      ? "border-2 border-gray-500 dark:border-gray-300"
                      : ""
                    }`}
                  src={item}
                  alt={`Hookah product image ${index + 1}`}
                  onClick={() => setImage(item)}
                />
              ))}
            </div>
            {/* Main Image */}
            <div className="w-full sm:w-[80%]">
              <img
                src={image}
                alt={productData.name}
                className="w-full h-auto object-cover dark:border-gray-700"
              />
            </div>
          </div>

          {/* Product Info Section */}
          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2 dark:text-gray-200">
              {productData.name}
            </h1>

            {/* Rating Section */}
            <div className="flex items-center gap-1 mt-2">
              {[...Array(4)].map((_, index) => (
                <img
                  key={index}
                  src={assets.star_icon}
                  alt="star"
                  className="w-3.5"
                />
              ))}
              <img
                src={assets.star_dull_icon}
                alt="dull star"
                className="w-3.5"
              />
              <p className="pl-2 text-gray-600 dark:text-gray-400">(122)</p>
            </div>

            {/* Price & Description */}
            <p className="mt-5 text-3xl font-medium dark:text-gray-100">
              {currency}
              {productData.price.toFixed(2)}
            </p>
            <p className="mt-5 text-gray-500 md:w-4/5 dark:text-gray-400">
              {productData.description}
            </p>

            {/* Product Specifications */}
            <div className="flex flex-col gap-4 my-8">
              <p className="font-medium dark:text-gray-200">Product Specifications</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                  <span className="font-medium text-gray-600 dark:text-gray-300">Category:</span>
                  <p className="text-gray-800 dark:text-gray-200">{productData.category}</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-md">
                  <span className="font-medium text-gray-600 dark:text-gray-300">Sub Category:</span>
                  <p className="text-gray-800 dark:text-gray-200">{productData.subCategory}</p>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(productData._id)}
              className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full sm:w-auto"
            >
              ADD TO CART
            </button>

            {/* Get Quotation Button */}
            <button
              onClick={() => document.getElementById('quotationModal').showModal()}
              className="bg-blue-600 text-white px-8 py-3 text-sm mt-4 active:bg-blue-700 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 w-full sm:w-auto"
            >
              GET QUOTATION
            </button>

            {/* Quotation Modal */}
            <dialog id="quotationModal" className="modal p-6 rounded-lg shadow-2xl max-w-md w-full bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <div className="modal-content">
                <div className="flex justify-between items-center mb-6 border-b pb-4 dark:border-gray-700">
                  <h3 className="text-xl font-bold dark:text-gray-200">Request Quotation</h3>
                  <button
                    onClick={() => document.getElementById('quotationModal').close()}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="border p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="border p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Country"
                      className="border p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="border p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Product Model/Part Number"
                    className="border p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="Quantity"
                      className="border p-3 rounded-md w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      required
                      min="1"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
                      <button type="button" className="px-2 bg-gray-100 dark:bg-gray-600 rounded">-</button>
                      <button type="button" className="px-2 bg-gray-100 dark:bg-gray-600 rounded">+</button>
                    </div>
                  </div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="border p-3 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 mt-3 rounded-md hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 font-medium tracking-wide transition-colors shadow-md hover:shadow-lg"
                  >
                    GET QUOTATION NOW
                  </button>
                  <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
                    We'll respond to your quotation request within 24 hours
                  </p>
                </form>
              </div>
            </dialog>

            <hr className="mt-8 sm:w-4/5 dark:border-gray-700" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 dark:text-gray-400">
              <p>100% Original hookah products.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
              <p>Premium quality materials and craftsmanship.</p>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-gray-100"></div>
    </div>
  );
};

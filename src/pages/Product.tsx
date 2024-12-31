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
  const [selectedSize, setSelectedSize] = useState<string>("");

  const fetchProductData = () => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
      // Set first size as default selected
      if (product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
      }
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
                    ${
                      image === item
                        ? "border-2 border-gray-500 dark:border-gray-300"
                        : ""
                    }`}
                  src={item}
                  alt={`Product image ${index + 1}`}
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

            {/* Size Selection */}
            <div className="flex flex-col gap-4 my-8">
              <p className="font-medium dark:text-gray-200">Select Size</p>
              <div className="flex gap-2 flex-wrap">
                {productData.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`border py-2 px-4 transition duration-200
                      ${
                        selectedSize === size
                          ? "bg-black text-white dark:bg-gray-800 dark:border-gray-600"
                          : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
                      }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,selectedSize)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              ADD TO CART
            </button>
            <hr className="mt-8 sm:w-4/5 dark:border-gray-700" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 dark:text-gray-400">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
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

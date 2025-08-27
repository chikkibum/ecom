// @ts-nocheck

import  { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { ProductItem } from "./ProductItem";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
}

export const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState<Product[]>([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"NEW"} text2={"ARRIVALS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-muted-foreground dark:text-gray-200">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem I
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;

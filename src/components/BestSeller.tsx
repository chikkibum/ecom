import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import { ProductItem } from './ProductItem'

export const BestSeller = () => {


    interface Product {
        _id: string;
        name: string;
        description: string;
        price: number;
        image: string[];
        category: string;
        subCategory: string;
        sizes: string[];
        date: number;
        bestseller: boolean;
    }

  const context = useContext(ShopContext);
  if (!context) throw new Error('useContext must be used within ShopContext.Provider');
  const {products} = context;


  const [bestSeller, setBestSeller] = useState<Product[]>([]);

  useEffect(()=>{
    const bestProduct = products.filter((item: Product)=> item.bestseller)
    setBestSeller(bestProduct);
  }, [products])

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ips
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-8">
        {bestSeller.map((item, index) => (
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
  )
}


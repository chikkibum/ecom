// @ts-nocheck

import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

interface ProductItemProps {
  id: string;
  image: string[];
  name: string;
  price: number;
}

export const ProductItem = ({ id, image, name, price }: ProductItemProps) => {

  const { currency } = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img
          className='hover:scale-110 transition-all duration-700 ease-in-out transform-gpu'
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateY(0deg)',
            transition: 'all 0.7s ease-in-out'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1) rotateY(180deg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) rotateY(0deg)';
          }}
          src={image[0]}
          alt=""
        />
      </div>
      <div className='flex flex-row gap-5 items-center px-5'>
        <p className='pt-3 pb-1 text-sm dark:text-gray-200 w-[75%]'>{name}</p>
        <p className='text-sm font-medium dark:text-gray-400 flex flex-row w-1/4'>{currency} {price}</p></div>
    </Link>
  )
}
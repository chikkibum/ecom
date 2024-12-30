
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

interface ProductItemProps {
  id: number;
  image: string[];
  name: string;
  price: number;
}

export const ProductItem = ({id, image, name, price}: ProductItemProps) => {

  const {currency} = useContext (ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className=' overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm dark:text-gray-200'>{name}</p>
      <p className='text-sm font-medium dark:text-gray-400'>{currency} {price}</p>
    </Link>
  )
}
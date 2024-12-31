import  { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

export const CartTotal = () => {

  const context = useContext(ShopContext);

  if (!context) {
    return null; // or handle the error appropriately
  }

  const {currency, delivery_fee, getCartAmount} = context;

  return (
    <div className='w-full'>

      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency} {getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p>shipping fee</p>
            <p>{currency} {delivery_fee}</p>
        <hr />
        <div className='flex justify-between'>
            <p>Total</p>
            <p>{currency} {getCartAmount() === 0? 0 :getCartAmount() + delivery_fee}.00</p>
        </div>
        </div>
      </div>
    </div>
  )
}
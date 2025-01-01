// @ts-nocheck


import { ShopContext } from '@/context/ShopContext'
import { useContext, useState, useEffect } from 'react'
import Title from '@/components/Title'
import { Input } from '@/components/ui/input'
import { assets } from '@/assets/assets'
import { CartTotal } from '@/components/CartTotal'



// @ts-nocheck
export const Cart = () => {
  // @ts-ignore
    const {products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext)
    const[cartData, setCartData] = useState([])

    useEffect(()=>{

        const tempData = [];
        for(const items in cartItems){
          for(const item in cartItems[items]){
            if (cartItems[items][item] > 0) {
              tempData.push({
                _id: items,
                size:item,
                quantity:cartItems[items][item]
              })
            }
          }
        }
        // @ts-ignore
        setCartData(tempData); 
      },[cartItems])


// @ts-nocheck
 return (
    <div className="container lg:w-[75vw] md:w-[80vw] mx-auto px-8 md:px-2 mt-2 md:mt-4">
    <div className='border-t pt-14'>
      <div className=' text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {
          cartData.map((item,index)=>{
            // @ts-ignore
            const productData = products.find((product)=> product._id === item._id);
            return(
              <div key={index} className='py-4 boroder-t border-b text-gray-700 dark:text-gray-200 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                    <img className="w-16 sm:w-20" src={productData.image[0]} alt="" />
                    <div>
                        <p className='tex t-sm sm:text-lg font-medium'>{productData.name}</p>
                        <div className='flex items-center gap-5 mt-2'>
                            <p>{currency}{productData.price}</p>
                            <p className='px-2 sm:px-3 sm:py-1 border dark:bg-black bg-slate-50'>{item.size}</p>
                        </div>
                   </div>
                </div>
                <Input onChange={(e)=> e.target.value === '' || e.target.value === '0'? null : updateQuantity(item._id, item.size, e.target.value)} className='w-14' type='number' min={1} defaultValue={item.quantity}/>
                <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer ' src={assets.bin_icon} alt="" />
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
            <CartTotal/>
            <div className='w-full text-end'>
                <button onClick={() => navigate("./place-order")} className='w-full py-3 bg-black text-white rounded-md mt-5'>CHECKOUT</button>
            </div>
        </div>

      </div>
    </div>
    </div>
 )
}

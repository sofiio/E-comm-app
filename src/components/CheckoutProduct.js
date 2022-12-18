import React from 'react'
import { useStateValue } from './StateProvider';

export default function CheckoutProduct({id, title, image, price,}) {
  const [{basket}, dispatch] = useStateValue();
  const removeFromBasket = () =>{
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id:id,
    })
  }
  
  return (
    <div className=' max-w-[1640px]  mx-auto p-4 grid grid-cols-1 gap-6  relative  md:grid-cols-2 lg:grid-cols-3 '>
       <div className=' flex flex-col hover:scale-105 duration-300 w-full h-full  text-xl p-14 items-center bg-black/80 text-white '>
        <img src={image} alt=""/>
            <p ><strong>{title}</strong></p>
            <p >
                <small>$</small>
                <strong>{price}</strong>
            </p>
          <button className='border' onClick={removeFromBasket} >Remove from basket</button>
            </div>
    </div>
  )
}

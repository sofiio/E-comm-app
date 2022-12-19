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
    <div className=' max-w-[1640px] mt-4 grid grid-cols-1 gap-6  '>
       <div className=' flex flex-col  h-full  text-xl p-14 items-center  text-black '>
        <img className='w-[200px]' src={image} alt=""/>
            <p ><strong>{title}</strong></p>
            <p >
                <small>$</small>
                <strong>{price}</strong>
            </p>
          <button className='border-4 bg-black text-white' onClick={removeFromBasket} >Remove from basket</button>
            </div>
    </div>
  )
}

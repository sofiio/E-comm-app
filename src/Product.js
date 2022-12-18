import React from 'react'
import { useStateValue } from './components/StateProvider';

function Product({id, title, image, price, rating,}) {
  const [{basket}, dispatch] = useStateValue();
  return (
    <>
    <div className=" flex flex-col hover:scale-105 duration-300 w-full h-full  text-xl p-14 bg-white items-center">
  
      <img
        src={image}
        className="max-w-[150px] h-[200px] "
        alt=""
      />
      
      <p className=" text-black font-bold p-4">{title}</p>
      <span className="pt-2 text-black p-4">{price}$</span>

      <button onClick={()=>
        dispatch({
          type:`ADD_TO_BASKET`,
          item: {
            id:id,
            title:title,
            image:image,
            price:price,
          }
        })
      } className="bg-orange-600 text-white font-bold rounded-xl  w-[150px] m-4">
        Order now
      </button>
    </div>
  </>
  )
}

export default Product
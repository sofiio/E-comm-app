import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from './components/StateProvider';



function Product({id, title, image, price, description}) {
  const [{basket}, dispatch] = useStateValue();

  

  return (
    <>
    <div className=" flex flex-col hover:scale-105 duration-300 w-full h-full  text-xl p-14 bg-white items-center">
  
    <Link to="/ProductDetails">
      <img
      onClick={()=>
        dispatch({
          type:`SEE_DETAILS`,
          item: {
            id:id,
            title:title,
            image:image,
            price:price,
            description: description,
          }
        })
      }
        src={image}
        className="max-w-[150px] h-[200px] "
        alt=""
      />
    </Link>
      
      <p className=" text-black font-bold p-4">{title}</p>
      <p className=" text-black text-xs font-bold p-4">{description}</p>
      <span className="pt-2 text-black p-4">{price}$</span>

      {/* <button onClick={()=>
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
      </button> */}
      
    </div>
  </>
  )
}

export default Product
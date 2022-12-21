import React from "react";
import { useStateValue } from "./StateProvider";

export default function ProductDetailsCheckout({
  id,
  title,
  image,
  price,
  description,
}) {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className=" max-w-[1640px] mt-4 grid grid-cols-1 gap-6  ">
      <div className=" flex flex-col w-full h-full  text-xl p-14 items-center bg-black/80 text-white ">
        <img src={image} alt="" />
        <p>
          <strong>{title}</strong>
        </p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p>{description}</p>
        <button
          onClick={() =>
            dispatch({
              type: `ADD_TO_BASKET`,
              item: {
                id: id,
                title: title,
                image: image,
                price: price,
                description: description,
              },
            })
          }
          className="bg-orange-600 text-white font-bold rounded-xl  w-[150px] m-4"
        >
          Order now
        </button>
      </div>
    </div>
  );
}

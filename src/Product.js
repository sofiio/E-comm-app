import React from "react";
import { Link } from "react-router-dom";

const Product = (product) => {
  const { id, title, image, price, description } = product;
  console.log(product);

  return (
    <>
      <div className=" flex flex-col hover:scale-105 duration-300 w-full h-full  text-xl p-14 bg-white items-center">
        <Link to={`/product/${product.id}`}>
          <img src={image} className="max-w-[150px] h-[200px] " alt="" />
        </Link>

        <p className=" text-black font-bold p-4">{title}</p>
        <p className=" text-black text-xs font-bold p-4">{description}</p>
        <span className="pt-2 text-black p-4">{price}$</span>
      </div>
    </>
  );
};

export default Product;

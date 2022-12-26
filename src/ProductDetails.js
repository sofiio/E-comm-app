import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useParams } from "react-router-dom";
import { useStateValue } from "./components/StateProvider";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);

      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <p className="loading">Loading...</p>
      </>
    );
  };

  const ShowProduct = ({ id, title, image, price, description }) => {
    return (
      <div className="flex mt-10">
        <div>
          <img
            className="w-[400px] object-cover ml-5"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="ml-10">
          <h2 className="text-xl mt-5">
            <strong>{product.title}</strong>
          </h2>
          <p className="mt-5">{product.description}</p>
          <h1 className="mt-5">
            <strong>$ {product.price}</strong>
          </h1>
          <button
            className="bg bg-red-600 w-40 text-white mt-5 border border-black"
            onClick={() =>
              dispatch({
                type: `ADD_TO_BASKET`,
                item: {
                  id: product.id,
                  title: product.title,
                  image: product.image,
                  price: product.price,
                  description: product.description,
                },
              })
            }
          >
            {" "}
            Add to Cart
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />

      <div>
        <div>{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </>
  );
}

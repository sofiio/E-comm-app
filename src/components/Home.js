import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { json, Link, } from 'react-router-dom';
import CheckoutProduct from "./CheckoutProduct";
import Filter_menu from "./Filter_menu";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [noOneElement, setNoOneElement] = useState(6);

  const slice = data.slice(0, noOneElement);


  const filterType = (category) => {
    setData(
        data.filter((item)=> {
            return item.category === category;
        })
    );
};



  useEffect(() => {
    Fakestore();
  }, []);

  const Fakestore = async () => {
    const ApiGet = fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };


  function loadMore(){
    setNoOneElement(noOneElement+noOneElement);
  }


  return (
    <div className="max-w-[1640px] mx-auto ">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Hero />

      {/* <Filter_menu data={data} setData={setData}/> */}

    <div className=" max-w-[1640px] p-4 "><span className='text-white text-xl'>Choose category
    <div className='flex'>
    <button onClick= {()=>setData(data)}  className="bg-orange-600 hover:bg-white text-white hover:text-black font-bold rounded-xl  w-[120px] m-4" >all</button>
    <button onClick={()=> filterType("men's clothing")} className="bg-orange-600 hover:bg-white text-white hover:text-black font-bold rounded-xl  w-[120px] m-4">men's</button>
    <button onClick={()=> filterType("jewelery")}className="bg-orange-600 hover:bg-white text-white hover:text-black font-bold rounded-xl  w-[120px] m-4">women's</button>
    </div>
    </span></div>


      <div className="max-w-[1640px]  mx-auto p-4 grid grid-cols-1 gap-6  relative  md:grid-cols-2 lg:grid-cols-3">
        {slice
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })

          .map((values, key) => (
            <>
              <div className=" flex flex-col hover:scale-105 duration-300 w-full h-full  text-xl p-14 bg-white items-center">
              <Link to="/CheckoutProduct">
                <img
                  src={values.image}
                  className="max-w-[150px] h-[200px] "
                  alt=""
                />
               </Link>
                <p className=" text-black font-bold p-4">{values.title}</p>
                <span className="pt-2 text-black p-4">{values.price}$</span>

                <button className="bg-orange-600 text-white font-bold rounded-xl  w-[150px] m-4">
                  Order now
                </button>
              </div>
            </>
          ))}
      </div>
      <button className= "bg-white text-black font-bold  w-[400px] h-[40px] m-4" onClick={loadMore}>Load more...</button>
    </div>
  );
}

export default Home;

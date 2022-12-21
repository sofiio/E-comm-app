import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Product from "../Product";
import Footer from "../Footer";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [noOneElement, setNoOneElement] = useState(6);


  const [filters, setFilters] = useState(data);

  let componentMoundet = true;

  useEffect(() => {
    const Fakestore = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);

      if (componentMoundet) {
        setData(await response.clone().json());
        setFilters(await response.json());
      }

    };

    Fakestore();
    // this empty array is a dependency, which causes that  fetch runs only when component first renders  - no more time
  }, []);

  
  const filterType = (category) => {
    const updateList = data.filter((x) => x.category === category);
    setFilters(updateList);
  };


  function loadMore() {
    setNoOneElement(noOneElement + noOneElement);
  }

  return (
    <div className="max-w-[1640px] mx-auto  ">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Hero />

      <div className=" max-w-[1640px] p-4 ">
        <span className="text-white text-xl">
          Choose category
          <div className="flex">
            <button
              onClick={() => setFilters(data)}
              className="bg-orange-600 hover:bg-white text-white hover:text-black font-bold rounded-xl  w-[120px] m-4"
            >
              all
            </button>
            <button
              onClick={() => filterType("men's clothing")}
              className="bg-orange-600 hover:bg-white text-white hover:text-black font-bold rounded-xl  w-[120px] m-4"
            >
              men's
            </button>
            <button
              onClick={() => filterType("jewelery")}
              className="bg-orange-600 hover:bg-white text-white hover:text-black font-bold rounded-xl  w-[120px] m-4"
            >
              women's
            </button>
          </div>
        </span>
      </div>

      <div className="max-w-[1640px]  mx-auto p-4 grid grid-cols-1 gap-6  relative  md:grid-cols-2 lg:grid-cols-3">
        {filters
          .slice(0, noOneElement)
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
            <Product
              key={key}
              id={values.id}
              title={values.title}
              image={values.image}
              price={values.price}
              description={values.description}
            />
          ))}
      </div>
      <button
        className="bg-white text-black font-bold  w-[400px] h-[40px] m-4"
        onClick={loadMore}
      >
        Load more...
      </button>
      <Footer />
    </div>
  );
}

export default Home;

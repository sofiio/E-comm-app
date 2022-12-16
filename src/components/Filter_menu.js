import React, { useState, useEffect } from 'react'


function Filter_menu({data, setData}) {

    // filter by type

    const filterType = (category) => {
        setData(
            data.filter((item)=> {
                return item.category === category;
            })
        );
    };




  return (
    <>
    <div className=" max-w-[1640px] p-4 "><span className='text-white text-xl'>Choose category
    <div className='flex'>
    <button onClick= {()=>setData(data)}  className="bg-orange-600 hover:bg-white text-white hover:text-black font-bold rounded-xl  w-[120px] m-4" >all</button>
    <button onClick={()=> filterType("men's clothing")} className="bg-orange-600 hover:bg-white text-white hover:text-black font-bold rounded-xl  w-[120px] m-4">men's</button>
    <button onClick={()=> filterType("jewelery")}className="bg-orange-600 hover:bg-white text-white hover:text-black font-bold rounded-xl  w-[120px] m-4">women's</button>
    </div>
    </span></div>


 <div className=" max-w-[1640px] p-4 "><span className='text-white text-xl'>Choose price
    <div className='flex'>
    <button className="bg-orange-600 hover:bg-white text-white hover:text-black font-bold rounded-xl  w-[120px] m-4">0-10$</button>
    <button className="bg-orange-600 hover:bg-white text-white  hover:text-black  font-bold rounded-xl  w-[120px] m-4">10-100$</button>
    <button className="bg-orange-600 hover:bg-white text-white  hover:text-black  font-bold rounded-xl  w-[120px] m-4">100-200$</button>
    </div>
    </span></div>
  </>
  )
}

export default Filter_menu
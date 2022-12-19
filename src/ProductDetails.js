import React from 'react'
import Navbar from './components/Navbar';
import { useStateValue } from './components/StateProvider';
import ProductDetailsCheckout from './components/ProductDetailsCheckout';

export default function ProductDetails({id, title, image, price}) {
   
    const [{basket}, dispatch] = useStateValue();
    
  return (
    <>
      <Navbar />
        <div>
        
        <div >
        {basket.map(item =>(
        <ProductDetailsCheckout
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        description={item.description}
        />
        ))
        }
       
        </div>
       
        </div>

    </>
  );
}





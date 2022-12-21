import { useStateValue } from "./StateProvider";

import CheckoutProduct from "./CheckoutProduct";
import Navbar from "./Navbar";
import Footer from "../Footer";

//
function CheckOut() {
  const [{ basket }] = useStateValue();
  return (
    <>
      <Navbar />
      <div className="max-w-[1640px] mx-auto p-4 text-xl">
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
            <p>You can add items by clicking on the button: 'add to basket'</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your shopping basket :</h2>
            <div>
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CheckOut;

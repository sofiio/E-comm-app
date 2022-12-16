import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CheckoutProduct from "./components/CheckoutProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-black/80 ">
              <Home />
            </div>
          }
        />
         <Route path="/CheckoutProduct" element={<CheckoutProduct /> }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

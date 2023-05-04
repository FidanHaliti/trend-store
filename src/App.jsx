import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./context/CartProvider";

function App() {
  const [cartIsShow, setcartIsShow] = useState(false);

  const showCartHandler = () => {
    setcartIsShow(true);
  };
  const hideCartHandler = (e) => {
    e.preventDefault();
    setcartIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <Hero />
      <Products />
    </CartProvider>
  );
}

export default App;

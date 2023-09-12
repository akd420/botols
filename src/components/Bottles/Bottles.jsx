import { useState } from "react";
import { useEffect } from "react";
import Bottle from "../Bottle/Bottle";
import {
  addToDb,
  getStoredCart,
  removeFromDb,
} from "../../utilities/localStorae";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json"
    )
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      const addedCart = [];
      storedCart.map((id) => {
        const addedBottle = bottles.find((bottle) => bottle.id === id);
        return addedBottle ? addedCart.push(addedBottle) : null;
      });
      setCart(addedCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToDb(bottle.id);
  };
  const handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);
    removeFromDb(id);
  };
  return (
    <div>
      <h2 className="text-3xl">Total Bottles: {bottles.length}</h2>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-around gap-3">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;

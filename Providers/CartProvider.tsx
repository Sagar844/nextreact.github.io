import CartContext from "@/Context/ContextProvider";
import { movies } from "@/types";
import React from "react";
import { useState } from "react";

const CartProvider = ({ children }: any) => {
  const [cart, setcart] = useState<movies[]>([]);

  console.log(cart);

  const onaddtocart = (data: any) => {
    setcart([ ...cart , data]);
  };

  const updatecart = () => {};

  return (
    <div>
      <CartContext.Provider value={{ cart, setcart, onaddtocart, updatecart }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;

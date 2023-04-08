import CartContext from "@/Context/ContextProvider";
import { movies } from "@/types";
import React from "react";
import { useState } from "react";

const CartProvider = ({ children }: any) => {
  const [cart, setcart] = useState<movies[]>([]);

  console.log(cart);

  const onaddtocart = (data: movies) => {
    setcart([ ...cart , data]);
  };

  const  handleReamove = (id:number) => {
     setcart(prev => prev.filter((items) => items.id !== id))
  };

  return (
    <div>
      <CartContext.Provider value={{ cart, setcart, onaddtocart,  handleReamove }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export default CartProvider;

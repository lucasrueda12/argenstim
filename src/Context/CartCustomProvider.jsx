import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const { Provider } = Context;

/* contexto del carrito para que se comunique con los demas componentes que lo necesiten */
export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [pQuant, setpQuant] = useState(0);

  useEffect(() => {
    let cantProd = 0;
    cart.forEach((i) => {
      cantProd += i.quantity;
    });
    setpQuant(cantProd);
  }, [cart])

  const addItem = (item, quantity) => {
    const existeItem = isInCart(item);
    if (existeItem !== -1) {
      const newCart = cart.filter(itemCart => itemCart !== cart[existeItem]);
      setCart([{ ...item, quantity }, ...newCart]);
    } else {
      setCart([...cart, { ...item, quantity }])
    }
  }

  const removeItem = (item) => {
    const newCart = cart.filter(itemCart => itemCart.id !== item.id);
    setCart(newCart);
  }

  const clear = () => {
    setCart([]);
  }

  const isInCart = (item) => {
    return cart.findIndex(itemCart => itemCart.id === item.id);
  }
  console.log(cart);
  return <Provider value={{ cart, addItem, removeItem, clear, pQuant }}>{children}</Provider>;
};
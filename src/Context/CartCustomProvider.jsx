import React, { createContext, useState } from 'react';

export const Context = createContext();

const { Provider } = Context;

export const CartProvider = ({ children }) => {


    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {

        console.log(item);
        console.log(quantity);

        const existeItem = isInCart(item);
        if (existeItem !== -1) {
            const newCart = cart.filter(itemCart => itemCart !== cart[existeItem]);
            setCart([{...item, quantity}, ...newCart]);
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
    return <Provider value={{ cart, addItem, removeItem, clear }}>{children}</Provider>;
};
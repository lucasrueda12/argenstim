import React, { createContext } from 'react';

export const Context = createContext();

const {Provider} = Context;

export const CartProvider = ({ children }) => {
    return <Provider>{children}</Provider>;
};
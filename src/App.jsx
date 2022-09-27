import React, { useState } from 'react';
import Header from "./Components/Header/Header"
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './Components/CartView/Cart';

function App() {
  const item = "Las Ofertas de la SEMANAAA";

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={item}/>}/>
          <Route path='/category/:IdCategory' element={<ItemListContainer greeting={item} />}/>
          <Route path='/product/:IdProduct' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}


export default App;

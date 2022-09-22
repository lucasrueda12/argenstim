import React from 'react';
import Header from "./Components/Header/Header"
import {ItemListContainer} from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const item = "Las Ofertas de la SEMANAAA";
  return (
    <>
      <Header />
      <ItemListContainer greeting={item}/>
      <ItemDetailContainer />
    </>
  );
}


export default App;

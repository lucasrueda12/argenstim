import React from 'react';
import Header from "./Components/Header/Header"
import {ItemListContainer} from "./Components/ItemListContainer/ItemListContainer"

function App() {
  const item = "Las Ofertas de la SEMANAAA";
  return (
    <>
      <Header />
      <ItemListContainer greeting={item}/>
    </>
  );
}


export default App;

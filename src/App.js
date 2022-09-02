import React from 'react';
import NavBar from "./Components/Header/Header"
import {ItemListContainer} from "./Components/ItemListContainer/ItemListContainer"

function App() {

  const item = "Las Ofertas de la SEMANAAA";
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={item}/>
    </>

  );
}


export default App;

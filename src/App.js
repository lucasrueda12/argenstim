import React from 'react';
import NavBar from "./Components/NavBar/NavBar"

function App() {
  return (
    <>
      <NavBar />
      <h2 style={styles.titulo}> Las Ofertas de la SEMANAAA</h2>
    </>

  );
}

const styles = {
  titulo:{
    textAlign: 'center',
    width: '100%',
    color: '#E94560'
  }
}
export default App;

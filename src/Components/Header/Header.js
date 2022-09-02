import React from 'react';
import { NavBar } from './Nav/NavBar';

const Header = () =>{
  return (
    <header style={styles.contain}>
        <img src="" alt="" />
        <h1 style={styles.titulo}> ArgenEstim </h1>
        <NavBar />
    </header>
  );
}

const styles = {
    contain:{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: "#16213E"
        },
    titulo:{
            display: 'flex',
            color: "#E94560",
            fontSize: 30,
            width: 200,
        }
}

export default Header;

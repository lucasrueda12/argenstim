import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';

function Header() {
  return (
    <header style={styles.contain}>
    <img src="" alt="" />
    <h1 style={styles.titulo}> ArgenEstim </h1>
    <nav style={styles.nav}>
        <Button sx={{ border: '1px solid #533483', color: "#E94560" }} variant="text">Inicio</Button>
        <Button sx={{ border: '1px solid #533483', color: "#E94560" }} variant="text">Categorias</Button>
        <Button sx={{ border: '1px solid #533483', color: "#E94560"  }} variant="text">Ofertas</Button>
    </nav>
    <Button sx={{ border: '1px solid #533483', color: "#E94560"  }} variant="text">
        < ShoppingCartIcon 
            fontSize="large"
            sx={{ color: "#E94560" }}
        />
    </Button>
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
            width: '10%',
        },
    nav:{
        display: 'flex',
        width: 300,
        justifyContent: "space-between"
    },
}


export default Header;

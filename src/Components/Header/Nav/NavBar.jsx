import Button from '@mui/material/Button';
import { CartWidget } from '../CartWidget/CartWidget';

import '../Nav/NavBarStyle.css';

export const NavBar = ()=>{
    return (
        <nav className='navBar'>
            <Button sx={{ border: '1px solid #533483', color: "#E94560" }} variant="text">Inicio</Button>
            <Button sx={{ border: '1px solid #533483', color: "#E94560" }} variant="text">Categorias</Button>
            <Button sx={{ border: '1px solid #533483', color: "#E94560"  }} variant="text">Ofertas</Button>
            <CartWidget />
        </nav>
    );
}
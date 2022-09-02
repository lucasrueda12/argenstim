import Button from '@mui/material/Button';
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = ()=>{
    return (
        <nav style={styles.nav}>
            <Button sx={{ border: '1px solid #533483', color: "#E94560" }} variant="text">Inicio</Button>
            <Button sx={{ border: '1px solid #533483', color: "#E94560" }} variant="text">Categorias</Button>
            <Button sx={{ border: '1px solid #533483', color: "#E94560"  }} variant="text">Ofertas</Button>
            <CartWidget />
        </nav>
    );
}

const styles = {
    nav:{
        display: 'flex',
        width: 700,
        justifyContent: "space-between"
    },
}
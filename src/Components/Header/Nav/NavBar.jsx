import Button from '@mui/material/Button';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

import '../Nav/NavBarStyle.css';

/* 
  se cargan las categorias para ser mostradas al usuario en el header
*/

export const NavBar = ({ category }) => {
  return (
    <nav className='navBar'>
      <Link to='/' className='links'>
        <Button sx={{ border: '1px solid #533483', color: "#E94560" }} variant="text">Inicio</Button>
      </Link>
      
      {category.map((cat) =>
        <Link key={`category-${cat.id}`} to={cat.root} className='links'>
          <Button sx={{ border: '1px solid #533483', color: "#E94560" }} variant="text" >{cat.name}</Button>
        </Link>
      )}
      <Link to='/ofertas' className='links'>
        <Button sx={{ border: '1px solid #533483', color: "#E94560" }} variant="text">Ofertas</Button>
      </Link>
      <Link to='/cart' className='links'>
        <CartWidget />
      </Link>
    </nav>
  );
}
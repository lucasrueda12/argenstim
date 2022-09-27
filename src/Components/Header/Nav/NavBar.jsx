import Button from '@mui/material/Button';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

import '../Nav/NavBarStyle.css';

/* const category = [
    { id: 0, name: 'Action', root: '/category/action' },
    { id: 1, name: 'Adventure', root: '/category/adventure' },
    { id: 2, name: 'RPG', root: '/category/rpg' },
    { id: 3, name: 'Sports', root: '/category/sports' }
]; */

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
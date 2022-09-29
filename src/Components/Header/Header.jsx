import React from 'react';
import { NavBar } from './Nav/NavBar';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

import './HeaderStyle.css';

const category = [
  { id: 0, name: 'action', root: '/category/action' },
  { id: 1, name: 'indie', root: '/category/indie' },
  { id: 2, name: 'adventure', root: '/category/adventure' },
  { id: 3, name: 'sports', root: '/category/sports' }
];

const Header = () =>{
  return (
    <header className="headerContain">
      <Link to={'/'} className='links'>
        <img className='header-img' src={logo} alt={"logo"} />
      </Link>
      <Link to={'/'} className='links'>
        <h1 className='header-tit'> ArgenEstim </h1>
      </Link>
        <NavBar category={category} />
    </header>
  );
}

export default Header;

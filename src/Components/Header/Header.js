import React from 'react';
import { NavBar } from './Nav/NavBar';
import logo from '../../assets/logo.png';

import './HeaderStyle.css';

const Header = () =>{
  return (
    <header className="headerContain">
        <img className='header-img' src={logo} alt={"logo"} />
        <h1 className='header-tit'> ArgenEstim </h1>
        <NavBar />
    </header>
  );
}

export default Header;

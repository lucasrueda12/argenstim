import Button from '@mui/material/Button';
import React, { useState } from 'react';
import gowr from '../../../assets/GOWragnarok.jpg';

import './ItemCountStyle.css';

const ItemCount = ({stock, initial, onAdd}) =>{

    const [counter, setCounter] = useState(initial);

    const sumarCount = () =>{
        if(counter < stock){
            setCounter(counter + 1);
        }
    };

    const restarCount = () =>{
        if(counter > initial){
            setCounter(counter - 1);
        };
    };

    return (
        <div className='itemCountContainer'>
            <h3 className='count-tit'> God of War: Ragnarok</h3>
            <img className='count-img' src={gowr} alt="" />
            <div className='countContainer'>
                <Button sx={{ color: "#E94560" }} variant="text" onClick={sumarCount}>+</Button>
                <h3 className="countStyle">{counter}</h3>
                <Button sx={{ color: "#E94560" }} variant="text" onClick={restarCount}>-</Button>
            </div>

            <Button sx={{ border: '1px solid #533483', color: "#E94560" }} variant="text" onClick={()=>{if(stock > 0) onAdd(counter)}}>Agregar al Carrito</Button>
        </div>
    );
}

export default ItemCount;
import { useState, useEffect } from 'react';

import './ItemListContainerStyle.css';
import ItemCount from '../ItemListContainer/ItemCount/ItemCount';
import ItemList from '../ItemListContainer/ItemList/ItemList';



const initialProducts = [
  { id:0, title: 'God Of War: Ragnarok' , 
    description: 'Kratos se embarca en una nueva aventura, acompañado por su hijo, se enfrentaran a la mitologia nordica' ,
    price:4119,
    pictureURL: 'https://image.api.playstation.com/vulcan/ap/rnd/202109/2821/a0DyIs2SEHrYpciM1ideU1wv.jpg'},
  { id:1, title: 'Red Dead Redemption 2' , 
    description: 'La épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por toda América en el albor de una nueva era.' ,
    price: 1249.50, 
    pictureURL: 'https://image.api.playstation.com/gs2-sec/appkgo/prod/CUSA08519_00/12/i_3da1cf7c41dc7652f9b639e1680d96436773658668c7dc3930c441291095713b/i/icon0.png'},
  { id:2,
    title: 'ELDEN RING' , 
    description: 'EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.' ,
    price: 6499, 
    pictureURL: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg?t=1654259241'},
  { id:3, 
    title: 'Among us' , 
    description: 'Among us' ,
    price:1.0055, 
    pictureURL: 'https://i.blogs.es/6b7568/egs-amongus-innersloth-s1-2560x1440-675403774/840_560.jpeg'},
    { id:4, 
      title: 'Among us' , 
      description: 'Among us' ,
      price:1.0055, 
      pictureURL: 'https://i.blogs.es/6b7568/egs-amongus-innersloth-s1-2560x1440-675403774/840_560.jpeg'},
      { id:5, 
        title: 'Among us' , 
        description: 'Among us' ,
        price:1.0055, 
        pictureURL: 'https://i.blogs.es/6b7568/egs-amongus-innersloth-s1-2560x1440-675403774/840_560.jpeg'},
        { id:6, 
          title: 'Among us' , 
          description: 'Among us' ,
          price:1.0055, 
          pictureURL: 'https://i.blogs.es/6b7568/egs-amongus-innersloth-s1-2560x1440-675403774/840_560.jpeg'}
];

const promesa = new Promise((res,rej) =>{
  setTimeout(() =>{
    res(initialProducts);
  },2000);
})

export const ItemListContainer = ({greeting}) =>{

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      promesa
      .then((data)=>{
        setLoading(false);
        setProducts(data)
      })
      .catch(()=> console.log('error'))
    }, [])

  const stock = 5;

  const func = (countP) =>{
    console.log('Agregado al carrito: ' + countP);
  };

  return(
      <>
        <h2 className='itemList-tit'>{greeting}</h2>
        <ItemList products={products} loading={loading}/>
        <ItemCount stock={stock} initial={1} onAdd={func}/>
      </>
  );
}


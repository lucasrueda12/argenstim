import './ItemListContainerStyle.css';
import ItemCount from '../ItemListContainer/ItemCount/ItemCount';

export const ItemListContainer = ({greeting}) =>{

  const stock = 5;

  const func = (countP) =>{
    console.log('Agregado al carrito: ' + countP);
  };

  return(
      <>
        <h2 className='itemList-tit'>{greeting}</h2>
        <ItemCount stock={stock} initial={1} onAdd={func}/>
      </>
  );
}


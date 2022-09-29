import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './ItemListContainerStyle.css';
import ItemList from '../ItemListContainer/ItemList/ItemList';






export const ItemListContainer = ({greeting }) =>{

  let { IdCategory } = useParams();
  console.log(IdCategory);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const URL_BASE = 'https://api.rawg.io/api/games?key=7f9439e8272943e7b85ecd694fab5ca2&dates=2019-09-01,2019-09-30&platforms=18,1,7';

    useEffect(() => {
      fetch(URL_BASE)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let lista = data.results.map((product) => {
            return {...product, stock: Math.floor(Math.random() *100), price: Math.floor(Math.random() *10000)}
        })
        if(IdCategory !== undefined){
          lista = lista.filter((product) => product.genres.some((genre) => genre.slug === IdCategory))
        }
        setProducts(lista);
      })
      .catch((error)=> {
        setError(true);
        console.log('error');
        console.log(error);
      })
      .finally(()=>{
        setLoading(false)
      })
    }, [IdCategory])


    
  console.log(products);
  const stock = 5;

  return(
      <>
        <h2 className='itemList-tit'>{greeting}</h2>
        <ItemList products={products} loading={loading} />
        {/* <ItemCount stock={stock} initial={1} onAdd={func}/> */}
      </>
  );
}


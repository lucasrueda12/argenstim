import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';


import './ItemListContainerStyle.css';
import ItemList from '../ItemListContainer/ItemList/ItemList';
import { db } from '../../firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { Carrusel } from './Carrusel/Carrusel';


/* Lista de todos los productos traidos desde FireStore
  con un carrusel de los mismos, ambos se muestran cuando termina de traer los
  productos el fetch
*/
export const ItemListContainer = ({greeting }) =>{

  const { IdCategory } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

    useEffect(() => {
      const productsCollection = collection(db, 'products');
      let q;
      IdCategory? 
      q = query(productsCollection, where('genres', 'array-contains', {slug:IdCategory}))
      :
      q = productsCollection;
      getDocs(q)
      .then((data) => {
        console.log(data.docs);
        const list = data.docs.map((product) =>{
          return {
            ...product.data(),
            id: product.id
          };
        });
        setProducts(list);
        console.log(list);
      })
      .catch((e)=>{
        setError(true);
        console.log(error);
      })
      .finally(()=>{
        setLoading(false);
      })
    }, [IdCategory, error])
    
  console.log(products);

  return(
      <>
      {
        loading ?
        <LinearProgress color="secondary" />
        :
        <Carrusel products={products} greeting={greeting} />
      }
      {
        loading ?
        <LinearProgress color="secondary" />
        :
        <ItemList products={products} greeting={greeting} />
      }
      </>
  );
}


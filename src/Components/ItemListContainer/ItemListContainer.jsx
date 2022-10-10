import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './ItemListContainerStyle.css';
import ItemList from '../ItemListContainer/ItemList/ItemList';
import { db } from '../../firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

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
        <h2 className='itemList-tit'>{greeting}</h2>
        <ItemList products={products} loading={loading} />
        {/* <ItemCount stock={stock} initial={1} onAdd={func}/> */}
      </>
  );
}


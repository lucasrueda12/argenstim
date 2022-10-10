import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail'

import LinearProgress from '@mui/material/LinearProgress';
import { db } from '../../firebase/firebase';
import { doc, getDoc, collection } from 'firebase/firestore'


const ItemDetailContainer = () => {

  const { IdProduct } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const productCollection = collection(db, 'products')
    const refDoc = doc(productCollection, IdProduct);
    getDoc(refDoc)
    .then((result) =>{
      console.log(result.data());
      setProduct({
        id: result.id,
        ...result.data()
      })
    })
    .catch((e)=>{
      setError(true);
      console.log(error);
    })
    .finally(()=>{
      setLoading(false);
    })
}, [IdProduct, error]);

  return (
    <>
      {
        loading ?
        <LinearProgress color="secondary" />
        :
        <ItemDetail product={product}initial={1} />
      }
        </>
  );
};

export default ItemDetailContainer;
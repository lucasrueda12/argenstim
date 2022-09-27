import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail'

import LinearProgress from '@mui/material/LinearProgress';

const ItemDetailContainer = () => {

  const { IdProduct } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${IdProduct}?key=7f9439e8272943e7b85ecd694fab5ca2&dates=2019-09-01,2019-09-30&platforms=18,1,7`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          setProduct(data);
        })
        .catch(() => console.log('error'))
}, []);

  return (
    <>
      {
        loading ?
        <LinearProgress color="secondary" />
        :
        <ItemDetail product={product} price={4444.4} stock={5} initial={1} />
      }
        </>
  );
};

export default ItemDetailContainer;
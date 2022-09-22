import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  /* const [products, setProducts] = useState([]); */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        fetch('https://api.rawg.io/api/games/58617?key=7f9439e8272943e7b85ecd694fab5ca2&dates=2019-09-01,2019-09-30&platforms=18,1,7')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProduct(data);
          setLoading(false);
        })
        .catch(() => console.log('error'))
}, []);

  console.log(product.name);

  return (
    <>
      <ItemDetail product={product} price={6123.25} stock={5} initial={1} />
    </>
  );
};

export default ItemDetailContainer;
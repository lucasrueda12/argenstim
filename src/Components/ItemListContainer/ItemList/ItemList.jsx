import Item from '../ItemList/Item/Item';
import { Link } from 'react-router-dom';

import './ItemListStyle.css';

const ItemList = ({ products, greeting }) => {

    return (
        <>
            <h2 className='itemList-tit'>{greeting}</h2>
            <div className="listItemContainer">
                {
                    products.map(({ id, name, price, background_image }, i) => <Link key={`link-${name}-${id}`} to={`/product/${id}`} className='link' ><Item key={`${name}-${id}`} id={`${name}-${id}`} title={name} price={price} pictureURL={background_image} /></Link>)
                }
            </div>
        </>
    );
}

export default ItemList;
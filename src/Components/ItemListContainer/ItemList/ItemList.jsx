import Item from '../ItemList/Item/Item';

import './ItemListStyle.css';

const ItemList = ({products}) =>{
    return(
        <div className="listItemContainer">
            {products.map(({id, title, description, price, pictureURL}) => <Item key={id} id={id} title={title} description={description} price={price} pictureURL={pictureURL}/>)}
        </div>
    );
}

export default ItemList;
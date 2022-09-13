import Item from '../ItemList/Item/Item';

import './ItemListStyle.css';
import { Skeleton } from '@mui/material';
import Box from '@mui/material/Box';

const voidProducts = [
    { id:0},
    { id:1},
    { id:2},
    { id:3},
    { id:4},
    { id:5},
    { id:6}
];

const ItemList = ({products, loading}) =>{
    return(
        <div className="listItemContainer">
            {loading ? voidProducts.map(({id})=><Box key={`${id}-skeleton`} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                <Skeleton variant="rectangular" width={300} height={118} />
                <Skeleton animation="wave" width={100} height={20}/>
                <Skeleton animation="wave" width={300} height={20}/>
                <Skeleton animation="wave" width={300} height={100} />
                </Box> )
                : 
                products.map(({id, title, description, price, pictureURL}, i) => <Item key={`${title}-${i}`} id={`${title}-${id}`} title={title} description={description} price={price} pictureURL={pictureURL}/>)
            }
        </div>
    );
}

export default ItemList;
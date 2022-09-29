import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import ItemCount from '../../ItemCount/ItemCount';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product, price, stock, initial }) => {

  const [bought, setBought] = useState({});
  const [buyDone, setBuyDone] = useState(false);

  const onAdd = (cantidad) => {
    setBought({...product, cantidad});
    setBuyDone(true);
  }

  return (
    <>
      <Card sx={{ maxWidth: "100%", borderRadius: 4, marginTop: 4, marginRight: 8, marginBottom: 4 , marginLeft: 8 }}>
        <Grid container item >
          <Grid item xs={4} sx={{ margin: 'auto' }} >
          <Card sx={{width: '100%', height: '100%', margin: 'auto'}}>
            <CardMedia
              component="img"
              sx={{ width: "100%" }}
              image={product.background_image}
              alt="borderlands 3"
            />
            </Card>
          </Grid>
          <Grid item xs={3} sx={{padding: 1}}>
          <Card sx={{width: '100%', height: '100%', margin: 'auto', textAlign: 'initial'}}>
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                {price.toLocaleString("es-AR", { style: "currency", currency: "ARS" })}
              </Typography>
              <Typography gutterBottom variant="h5" component="div" >
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description_raw}
              </Typography>
            </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3} sx={{ width: '100%', height: '100%', padding: 3 }} >
            {
              buyDone?
              <Link to={'/cart'} className='links'>
                <Button sx={{ color: "#E94560" }} variant="contained">Finalizar compra</Button>
              </Link>
              :
              <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
            }
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default ItemDetail;
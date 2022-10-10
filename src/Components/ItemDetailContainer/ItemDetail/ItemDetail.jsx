import { CardContent, Card, CardMedia, Typography, Button, Grid } from '@mui/material';
import { Box } from '@mui/system';

import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import ItemCount from '../../ItemCount/ItemCount';
import { Context } from '../../../Context/CartCustomProvider'

const ItemDetail = ({ product, initial }) => {

  const [buyDone, setBuyDone] = useState(false);
  const { addItem } = useContext(Context);

  const onAdd = (quantity) => {
    addItem({...product}, quantity);
    setBuyDone(true);
  }
  const impPais = 1.30;
  const perpGanancias = 1.45;
  
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
                {(product.price* impPais*perpGanancias).toLocaleString("es-AR", { style: "currency", currency: "ARS" })}
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
              <Card sx={{ width: '100%', height: '100%', margin: 'auto' }}>
                <CardContent sx={{ display: "flex", flexDirection: "column", }}>
                  <Box sx={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: 'space-between', margin: 'auto' }}>
                    <Link to={'/cart'} className='links'>
                      <Button sx={{ color: "#E94560" }} variant="contained">Finally purchase</Button>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
              :
              <ItemCount stock={product.stock} initial={initial} onAdd={onAdd} />
            }
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default ItemDetail;
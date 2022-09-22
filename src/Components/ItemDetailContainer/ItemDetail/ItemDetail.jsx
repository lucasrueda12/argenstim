import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';

import React, { useState } from 'react';
import { Box } from '@mui/system';

const ItemDetail = ({ product, price, stock, initial }) => {

  const [counter, setCounter] = useState(initial);

  const sumarCount = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const restarCount = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    };
  };


  return (
    <>
      <Card sx={{ maxWidth: "100%", borderRadius: 4, marginTop: 4, marginRight: 8, marginBottom: 4 , marginLeft: 8 }}>
        <Grid container >
          <Grid sx={{ margin: 'auto' }} xs={4}>
          <Card sx={{width: '100%', height: '100%', margin: 'auto'}}>
            <CardMedia
              component="img"
              sx={{ width: "100%" }}
              image={product.background_image}
              alt="borderlands 3"
            />
            </Card>
          </Grid>
          <Grid xs={3} sx={{padding: 1}}>
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
          <Grid xs={3} sx={{ width: '100%', height: '100%', padding: 3 }} >
            <Card sx={{width: '100%', height: '100%', margin: 'auto'}}>
              <CardContent sx={{ display: "flex", flexDirection: "column",  }}>
              <Box sx={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: 'space-between', marginBottom: 3 }}>
                <Button sx={{ color: "#E94560" }} variant="contained" onClick={restarCount}>-</Button>
                <Typography variant="h4" sx={{ color: "#E94560" }} >
                  {counter}
                </Typography>
                <Button sx={{ color: "#E94560" }} variant="contained" onClick={sumarCount}>+</Button>
              </Box>
              <Button sx={{ color: "#E94560" }} variant="contained">BUY</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default ItemDetail;
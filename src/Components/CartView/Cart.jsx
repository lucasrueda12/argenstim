import { CardContent, Card, CardMedia, Typography, Box, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PaymentIcon from '@mui/icons-material/Payment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context/CartCustomProvider';

export const Cart = () => {

  const { cart, removeItem, clear } = useContext(Context);
  const [ totpay, setTotpay]  = useState(0.00);
  
  useEffect(()=>{
    let suma=0;
    cart.forEach((i)=>{
      suma += i.price * i.quantity;
    });
    setTotpay(suma);
  }, [cart])
  

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', margin: 'auto', mt: 2, width: '90%', height: 'auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', pl: 1, pb: 1, pr: 3, backgroundColor: '#16213E' }}>
        <IconButton aria-label="next" onClick={() => clear()} sx={{color: "#E94560"}}>
          <Typography component="div" variant="subtitle1" sx={{color: "#E94560"}}>
            Clear cart
          </Typography>
          <DeleteForeverIcon />
        </IconButton>
      </Box>
      {
        cart.length > 0 ?
          cart.map((cartItem) => {
            return (
              <Card key={`cartItem-${cartItem.id}`} sx={{ display: 'flex', justifyContent: 'space-between', width: 'auto', m: 1 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151, height: 151 }}
                  image={cartItem.background_image}
                  alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {cartItem.name_original}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      {Math.round(cartItem.price * cartItem.quantity * 100) / 100}
                    </Typography>
                  </CardContent>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, pr: 3 }}>
                  <IconButton aria-label="next" onClick={() => removeItem(cartItem)}>
                    <DeleteForeverIcon />
                  </IconButton>
                </Box>
              </Card>)
          })
          :
          <Card sx={{ display: 'flex', flexDirection: 'column', margin: 'auto', mt: 2, width: '90%', height: 'auto' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', m: 'auto', width: 'auto', height: '50vh', justifyContent: 'center' }}>
              <Typography component="div" variant="h3">
                Tu carrito esta vacio
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                ¿No sabés qué comprar? ¡Miles de productos te esperan!
              </Typography>
            </CardContent>
          </Card>
      }
      <Box  sx={{ display: 'flex',flexDirection:'column' , justifyContent: 'end', alignItems: 'end', pl: 1, pb: 1, pr: 3, backgroundColor: '#16213E' }}>
          <Box sx={{display: 'flex', flexDirection:'row', justifyContent:'space-evenly' ,minWidth: 100, m:1, borderRadius: 1, border: 1, borderColor:'#E94560', p:0.5, bgcolor:'#e7e7e7' }}>
            <AttachMoneyIcon sx={{color: "#E94560"}} />
            <Typography component="div" variant="subtitle1" >
              { Math.round(totpay * 100) / 100 }
            </Typography>
          </Box>
        <IconButton  aria-label="next" onClick={()=>console.log("solta la teka")} sx={{color: "#E94560"}}>
          <Typography component="div" variant="subtitle1" sx={{color: "#E94560"}}>
            payment methods
          </Typography>
          <PaymentIcon />
        </IconButton>
      </Box>
    </Card>
  );

}
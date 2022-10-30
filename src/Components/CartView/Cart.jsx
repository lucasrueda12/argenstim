import { CardContent, Card, CardMedia, Typography, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PaymentIcon from '@mui/icons-material/Payment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TextField from '@mui/material/TextField';

import React, { useContext, useEffect, useState } from 'react';

import { Context } from '../../Context/CartCustomProvider';

import { db } from '../../firebase/firebase'
import { collection, addDoc, doc, serverTimestamp, updateDoc } from 'firebase/firestore'

/* 
  Carrito donde se almacenan los productos del comprador, si compro 
  se le piden los datos asi cargarlo a la data base, de lo contrario mostramos un mensaje
  informando que el carrito esta vacio, quitando la posibilidad de compra
*/

export const Cart = () => {

  const { cart, removeItem, clear } = useContext(Context);
  const [totpay, setTotpay] = useState(0.00);
  const [name, setname] = useState("")
  const [lastName, setlastName] = useState("")
  const [email, setemail] = useState("")

  useEffect(() => {
    let suma = 0;
    cart.forEach((i) => {
      suma += i.price * i.quantity * impPais * perpGanancias;
    });
    setTotpay(Math.round(suma * 100) / 100);
  }, [cart])

  const impPais = 1.30;
  const perpGanancias = 1.45;

  const handlerName = (e)=> setname(e.target.value)
  const handlerLastName = (e)=> setlastName(e.target.value)
  const handlerEmail = (e)=> setemail(e.target.value)

  

  const finalizarCompra = () => {

    const comprador = {
      nombre: name,
      apellido: lastName,
      email: email
    }
    
      const ventasCollection = collection(db, "sales");
      addDoc(ventasCollection, {
        comprador,
        items: cart,
        date: serverTimestamp(),
        totpay
      })
        .then(result => {
          console.log(result.id);
          cart.map((cartItem) => updateStock(cartItem.id, cartItem.stock, cartItem.quantity))
          clear();
        })
    
  }

  const updateStock = (id, stock, quantity) => {
    const up = doc(db, 'products', id)
    updateDoc(up, { stock: stock - quantity })
  }

    

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', margin: 'auto', mt: 2, width: '90%', height: 'auto' }}>
      <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', pl: 1, pb: 1, pr: 3, backgroundColor: '#16213E' }}>
        <IconButton aria-label="next" onClick={() => clear()} sx={{ color: "#E94560" }}>
          <Typography component="div" variant="subtitle1" sx={{ color: "#E94560" }}>
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
                      {cartItem.name}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', minWidth: 100, m: 1, borderRadius: 1, border: 1, borderColor: '#E94560', p: 0.5, bgcolor: '#e7e7e7' }}>
                      <AttachMoneyIcon sx={{ color: "#E94560" }} />
                      <Typography component="div" variant="subtitle1" >
                        {Math.round(cartItem.price * impPais * perpGanancias * cartItem.quantity * 100) / 100}
                      </Typography>
                    </Box>
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
          <Card sx={{ display: 'flex', flexDirection: 'column', margin: 'auto', mt: 2,mb:2, width: '90%', height: 'auto' }}>
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

      {cart.length > 0 &&
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'end', pl: 1, pb: 1, pr: 3, backgroundColor: '#16213E' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', minWidth: 100, m: 1, borderRadius: 1, border: 1, borderColor: '#E94560', p: 0.5, bgcolor: '#e7e7e7' }}>
            <AttachMoneyIcon sx={{ color: "#E94560" }} />
            <Typography component="div" variant="subtitle1" >
              {totpay.toLocaleString("es-AR", { currency: "ARS" })}
            </Typography>
          </Box>
          <Box>

            <Box
                component="form"
                sx={{display: 'flex', flexDirection: 'column', margin: 'auto', width: 300, height: 'auto'}}
                noValidate
                autoComplete="off"
            >
                <TextField label="Name" sx={{bgcolor: '#e7e7e7', borderRadius: 1 }} color="secondary" margin="normal" focused type='text' variant="filled" onChange={handlerName} />
                <TextField label="Lastname" sx={{bgcolor: '#e7e7e7', borderRadius: 1 }} color="secondary" margin="normal" focused type='text' variant="filled" onChange={handlerLastName} />
                <TextField label="Email" sx={{bgcolor: '#e7e7e7', borderRadius: 1 }} color="secondary" margin="normal" focused type='text' variant="filled" onChange={handlerEmail} />
            </Box>
        </Box>
            <IconButton aria-label="next" onClick={finalizarCompra} sx={{ color: "#E94560" }}>
              <Typography component="div" variant="subtitle1" sx={{ color: "#E94560" }}>
                payment methods
              </Typography>
              <PaymentIcon />
            </IconButton>
        </Box>
      }

    </Card>
  );

}
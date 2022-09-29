import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';


import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {

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
    <Card sx={{ width: '100%', height: '100%', margin: 'auto' }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", }}>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: 'space-between', marginBottom: 3 }}>
          <Button sx={{ color: "#E94560" }} variant="contained" onClick={restarCount}>-</Button>
          <Typography variant="h4" sx={{ color: "#E94560" }} >
            {counter}
          </Typography>
          <Button sx={{ color: "#E94560" }} variant="contained" onClick={sumarCount}>+</Button>
        </Box>
        <Button sx={{ color: "#E94560" }} variant="contained" onClick={()=>onAdd(counter)}>BUY</Button>
      </CardContent>
    </Card>
  );
}

export default ItemCount;
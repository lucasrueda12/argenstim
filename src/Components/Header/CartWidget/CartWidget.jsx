import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';

import React, { useContext } from 'react';
import { Context } from '../../../Context/CartCustomProvider';


export const CartWidget = ()=>{

  const { pQuant } = useContext(Context); 

  return(
      <Button sx={{ border: '1px solid #533483',
                    color: "#E94560"  }}
        variant="text"
        startIcon={< ShoppingCartIcon 
          fontSize="large"
          sx={{ color: "#E94560" }}
        />}>
        Cart
        {pQuant>0 && `: ${pQuant}`}
      </Button>
  );
}
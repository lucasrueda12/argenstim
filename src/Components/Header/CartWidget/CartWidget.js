import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';

export const CartWidget = ()=>{
    return(
        <Button sx={{ border: '1px solid #533483', color: "#E94560"  }}
            variant="text"
            startIcon={< ShoppingCartIcon 
                fontSize="large"
                sx={{ color: "#E94560" }}
            />}>
            Car
        </Button>
    )
}
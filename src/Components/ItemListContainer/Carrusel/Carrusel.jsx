import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import { Link } from 'react-router-dom';


export const Carrusel = ({ products }) => {
    const theme = useTheme();

    const [index, setIndex] = useState(0);

    const nextPorduct = () => {
        index < products.length - 1 ? setIndex(index + 1) : setIndex(0);
    };

    const prevPorduct = () => {
        index > 0 ? setIndex(index - 1) : setIndex(products.length - 1);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', minHeight: 353, maxHeight: 353, justifyContent: 'space-between', m: 1, pl: 1, pb: 1 }}>
            <IconButton aria-label="previous" onClick={prevPorduct}>
                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
                <Link to={`/product/${products[index].id}`} className='link' style={{display: 'flex'}} >
                    <Card sx={{ display: 'flex' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column'  }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {products[index].name}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {products[index].description_raw}
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex' }}>
                            </Box>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 600, objectFit: 'fill', padding: 5 }}
                            image={products[index].background_image}
                            alt="Live from space album cover"
                        />
                    </Card>
                </Link>
            <IconButton aria-label="next" onClick={nextPorduct}>
                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
        </Box>
    )
}
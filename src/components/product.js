import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Car from '@mui/icons-material/AddShoppingCartSharp';

function Product({product, addcart, gettotal}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={product.img}
        alt="Paella dish"
      />

<CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.Name}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {product.Promotion_description}
        </Typography>
        <Typography gutterBottom variant="h8" component="div">
          {product.category_name} - Stock: {product.stock} - Price: {product.Prices} MXN
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => addcart(product)} size="small">Comprar <Car></Car> </Button>
      </CardActions>
    </Card>
  );
}

export default Product;
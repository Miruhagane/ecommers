import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

function cartitem({product, removeitem}) {
  return (
    <div>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={product.img}
        alt="Paella dish"
      />

<CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.Name} - Tipo:  {product.category_name}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
            Cantidad: {product.quantity} -  Stock: {product.stock} - Price: {product.Prices} MXN
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => removeitem(product)} size="small">Eliminar <DeleteIcon></DeleteIcon> </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default cartitem
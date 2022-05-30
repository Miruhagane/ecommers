import React, { useEffect, useReducer, useState } from 'react';
import { Api } from '../api/products_api';
import Product from './product';
import Cartitem from './Cartitem'
import { shoppingReducer, shoppingInitialState } from '../reducers/ShoppingReducers'
import { TYPES } from '../actions/Shoppingactions';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Products() {
  
  useEffect(() => {
    Getproduct();
    Gettotal();
   })

  

  const Getproduct = async() => {
    const resp = await Api.get('products')
    setlist(resp.data);
   
  };
  const [productslist, setlist] = useState([]);
 
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState)

  const Gettotal = async() => {
    const resp = await Api.post('checkout', state.cart)
    let price = resp.data.find(item => item.finalprice);
    price === undefined ? state.total = [0] : state.total = price.finalprice
  };

  const addcart = (product) => { dispatch({ type: TYPES.ADD_CART, payload: product }) };
  const removeitem = (product) => { dispatch({type: TYPES.REMOVE_ITEM, payload: product}) };
  const removeallitem = () => { dispatch({ type: TYPES.REMOVE_ALL_ITEM }) };
  return (
    <div>
      <div>
        <Card>
        <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              productos
        </Typography>
          </CardContent>
        <Grid container spacing={2}>
        {
          productslist.map((product, index )=> (
            <Grid item xs={12} sm={6} md={5} lg={3}> <Product key={index} product={product} addcart={addcart}/>  </Grid>
          ))

        }
      </Grid> 
      </Card>
    </div>
      <div>
       
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Carrito
        </Typography>
          </CardContent>
        <Grid container spacing={2}>
         {
           state.cart.map((product, index) => (
             <Grid item xs={12} sm={6} md={5} lg={3}><Cartitem key={index} product={product} removeitem={removeitem}/> </Grid>
           ))
 
         }
          </Grid> 
          
          <CardActions>
          <Button onClick={() => { removeallitem(); }}  variant="outlined">vaciar carrito</Button>
          <Button   variant="outlined">Total: {state.total} <ShoppingBasketIcon></ShoppingBasketIcon> </Button>
          </CardActions>
        </Card>
     </div>
   </div> 

  )
}

export default Products
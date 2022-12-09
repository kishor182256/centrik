import { Box, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const state = useSelector(state=>state.cartreducer.carts)

  return (
    <div>{state.map((cart)=>{
        console.log(cart);
        return (
            <Box style={{display: 'flex',flexWrap:'wrap'}}>
      {state.map((product) => {
        let discountPercentage =
          (product.discountPercentage * product.price) / 100;
        return (
          <Card style={{maxWidth:'30%',maxHeight:'20%',display:'flex',margin:'10px'}} key={product.id}>
            <CardContent>
              <img src={product.images[0]} alt={product.brand} />
              <Typography color="textSecondary" gutterBottom>
                {product.title}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {product.description}
              </Typography>
              <Typography variant="h5" component="h2">
                Ratings: {product.rating}
              </Typography>
              <Typography color="textSecondary">
                DP:{Math.ceil(product.price - discountPercentage)} OP:
                {product.price} ({product.discountPercentage} %off)
              </Typography>
              <div style={{display: 'flex',alignItems: 'center'}}>
              <CardActions>
            
              </CardActions>
              <Typography>In Stocks:{' '}{product.stock}</Typography>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </Box>
        )
    })}</div>
  )
}

export default Cart
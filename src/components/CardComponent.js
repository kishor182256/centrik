import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import React from 'react'

const CardComponent = ({data,addToCart,loading,NewfilteredData,filteredData}) => {
    
  const filterData = NewfilteredData.payload?.sort((a,b)=>(a.price > b.price ? 1 : -1))
  return (
   <Box style={{display: 'flex',flexWrap:'wrap'}}>
   {filteredData?filterData?.map((product) => {
     let discountPercentage =
       (product.discountPercentage * product.price) / 100;
     return (
       <Card style={{maxWidth:'30%',maxHeight:'20%' ,margin:'10px'}} key={product.id}>
         <CardContent>
           <img src={product.images[0]} alt={product.brand} height='100px' />
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
             Discounted Price:{Math.ceil(product.price - discountPercentage)} <del>Original Price:{' '}{product.price}</del>
              ({product.discountPercentage} %off)
           </Typography>
           <div style={{display: 'flex',alignItems: 'center'}}>
           <CardActions>
             <Button variant="contained"
              color="secondary"
              onClick={()=>addToCart(product)}
              size="small">ADD TO CART</Button>
           </CardActions>
           <Typography>In Stocks:{' '}{product.stock}</Typography>
           </div>
         </CardContent>
       </Card>
     );
   }):data?.payload?.map((product) => {
     let discountPercentage =
       (product.discountPercentage * product.price) / 100;
     return (
       <Card style={{maxWidth:'30%',maxHeight:'20%' ,margin:'10px'}} key={product.id}>
         <CardContent>
           <img src={product.images[0]} alt={product.brand} height='100px' />
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
             Discounted Price:{Math.ceil(product.price - discountPercentage)} <del>Original Price:{' '}{product.price}</del>
              ({product.discountPercentage} %off)
           </Typography>
           <div style={{display: 'flex',alignItems: 'center'}}>
           <CardActions>
             <Button variant="contained"
              color="secondary"
              onClick={()=>addToCart(product)}
              size="small">ADD TO CART</Button>
           </CardActions>
           <Typography>In Stocks:{' '}{product.stock}</Typography>
           </div>
         </CardContent>
       </Card>
     );
   })}
 </Box>
  )
}

export default CardComponent
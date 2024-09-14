import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link,useParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useState } from 'react';
import axios from 'axios';
// import { Grid } from '@mui/material';

export default function FilterProduct() {
    const {myfragrance}=useParams()
    console.log(myfragrance,"Fragrances")

    const [product,setProduct]= React.useState([])
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/category/${myfragrance}`)
        .then((res)=>{
            console.log(res,'res');
            setProduct(res.data.products)

        })
        .catch((error) => {
            console.log(error);
        });
    },[])
    console.log(product,"productsdetails")
  return (
    <>
      <Typography
        gutterBottom
        variant='h4'
        component='div'
        sx={{ color: 'black', textAlign: 'center', margin: 6 }}>
        {myfragrance}Product
      </Typography>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: 20,
          alignItems: 'center',
          gap: 25,
          justifyContent: 'center'
        }}>

        {product.length > 0 ? product?.map((item,i) => {
          return (
       
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          title="green iguana"
          height="140"
          image={item.thumbnail}
          style={{bacgroudSize:'cover'}}/>
        <CardContent>
          <Link to={`/Fragrances-product/${item.title}`} style={{textDecoration:"none"}}>
          <Typography gutterBottom variant="h5" component="div" sx={{color:"F08080"}}>
            {item.title}
          </Typography></Link>

          <Link to={`/Fragrances-product/${item.discription}`} style={{textDecoration:"none"}}>
          <Typography variant="body2" color="text.secondary">
          {item.description}
          </Typography></Link>
          <Typography variant="h4 " color="text.secondary">
            {item.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" sx={{backgroundColor:'#F08080',color:'white'}}>Share</Button>
          <Button size="small"sx={{backgroundColor:'#F08080',color:'white'}}>Learn More</Button>
        </CardActions>
      </Card>
          )
}):"No data found fopr this category" }
  </div>
    </>

    
  );
}


// productdetails
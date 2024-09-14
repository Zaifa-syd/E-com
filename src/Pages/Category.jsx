import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import  CardActionArea from "@mui/material"
import axios from "axios"
import { useEffect,useState }from 'react';
import { CardActionArea, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
function Category() {
    // calling the axios 
    // to catch the res from ap use res or response
    // copy the path inside the axios('') from product categories
    // paste the axios inside the effect
const[category,setCategory]=useState([])
    useEffect(()=>
    {
        axios.get('https://dummyjson.com/products/categories').then((res)=>{
            console.log(res);
            // call with the key name from console
            setCategory(res.data);
        
        }).catch((error)=>{
            console.log(error);
        
        });
        

    },[]);
// for category
    // console.log(category,"categories");
// res is the object data type
// store the data
return(
  <>
  <Typography
        gutterBottom
        variant='h4'
        component='div'
        sx={{ color: 'black', textAlign: 'center', margin: 6 }}>
        Browse product category
      </Typography>
  <Grid container spacing={2}  
  sx={{
    margin:'10px',
    padding:"5px",
    display:'flex',
    alignItems:"center",
    flexWrap:'wrap'
  }}>
{category.map((item,i)=>{
// to display rowwise
// grid


  return (
  
       <Grid item xs={12} sm={6} md={4} >
        <Card sx={{ maxWidth: 345 }} style={{backgroundColor:'lightblue', margin:20}} >
          <CardActionArea>
      <CardContent>
        <Link to ={`/Fragrances-product/${item.name}`} style={{tewxtDecoration:"none"}}>
        <Typography gutterBottom variant="h5" component="div" textAlign='center'>
          {item.name}
        </Typography></Link>
        {/* {item.name} */}
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
    </Grid>
  )}
)}
</Grid>
      
    </>
  )
}

export default Category

// Api 
// it gives data 
// dummmy json is a api which give data which is fake or dummy
// docs
// products
// axios library to call api
// in terminal give the commant

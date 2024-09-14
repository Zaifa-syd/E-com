import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Products() {
    const [expanded, setExpanded] = React.useState(false);
    // ////
    const [product,setProduct]= useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then((res)=>{
            console.log(res);
            setProduct(res.data.products)

        })
        .catch((error) => {
            console.log(error);
        });
    },[])
    console.log(product,"productsdetails")


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const handleSearch=(e)=>{
  let data=e.target.value;
  data=data.toLowercase()
  console.log(data);

  axios.get(`https://dummyjson.com/products/search?q=${data}`).then
  ((res)=>{
    console.log(res)
    setProduct(res.data.products);
    
  })


}
  return (
    <>
       <Typography
        gutterBottom
        variant='h4'
        component='div'
        sx={{ color: 'black', textAlign: 'center', margin: 6 }}>
          Shop Product
          <Box sx={{display:'flex',
            alignItems:'flex-end',
            justifyContent:"flex-end",
            marginRight:"150px"
          }}>
            <SearchIcon sx={{ color:'action.active',mr:1,my:0.5}}/>
            <TextField id="input-with-sx"
            label="search for product"
            variant="standard" sx={{width:"500px"}}
            onchange={handleSearch}/>
          </Box>
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
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.description}
          </Typography>
          <Typography variant="h5" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div style={{display:'flex',gap:"20px"}}>
          <Typography paragraph sx={{color:"#bd3376"}}>Brand:</Typography>
          <Typography paragraph>{item.brand}
          </Typography></div>

          <div style={{display:'flex',gap:"20px"}}>
          <Typography  paragraph sx={{color:"#bd3376"}}>rating:</Typography>
          <Typography paragraph>{item.rating}
            </Typography></div>

            <div style={{display:'flex',gap:"20px"}}>

            <Typography  paragraph sx={{color:"#bd3376"}}>Shipping:</Typography>
          <Typography paragraph>{item.shippinfInformation}
            </Typography>
         
          </div>
        </CardContent>
      </Collapse>
    </Card>
          )}
        )
        :"no data found"}

    </div>
    </>
  )
}

export default Products

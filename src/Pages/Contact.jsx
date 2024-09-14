import { Box, Button, TextField } from '@mui/material'
import React from 'react'

function Contact() {
  return (
    <div>
      <div>
        <h1 style={{fontFamily:'sans-serif',
          fontSize:"50px",
          margin:"50px",
          color:'#672b84',
          marginLeft:"190px"
        }}>Here to help</h1>
      </div>
      <div style={{textAlign:'center',margin:50}}>
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m:1 ,width: '25ch'},
        }}
        noValidate
        autoComplete="off">
          <TextField id="filled-basic" label="Full name" variant="filled" /> <br/>
          <TextField id="filled-basic" label="Email addres" variant="filled" /> <br/>
          <TextField id="filled-basic" label="Contact number" variant="filled" /> <br/>
          <TextField id="filled-basic" label="Message" variant="filled" /> <br/>
          
          <Button style={{backgroundColor:'#672b84', color:'white'}} variant="contained" diabled>
            Submit
          </Button>

        </Box>
      </div>
    </div>
  )
}

export default Contact

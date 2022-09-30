import React from 'react'
import '../App.css'
import { Button, Card, FormControl, Grid, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
function Start() {

    const navigate = useNavigate();
  return (
    <div className='welcome-page'>

<Card sx={{display:'block' , margin:'auto' , marginTop:'6em',width:'40%' , backgroundColor:'rgb(61, 206, 121);'}}>
<img className='logo' src={logo} width="200" sx={{alignItem:'center'}} ></img>
{/* <Button variant='contained' color="white">Start Mine</Button> */}

    <Typography variant='h3' textAlign='center' color='black' fontWeight="bold">
        Every Thing Is A Test
    </Typography>
<button className='btn' onClick={()=> navigate("/start")}>Start Your's</button>
    

</Card>


    </div>
  )
}

export default Start
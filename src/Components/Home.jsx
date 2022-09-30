import { Button, Card, FormControl, Grid, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import SelectInput from '@mui/material/Select/SelectInput'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';
function Home({name,setName,fetch}) {
    const [Cateogry, setCateogry] = useState('');
    
    const [diff, setDifi] = useState('');

    const [error,setError]=useState("");
    const transfer = useNavigate();
    const handleSubmit = (e) =>
    {
            e.preventDefault();

            if(!Cateogry || !diff)
            {
                setError("Enter all data")
            }

            else
            {
                fetch(Cateogry,diff);
                transfer('/quiz')
            }
    }
   
  return (
    <div className='welcome-page' style={{marginTop:'5em'}}>
        <Grid  container justifyContent="center" alignItems="center">
            <Grid item>
        <Card sx={{maringTop:'12em', padding:'2em'}}>
        <Typography variant='h2' textAlign="center" >Quiz Setting</Typography>

        {error&& <h2>Please Fill All Fields</h2> }

        
<InputLabel>Enter Name</InputLabel>
        <TextField value={name} onChange={(e)=> setName(e.target.value)}>Enter Your Name</TextField>
        <FormControl fullWidth sx={{marginTop:'2em'}}> 
    
    
    <InputLabel>Select Diffculty</InputLabel>
    <Select
         
         label="Age"
         value={diff}
         onChange={(e) => setDifi(e.target.value) }
    >
        
        <MenuItem value={"easy"}>Easy</MenuItem>
        <MenuItem value={"medium"}>Medium</MenuItem>
        <MenuItem  value={"hard"} > Hard</MenuItem>
        </Select>
       </FormControl>


       <FormControl fullWidth sx={{marginTop:'2em'}}> 
    
    
    <InputLabel>Select Cateogry</InputLabel>
    <Select
         
         label="Age"
         value={Cateogry}
         onChange={(e) => setCateogry(e.target.value) }

    >
        
        <MenuItem value={"Science"}>Science</MenuItem>
        <MenuItem value={"History"}>History</MenuItem>
        <MenuItem value={"General Knowledge"}>General Knowledge</MenuItem>
        </Select>
       </FormControl>

       <Button sx={{display:'block' , margin:'auto' , marginTop:'2em'}} size='large' color="success" onClick={handleSubmit} variant='contained' > Start</Button>
        </Card>
        </Grid>
        </Grid>
    </div>
  )
}

export default Home
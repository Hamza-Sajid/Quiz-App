import { Card } from '@mui/material'
import React from 'react'

function Result({score}) {


  return (
    <div style={{marginTop:'4em'}}>
      <Card sx={{background:'black' , color:'white', display:'block' ,alignItems:'center',textAlign:'center' ,height:'10em', width:'50%', margin:'auto' , padding:'1em'}}>

        <h1 style={{textAlign:'center'}}>Wow you scored:  {score}  marks! </h1>
        

        </Card>
    </div>
  )
}

export default Result
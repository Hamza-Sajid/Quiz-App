import { Card, CircularProgress, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'

function Quiz({name,question,setQuestion,score, setScore}) {
    const [correct,setCorrect]=useState('');
    const [options,setOptions]=useState('');
    const [current,setCurrent]=useState(0);
    const navigate = useNavigate();
    var merge =[];
    useEffect(() => {
      

            setCorrect( question && question[current].correctAnswer);
          setOptions(question && handleQuestion(question[current].correctAnswer ,question[current].incorrectAnswers))
    
    }, [question,current])
    const handleQuestion = (a,b) =>
    {
        
         merge = [a, ...b]

        return merge.sort(() => Math.random() - 0.5);

       
    //    const merge = [...a , ...b];
    //    console.log(merge);

        
    }
    
    const handleOption = (val) =>
    {
        if(val===correct)
        {
            if(current==5)
            {
                    navigate('/result')
            }   
            setScore(score+1)
            setCurrent(current+1);
            console.log("true ho gaya boss!")
        }
        else
        {
            if(current==5)
            {
                    navigate('/result')
            }   
            setCurrent(current+1);
            console.log("yeh to ghalat hai!")
        }
    }
  return (
    <div className='welcome-page'>
        
    <Grid container sx={{marginTop:'2em'}}  justifyContent="center" alignItems="center">
        <Grid item>
            <Card sx={{width:'100%' , display:'block', margin:'auto'}}>
                <Card sx={{background:'black', color:'white'}}>
                <Typography variant='h4' textAlign="center">Welcome {name}</Typography>
                </Card>
                {
                    question ? (
                    <>
                    
                    <h5 style={{textAlign:'center'}}>{question[current].category}</h5>
                            <h1 style={{float:'right', border:'2px solid black' , borderRadius:'25%', marginRight:'10px' , padding:'0.4em'}}>{score}</h1>
                    <h2 style={{marginLeft:'4em', marginRight:'4em', marginTop:'2em'}}>{question[current].question}</h2>
                        <div style={{display:'flex', flexDirection:'column' , width:'50%', margin:'auto'}}>
                            {options &&  options.map((val,index)=>
                            {
                               return(
                               <button className='btn-hover' style={{border:'none', marginTop:'1em', padding:'1em', borderRadius:'10px', cursor:'pointer'}} onClick={(e)=> handleOption(val)}>
                               <h3>{val}</h3>
                               
                               </button>)

                            })}
                        </div>
                    </>
                        ) 
                    
                    
                    
                    
                    
                    : (<CircularProgress style={{margin:'100'}} size={150}
                        thickness={1}
                    />)
                }
            </Card>
        </Grid>
    </Grid>



    </div>
  )
}

export default Quiz
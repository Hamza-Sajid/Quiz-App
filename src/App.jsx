import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import Start from './Components/Start';

function App() {
  
    const [name,setName]=useState("");
    const [question,setQuestion]=useState('');
    const [score, setScore]=useState(0);

    const fetchQuestion = (Cateogry="",diff="") =>
    {
      fetch('https://the-trivia-api.com/api/questions?categories='+Cateogry+'limit=5&difficulty='+diff)
      .then((res) => res.json())
      .then((data) => setQuestion(data));

    }

  return (
    <div>
  <Routes>
    <Route path='/' element={<Start/>}></Route>
    <Route path='/start' element={<Home name={name} setName={setName} fetch={fetchQuestion}/>}></Route>
    <Route path='/quiz' element={<Quiz setScore={setScore} name={name} question={question} score={score} setQuestion={setQuestion}/>}></Route>
    <Route path='/result' element={<  Result score={score}/>} ></Route>
  </Routes>
      

      
    </div>
  )
}

export default App
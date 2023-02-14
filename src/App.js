
import './App.css';
import React from 'react';
import Demo from './components/Demo';

function App() {
  const x = 10;
  var text;

  if(x===10){
    text="Equal";
  }else{
    text="Not Equal";
  }
  return (
    <div>
      <h1 className='demo'>Hellow world</h1>
      <p style={{backgroundColor: "black", color: "white",fontSize: "35px"}}></p>
      <p>{50+5}</p>
      <h2>{text}</h2>
      <h3>{x>=10? "x is greater than or equal to 10" : "no match"}</h3>
      <Demo para={x}/>
    </div>
  );
}

export default App;

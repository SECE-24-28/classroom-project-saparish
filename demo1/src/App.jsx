import { useState } from "react";
import Display2 from "./Display2.jsx"
import Display from "./first.jsx";

function App() 
{
   const [data,setData]=useState();
  var name="hello im the parent"
  var val1=23
  var arr=[12,34,5]
  const person={name:"sai",gender:"male"}
 const receive=(d)=>{
  console.log("got it",d)
  setData(d)
 }
  return (
    <>
     <h1> welcome  </h1>
     <h1> i've recevied from parent. {data}</h1>
     <h1>--------------------------</h1>
      <Display name={name} a={val1} arr={arr} obj={person}  receive={receive}/>

     </>
  )
}

export default App
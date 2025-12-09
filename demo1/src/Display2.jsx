import { useState } from "react"

function Display1(datas){
    const {val}=datas;
    
    const [myName,setMyName]= useState("hello")
 
    console.log("im inside the disp1",{myName})
   
    return(
        <>
        <h1>im from dis1{myName}</h1>
        <h1>i've recevied from myGP thru my Parent {val}
             
        </h1>
<button onClick={()=>{setMyName('not demo')}}>click here!!!!</button>
</>
    )
}

export default Display1
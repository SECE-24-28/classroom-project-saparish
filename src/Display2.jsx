import { useState } from "react"
function Display2()
{
    const [Name,setName]=useState("hello")
    console.log("im inside the disp1",{Name})
    return (
        <>
        <h1>im from disp1{Name}</h1>
        <button onClick={()=>{setName('Not Hello')}}> CLICK ME </button>
    
    </>
    )
   
}
export default Display2
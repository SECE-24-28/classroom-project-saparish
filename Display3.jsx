import { useState } from "react"

const Display3=()=>{
    const [name,setName]=useState()
    console.log("the data is....: ",name)
    return(
        <>
        <h1>im from Display3 {name}</h1>
        <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
        </>
    )
}
export default Display3
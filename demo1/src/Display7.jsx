import { useState } from "react";

const Display7=()=>{
    
     const[student,setStudent]= useState({
        username:"",
        email:""
     })
     const change=(e)=>{

setStudent((prev)=>{
return ({...prev,
    [e.target.name]:e.target.value
})
})
}
    return(
        <>
        <h1>im from disp7 {student.username} {student.email}</h1>
        <input onChange={change} name="username" value={student.username}></input>
        </>
    )
}
export default Display7;    
import { useState } from "react"
const Display4=()=>{
    /*const[Name,setName]=useState("Sapari")
    const[Age,setAge]=useState(21)
    const[Mobile,setMobile]=useState(123467890)*/
    const[Student,setStudent]=useState({
        Name:"Demo1",
        Age:21,
        Mobile:1234567890

    })
    function updateStudent(){
        setStudent({Name:"Demo2",Age:23,Mobile:9876543210})
    }
    return(
        <>
        <h1>I am {Student.Name} and Age is {Student.Age} and mobile Number is {Student.Mobile}</h1>
        <button onClick={updateStudent}>UpdateStudent</button>
        </>
    )
}
export default Display4
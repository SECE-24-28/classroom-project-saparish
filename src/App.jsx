
import Display from './first.jsx'

function App() {
  var name="Sapari";
  var val1=20;
  const  arr=[1,2,3];
  const person={name:"john",gender:'male'}
  return (
    <>
    <h1>Welcome</h1>
    <Display name={name} a={val1} arr={arr} obj={person}/>
    </>
    
  )
}

export default App

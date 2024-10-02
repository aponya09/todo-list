import { useState } from 'react';
import './App.css';
import Form from './componets/Form';
import Main from './componets/Main';

function App() {
  const [test, setTest] = useState([{name: 'AIGERIM'}])
 const getProducts=(somm)=>{
 setTest([...test, somm])
 }
  return (
    <div className="App">
  <Form onGetSomm={getProducts}/>
  {
    test.map((el)=>{
      return  <Main name={el.name}/> 
    })
  }
    </div>
  );
}

export default App;

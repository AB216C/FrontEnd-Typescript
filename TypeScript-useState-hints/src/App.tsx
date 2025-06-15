import { useState } from 'react'

import './App.css'
import ValueAfterInit from './Components/setValueAfterInitialization';
import TypeAssertion from './Components/TypeAssertion';

function App() {
  const [count, setCount] = useState<number> (0);


  const increment =()=> {
    setCount(count + 100);
  }

  return (
    <>

    <p>{count}</p>

    <button onClick={increment} >Start Counting</button>

    <hr></hr>

    <ValueAfterInit/>

    <hr></hr>

    <TypeAssertion/>

    </>
  )
}

export default App


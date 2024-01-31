import { useState } from 'react'

// import './App.css'
import TodoList from './components/TodList/TodoList'
// import Intro from './components/Intro'

function App() {
  // const [count, setCount] = useState(0)
  // function increase() {
  //   setCount(count + 1)
  // }
  // function decrease() {
  //   setCount(count - 1)
  // }
  // function reset() {
  //   setCount(0)
  // }



  return (
    
    <>
      {/* <h1>Counter App</h1>
      <h2>Current value of count is {count}</h2>
      <button onClick={reset}>Reset Counter</button>
      <button onClick={increase}>
        Increase Counter
      </button>
      <button onClick={decrease}>
        Decrease Counter
      </button> */}
     {/* <Intro/> */}
     <TodoList/>
    </>
  )
}

export default App

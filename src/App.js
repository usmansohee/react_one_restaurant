import React from "react"
import Restaurant from './components/basics/Restaurant';
import UseStateHook from "./components/hooks/useStateHook";
import UseEffectHook from "./components/hooks/useEffectHook";
import UseReducerHook from "./components/hooks/useReducerHook";



const App = () => {
  return (
    <>
      <p>useState Hook</p>
      <UseStateHook />
      <div><p>----------</p></div>
      <p>useEffect Hook</p>
      <UseEffectHook />
      <div><p>----------</p></div>
      <p>useReducer Hook</p>
      <UseReducerHook />
      {/* <Restaurant /> */}
    </>
  )
}

export default App
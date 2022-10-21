import React, { useEffect, useState } from 'react'

//useState Hook -> it is used to manage states data. (currentData and updatedData)
//useEffect Hook -> it is used to manage data ->runs after every rendering. [] array dependency(only load on first time)


const UseEffectHook = () => {

  const initialData = 5;
  const [currentData, updatedData] = useState(initialData);

  useEffect(() => {
    document.title = `Messages(${currentData})`
  })

  return (
    <>
      <h4>{currentData}</h4>
      <div>
        <button onClick={() => updatedData(currentData + 1)}>Increment</button>
      </div>
    </>
  )
}

export default UseEffectHook
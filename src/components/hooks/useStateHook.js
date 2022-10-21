import React, { useState } from 'react'

//useState Hook -> it is used to manage states data. (currentData and updatedData)

const UseStateHook = () => {

    const initialData = 5;
    const [currentData, updatedData] = useState(initialData);

    return (
        <>
            <h4>{currentData}</h4>
            <div>
                <button onClick={() => updatedData(currentData + 1)}>Increment</button>
            </div>
            <div>
                <button onClick={() => (currentData > 0 ? updatedData(currentData - 1) : updatedData(0))}>Decrement</button>
            </div>
        </>
    )
}

export default UseStateHook
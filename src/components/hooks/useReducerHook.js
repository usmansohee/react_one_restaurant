import React, { useState, useReducer } from 'react'

//userReducer Hook -> it is similer to useState , but work with a reducer function to write extra logics-...
//used to manage states data. (currentData and updatedData)

const reducer = ((state, action) => {

    console.log(state + "  -?")
    console.log(action.type + "   ->")

    if (action.type === "incr") {
        state++;
    }
    if (state > 0 && action.type === "decr") {
        state--;
    }
    return state;
})

const UserReducerHook = () => {

    const initialData = 5;
    const [state, dispatch] = useReducer(reducer, initialData)

    return (
        <>
            <h4>{state}</h4>
            <div>
                <button onClick={() => dispatch({ type: "incr" })}>Increment</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: "decr" })}>Decrement</button>
            </div>
        </>
    )
}

export default UserReducerHook
import React from 'react'
import { useReducer,useState } from 'react'
import Component1 from './Component1';

const initialState =  {count: 0};
const reducer = (state, action) => {
    switch (action.type) {
        case 'Increment':
            return {count:state.count + 1}
        case 'Decrement':
            return {count:state.count - 1}
        case 'Reset':
            return {count: 0}
        default:
            throw new Error();
    }
}

const ReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const[user,setUser] = useState("text")

    const handleIncrement = () => {
        setUser("kismat")
        dispatch ({type : 'Increment'})
        };
    const handleDecrement = () => {
        dispatch ({type : 'Decrement'})
    };
    const handleReset = () => {
        dispatch ({type : 'Reset'})
    }
  return (
    <div>
        <p>Count {state.count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      <Component1 user={user}/>
    </div>
  )
}

export default ReducerHook;
import React from 'react'
import useCounter from './useCounter.js'

const CounterComponent = () => {


    const { count, increment, decrement} = useCounter (0, 1)
    return (
    <div>
        <h2>Cantidad: {count}</h2>
        <button onClick={increment}>+</button>
        {count > 0 ? <button onClick={decrement}>-</button> : null}
    </div>
    )
}

export default CounterComponent
import React from 'react'

const Counter = ({ counter, setCounter }) => {

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        if (counter === 0) return
        setCounter(counter - 1)
    }

    return (
        <div className='counter-btn'>
            <button onClick={decrement}>-</button>
            {counter}
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter

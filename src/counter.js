import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './reduxToolkit/counterSlice'
// import { decrement, increment } from './counterSlice'

export function Counter() {
    const count = useSelector((state) => state?.counter?.value)
    const dispatch = useDispatch()
    console.log(count)
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(incrementByAmount(10))}
                >
                    Custom
                </button>
            </div>
        </div>
    )
}
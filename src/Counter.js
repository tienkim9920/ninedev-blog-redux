
import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux';

const storeSet = new Set();

function Counter() {
    const [count, setCount] = useState(0);

    const counter = useSelector(state => state.counter.value);

    const increase = useCallback(() => setCount(count + 1), []);
    
    const decrease = useCallback(() => setCount(count - 1), []);

    storeSet.add(increase);
    console.log("Render", storeSet);

    return (
        <>
            <div>Count: {count}</div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </>
    )
}

export default Counter;
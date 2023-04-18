
import React, { useState, useCallback } from 'react'

const storeSet = new Set();

function Counter() {
    const [count, setCount] = useState(0);

    const increase = useCallback(() => {
        console.log(count)
        setCount(count + 1);
    }, []);
    
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
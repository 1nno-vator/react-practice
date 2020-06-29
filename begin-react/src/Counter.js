import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const onIncrease = () => { setCount(prevNumber => prevNumber + 1)};
    const onDecrease = () => { setCount(prevNumber => prevNumber - 1)};

    return (
        <>
            <div>{count}</div>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </>
    )
}

export default Counter;
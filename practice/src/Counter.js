import React, { useState } from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);

    return (
        <>
            <p>
                counter value is <b>{value}</b>.
            </p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </>
    )
}

export default Counter;
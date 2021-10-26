import React, {useState, useEffect} from 'react';


export const Counter = (props)=>{
    const [counter, setCounter] = useState(parseInt(localStorage.getItem("count"),10) || props.number);


    const increment = () => {
        setCounter(counter+(props.number || 1));
    }
    const decrement = () => {
        setCounter(counter-(props.number || 1));
    }

    
    useEffect(() => {
        setCounter(counter);
        localStorage.setItem("count",counter);
    },[counter]);

    return (
        <div>
    <p>Counter is: {counter}</p>
    <button onClick={increment}>
        Increment
    </button>
    <button onClick={decrement}>
        Decrement
    </button>
    </div>
    );
}
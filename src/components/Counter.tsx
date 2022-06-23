import React, {useEffect, useState} from 'react';

const Counter = () => {

    let [counter, setCounter] = useState<number>(0)

    useEffect(() => {
        let counterID = setInterval(() => {
            setCounter((counter) => counter + 1)
            console.log('tick')
        }, 1000)
        return () => {
            clearInterval(counterID)
        }
    }, [])

    return (
        <div>
            The value of counter is: {counter}
        </div>
    );
};

export default Counter;
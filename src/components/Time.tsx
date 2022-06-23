import React, {useEffect, useState} from 'react';

const Time = () => {

    let [time, setTime] = useState<Date>(new Date())

    useEffect(() => {
        let timeID = setInterval(() => {
            setTime((time) => new Date())
            console.log('tick')
        }, 1000)
        return () => {
            clearInterval(timeID)
        }
    }, [])

    return (
        <div>
            it is {time.toLocaleTimeString()} o'clock now
        </div>
    );
};

export default Time;
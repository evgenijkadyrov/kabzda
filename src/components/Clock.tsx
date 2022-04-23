import React, {useEffect, useState} from 'react';
import s from './Clock.module.css'



export const Clock = () => {

    const [date, setDate] = useState(new Date())
    const [analog, setAnalog] = useState(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const addZero = (number: number) => number < 10 ? '0' + number : number
    const hours = addZero(date.getHours())
    const minutes = addZero(date.getMinutes())
    const seconds = addZero(date.getSeconds())

    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    }
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    }
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    }

const onClickHandler=()=>{
        setAnalog(!analog)
}
    return (
        <>
            {analog && <div className={s.analog}>
                <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}/>
                <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}/>
                <div className={`${s.dial} ${s.hours}`} style={hoursStyle}/>

            </div>}

            {!analog&&<div> {
                `${hours}:${minutes}:${seconds}`
            }</div>}

            <div className={s.toggle} onClick={onClickHandler}>Mode</div>

        </>
    )
}
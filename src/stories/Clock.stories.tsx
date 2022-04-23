import {useCallback, useEffect, useMemo, useState} from "react";
import React from "react";

export default {
    title: 'Clock demo'
}
export const ClockExample = () => {
    console.log('Clock')
const[time, setTime]=useState(new Date())
    /*const [counter, setCounter] = useState(0)*/


    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    useEffect(()=>{

       const IntId= setInterval(()=>{

            setTime(new Date())
        },1000)
        return ()=>{clearInterval(IntId)}
    },[])



    return <>
        time:{hours}:{minutes}:{seconds}

    </>
}


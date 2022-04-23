import React, {useEffect, useState} from 'react';



export const Clock = () => {

    const [date, setDate] = useState(new Date())


    useEffect(() => {
      const intervalId=  setInterval(() => {
            setDate(new Date())
        }, 1000)
        return ()=>{ clearInterval(intervalId)}
    }, [])

const addZero=(number:number)=> number<10?'0'+number:number
    const hours = addZero(date.getHours() )
    const minutes = addZero(date.getMinutes() )
    const seconds = addZero(date.getSeconds())
    return (
        <div>
            {`${hours}:${minutes}:${seconds}`}
        </div>
    )
}
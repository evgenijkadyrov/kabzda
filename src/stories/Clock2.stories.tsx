import React, {useEffect, useState} from "react";

export default {
    title: 'Clock Repeat'
}

export const Clock = () => {

    const [date, setDate] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    return (
        <div>
            {`${hours}:${minutes}:${seconds}`}
        </div>
    )
}
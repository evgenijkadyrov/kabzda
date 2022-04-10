import {useCallback, useEffect, useMemo, useState} from "react";
import React from "react";

export default {
    title: 'UseEffect demo'
}
export const Example = () => {
    console.log('Example')

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(1)

    const onClickHandler = () => {
        setCounter(counter+1)
    }
    const onClickFakeHandler=()=>{
        setFake(fake +1)
    }

    useEffect(()=>{
        console.log('useEffect every render')
        document.title=counter.toString()
    })
    useEffect(()=>{
        console.log('useEffect counter render')
        document.title=counter.toString()
    },[counter])
    useEffect(()=>{
        console.log('useEffect start render')
        document.title=counter.toString()
    },[])

    return <>
        <button onClick={onClickHandler}>counter</button>
        <button onClick={onClickFakeHandler}>fake</button>
        Hello, {counter} {fake}

    </>
}


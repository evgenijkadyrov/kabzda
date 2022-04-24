import {useCallback, useEffect, useMemo, useState} from "react";
import React from "react";

export default {
    title: 'UseEffect  clean up '
}
export const ResetUseEffect = () => {
    console.log('RersetRender')

    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        console.log('Effect occured')
    },[])
const onClickHandler=()=>{
        setCounter(counter+1)
}
    return <>
       Hello, {counter}
       <button onClick={onClickHandler}> +</button>

    </>
}
export const KeyTracker = () => {
    console.log('KeyTrackerRender')

    const [text, setText] = useState('')

    useEffect(()=>{
        const handler=(e:KeyboardEvent)=>{
            console.log(e.key)
            setText((state)=>state+e.key)}
        window.addEventListener('keypress', handler)
            return ()=>{
window.removeEventListener('keypress',handler)
            }
        },[text])

    return <>
        Typed text, {text}


    </>
}



export const setTimeOutExample = () => {
const[text, setText]=useState('')

  useEffect(()=>{
      const timerId= setTimeout(()=>{
          console.log('Timer expired')
          setText('after few seconds')
      },3000)
      return ()=>{
clearTimeout(timerId)
      }
  },[text])
    return    <>
    text:{text}</>
}

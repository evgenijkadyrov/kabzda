import {useCallback, useEffect, useMemo, useState} from "react";
import React from "react";

export default {
    title: 'UseEffect setTimeout demo'
}
export const SetTimeoutExample = () => {
    console.log('Example')

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(1)

    const onClickHandler = () => {
        setCounter(counter+1)
    }
    const onClickFakeHandler=()=>{
        setFake(fake +1)
    }


   /* useEffect(()=>{setTimeout(()=>{
        console.log('settimeout')
        document.title=counter.toString()
    },2000)
    },[counter])*/

    const changed= (state:number)=>{return state+1}

     useEffect(()=>{setInterval(()=>{

           setCounter(changed)

        },1000)
        },[])

    return <>
        counter:{counter}
      {/*  <button onClick={onClickHandler}>counter</button>
        <button onClick={onClickFakeHandler}>fake</button>
        Hello, {counter} {fake}*/}

    </>
}


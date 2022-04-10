import {useCallback, useMemo, useState} from "react";
import React from "react";

export default {
    title: 'UseState demo'
}
function generate() {
    console.log('generate')
    return 326565
}

export const Example = () => {
    console.log('Example')


//передает в useState функцию, которую она вызывает и возвращает вычисленное значение. единожды


    const [counter, setCounter] = useState(generate)

    //setCounter пережаем функцию
const changer=(state:number)=>{return state+1}

    const onClickHandler = () => {
        setCounter(changer)
    }
    return <>
        <button onClick={onClickHandler}>+</button>
        {counter}

    </>
}


import React, {useMemo, useState} from "react";

import {Select} from "./Select";

export default {
    title: 'select with useMemo',
    component: Select
}


export const SelectMode = () => {
    console.log('count')
    const cities=['minsk', 'gomel', 'kiev', 'berlin', 'warsawa']

    const [value, setValue] = useState('minsk')
    const [citieI, setCitiI] = useState(['minsk', 'gomel', 'kiev', 'berlin', 'warsawa'])
    const [citieA, setCitiA] = useState(['minsk', 'gomel', 'kiev', 'berlin', 'warsawa'])

    const [count, setCount] = useState(0)


    const newCitiesI=useMemo(()=>{
            console.log('1')
        return citieI.filter(el=>el.toLowerCase().indexOf('i')>-1)}
        ,
        [])

    const newCitiesA=()=>{
        console.log('2')
        setCitiA( citieI.filter(el=>el.toLowerCase().indexOf('a')>-1))}

    const newCitiesB=useMemo(()=>{ return cities.filter(el=>el.toLowerCase().indexOf('b')>-1)},[])

    const onClickHandler = (value: string) => {
        setValue(value)
    }
    const counter = () => {
        console.log('counter')
        let counter = count + 1
        return setCount(counter)
    }

    return (
        <>
            <button onClick={counter}>+</button>
            {count}
            <Select value={newCitiesI[0]} onClick={onClickHandler} items={newCitiesI}/>
            <Select value={citieA[0]} onClick={newCitiesA} items={citieA}/>
           {/* <Select value={value} onClick={onClickHandler} items={newCitiesB}/>*/}
        </>)
}
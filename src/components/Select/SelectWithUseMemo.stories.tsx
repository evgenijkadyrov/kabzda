import React, {useMemo, useState} from "react";

import {Select} from "./Select";

export default {
    title: 'select with useMemo',
    component: Select
}
const SelectMemo=React.memo(Select)

export const SelectMode = () => {
    console.log('count')
    const [value, setValue] = useState('minsk')
    const [count, setCount] = useState(0)

    const onClickHandler = (value: string) => {
        setValue(value)
    }
    const counter = () => {
        let counter = count + 1
        return setCount(counter)
    }


    return (
        <>
            <button onClick={counter}>+</button>
            {count}
            <SelectMemo value={value} onClick={onClickHandler} items={['minsk', 'gomel', 'kiev']}/>
        </>)
}
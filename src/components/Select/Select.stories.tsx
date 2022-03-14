import React, {useState} from "react";

import {Select} from "./Select";

export default {
    title:'select test',
component: Select}

export const SelectMode = () =>{
    const[value, setValue]=useState('minsk')
    const onClickHandler =(value:string)=>{
setValue(value)
    }
    return(
    <Select value={value} onClick={onClickHandler} items={['minsk', 'gomel', 'kiev']}/>)
}
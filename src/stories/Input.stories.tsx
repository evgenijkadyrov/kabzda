import React, {ChangeEvent, useState, MouseEvent, useRef} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import set = Reflect.set;
import {action} from "@storybook/addon-actions";

export default {
  title: 'input',

}


export const UncontrolledInput = ()=><input/>
export const TrackValueOfUncontrolledInput = ()=> {
  const[value, setValue]=useState('')
  const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    let actualValue=e.currentTarget.value
    setValue(actualValue)
  }
  return(
      <><input onChange={onChangeHandler}/> --{value}</>
  )
}

export const GetValueOfUncontrolledInputButttonPress = ()=>{
  const[value, setValue]=useState('')
  const inputRef=useRef<HTMLInputElement>(null)
  const save=()=>{
    const curValue=inputRef.current as HTMLInputElement
    setValue(curValue.value)
  }
  return(
      <>
        <input ref={inputRef} />--{value}
        <button onClick={save}>Add</button>
      </>
  )
}
export const ControlledInput = () =>{
  const[parentValue,setParentValue]=useState('')
  const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{

    setParentValue(e.currentTarget.value)

  }
  return(
<input value={parentValue} onChange={onChangeHandler}/>
  )
}

export const ControlledCheckbox = () =>{
  const[parentValue,setParentValue]=useState(true)
  const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    setParentValue(e.currentTarget.checked)
  }
  return(
      <input type={"checkbox"} checked={parentValue}  onChange={onChangeHandler}/>
  )
}
export const ControlledSelect = () =>{
  const[parentValue,setParentValue]=useState<string|undefined>('2')
  const onChangeHandler=(e:ChangeEvent<HTMLSelectElement>)=>{
    setParentValue(e.currentTarget.value)
  }
  return(
      <select value={parentValue} onChange={onChangeHandler}>
        <option value={1}>minsk</option>
        <option value={2}>gomel</option>
        <option value={3}>danilki</option>
      </select>
  )
}
import React, {useState} from 'react';


import {action} from "@storybook/addon-actions";
import {Onoff} from "../components/Onoff/Onoff";



export default {
  title: 'Onoff',
component: Onoff
}


 const callback = ()=>action('on or off clicked')

export const OnMode = ()=><Onoff on={true} onChange={callback}/>
export const OffMode = ()=><Onoff on={false} onChange={callback}/>

export const ChangeMode = () =>{
  const[value,setValue]=useState(true)
  return (

      <Onoff on={value} onChange={setValue}/>
  )
}


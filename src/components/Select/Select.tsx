import React, {useState} from "react";
import  './Select.css'
export type SelectType = {
    value: string
    onClick: (value:string) => void
    items: string[]
}
export type ItemsType = {
    title: string[]

}
export const Select = (props: SelectType) => {
const [open, setOpen]=useState(false)

    const onClickHandler=()=>{
    setOpen(!open)
    }
    const onClickListItemHandler =(item:string)=>{
        props.onClick(item)
        setOpen(!open)
    }

    return (

        <div className={'itemContainer'}>
            <div className='itemHeader' onClick={onClickHandler}>{props.value}  </div>
            {open && (<div className='itemList' >
                {props.items.map((el,index) => <div    key={index} onClick={()=>onClickListItemHandler(el)}>{el}</div>)}
            </div>)}
        </div>
    )
}
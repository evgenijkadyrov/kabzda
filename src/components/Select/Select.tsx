import React, {useState,KeyboardEvent} from "react";
import './Select.css'

export type SelectType = {
    value: string
    onClick: (value: string) => void
    items: string[]
}
export type ItemsType = {
    title: string[]

}
export const Select = (props: SelectType) => {
    console.log('select')
    const [open, setOpen] = useState(false)
const[hovered, setHovered]=useState(props.value)
    const selectedItem = props.items.find(el => el === props.value)
    const hoveredElement= props.items.find(el=>el===hovered)

    const onClickHandler = () => {
        setOpen(!open)
    }
    const onClickListItemHandler = (item: string) => {
        props.onClick(item)
        setOpen(!open)
    }
const onKeyUp=(e:KeyboardEvent<HTMLDivElement>)=>{
    for(let i=0;i<props.items.length;i++){
        if(props.items[i]===hovered){
            if(props.items[i] && e.key==='ArrowDown'){
            setHovered(props.items[i+1])}
            else if(props.items[i] && e.key==='ArrowUp'){ setHovered(props.items[i-1])}

            break
        }
    }
}
    return (

        <div className={'itemContainer'}>
            <div className='itemHeader' onClick={onClickHandler}  onKeyUp={onKeyUp}
                 tabIndex={0}>{props.value}  </div>
            {open && (<div className='itemList' >
                {props.items.map((el, index) => <div
                    onMouseEnter={()=>{setHovered(el)}}

                    className={`itemListBlock ${(el === hoveredElement ? 'selected' : '')}`}
                    key={index}
                    onClick={() => onClickListItemHandler(el)}>{el}</div>)}
            </div>)}
        </div>
    )
}
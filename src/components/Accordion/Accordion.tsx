import React from "react";


export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    callback: () => void
    items: Array<ItemsType>
    onClick:(id:number)=>void
}
export type ItemsType={
    title:string,
    value:any
}
export const Accordion = function (props: AccordionPropsType) {


    return (
        <div><AccordionTitle title={props.titleValue} callback={props.callback}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}</div>
    )
}
type AccordionTitlePropsType = {
    title: string
    callback: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <div onClick={props.callback}>{props.title}</div>
    )
}

type AccordionBodyType = {
    items: ItemsType[]
    onClick:(id:number)=>void
}

function AccordionBody(props: AccordionBodyType) {

    const onClickHandler =(id:number)=>{
        props.onClick(id)
    }
    return (
        <ul>
            {props.items.map((el,index) => <li onClick ={()=>onClickHandler(el.value) } key={el.value}>{el.title}</li>)}
        </ul>
    )
}

export default Accordion;
import React from "react";
import {ItemsType} from "../../App";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    callback: () => void
    items:Array<ItemsType>
}
export const Accordion = function (props: AccordionPropsType) {

    console.log('Accordion rendering')
    return (
        <div><AccordionTitle title={props.titleValue} callback={props.callback}/>
            {!props.collapsed && <AccordionBody items={props.items}/>}</div>
    )
}
type AccordionTitlePropsType = {
    title: string
    callback: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div onClick={props.callback}>{props.title}</div>
    )
}
 type AccordionBodyType={
    items:Array<ItemsType>
}
function AccordionBody(props:AccordionBodyType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {props.items.map(el=><li>{el.title}</li>)}
        </ul>
    )
}

export default Accordion;
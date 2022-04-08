import React, {useReducer, useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string

}
type ActionType={
    type:'TOGGLE-COLLAPSED'
}
const reducer=(state:boolean, action:ActionType)=>{
if (action.type==='TOGGLE-COLLAPSED'){
    return !state
}

    return state
}
const UncontrolledAccordion = function (props: UncontrolledAccordionPropsType) {

   // const [collapsed, setCollapsed] = useState(false)
    const [collapsed, dispatch] = useReducer(reducer, false)
    console.log('Accordion rendering')
    return (
        <div><AccordionTitle title={props.titleValue} onClick={() => {
            dispatch({type:'TOGGLE-COLLAPSED'} )
        }}/>

            {!collapsed && <AccordionBody/>}</div>
    )
}
type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div onClick={()=>{props.onClick()}}>{props.title}</div>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    )
}

export default UncontrolledAccordion;
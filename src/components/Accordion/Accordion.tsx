import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    callback: () => void
}
const Accordion = function (props: AccordionPropsType) {

    console.log('Accordion rendering')
    return (
        <div><AccordionTitle title={props.titleValue} callback={props.callback}/>
            {!props.collapsed && <AccordionBody/>}</div>
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

export default Accordion;
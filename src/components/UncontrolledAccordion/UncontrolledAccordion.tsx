import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string

}
const UncontrolledAccordion = function (props: UncontrolledAccordionPropsType) {

    const [collapsed, setCollapsed] = useState(false)
    console.log('Accordion rendering')
    return (
        <div><AccordionTitle title={props.titleValue}/>
            <button onClick={() => {
                setCollapsed(!collapsed)
            }}>Toggle
            </button>
            {!collapsed && <AccordionBody/>}</div>
    )
}
type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div>{props.title}</div>
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
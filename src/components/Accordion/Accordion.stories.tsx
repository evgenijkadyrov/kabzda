import React, {useState} from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion
}
const callback = action('accordion mode change')
const OnClickcallback = action('item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} callback={callback}
                                                  items={[{title: 'Dimych', value: 1},
                                                      {title: 'Victor', value: 2},
                                                      {title: 'Misha', value: 3},
                                                      {title: 'Vera', value: 4},
                                                      {title: 'Ivan', value: 5}]} onClick={OnClickcallback}/>

export const MenuChanging = () => {
    const [value, setValue] = useState(true)
    const onChangeHandler = () => {
        setValue(!value)
    }
    return (
        <Accordion titleValue={'Users'}
                   collapsed={value}
                   callback={onChangeHandler}
                   items={[{title: 'Dimych', value: 1},
                       {title: 'Victor', value: 2},
                       {title: 'Misha', value: 3}, {title: 'Vera', value: 4},
                       {title: 'Ivan', value: 5}]}
                   onClick={OnClickcallback}/>
    )
}
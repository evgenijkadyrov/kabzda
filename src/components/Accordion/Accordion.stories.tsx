import React, {useState} from "react";
import {Accordion,AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default{
    title:'Accordion',
    component:Accordion
}

const onChangecallback=action('accordion mode change event fired')
const onClickCallback=action('some item was clicked')

//стори 6версия
// создаем Template
const Template:Story<AccordionPropsType>=(args)=><Accordion {...args}/>
//создаем копию
export const MenuCollapsedMode = Template.bind({})

//прописываем args
MenuCollapsedMode.args={
    titleValue: 'Menu',
    collapsed: true,
    callback:onChangecallback};


//создаем копию
export const UsersUnCollapsedMode = Template.bind({})
UsersUnCollapsedMode.args={
    titleValue: 'Users',
    collapsed: false,
    callback:onChangecallback,
    items:[
            {title:'Dimych',value:1},
            {title:'Victor',value:2},
            {title:'Misha',value:3},
            {title:'Igor',value:4},
            {title:'Vera',value:5},
            ],

};

import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {RatingValueType, Ratting} from './Ratting';


 export default {
    title: 'Ratting',
    component: Ratting,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {

    },
} as ComponentMeta<typeof Ratting>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
/*const Template: ComponentStory<typeof Ratting> = (args) => <Ratting {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    
    value:ratingValue,
    onClick:(ratingValue)
};
export const changeMode=()=>{
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return <Ratting value={ratingValue} onClick={setRatingValue}
}*/

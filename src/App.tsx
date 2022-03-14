import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {RatingValueType, Ratting,} from "./components/Ratting/Ratting";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRatting} from "./components/UncontrolledRatting/UncontrolledRatting";
import {Onoff} from "./components/Onoff/Onoff";
import {UncontroledOnoff} from "./components/Onoff/UncontroledOnoff";

function App() {
    console.log('App rendering')
   /* let items:Array<ItemsType>=[
        {title:'Dimych',value:1},
        {title:'Victor',value:2},
        {title:'Misha',value:3},
        {title:'Igor',value:4},
        {title:'Vera',value:5},
    ]*/
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState(true)
    return (
        <div className={'App'}>
            {/* <PageTitle title={'This APP component'}/>
            <PageTitle title={'My friends'}/>
            Article1
            <Ratting value={2}/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Contact'}/>*/}
           {/* <Accordion titleValue={'Menu'} collapsed={accordionCollapsed}
                       callback={() => setAccordionCollapsed(!accordionCollapsed)} items={props.items}/>
            <Accordion titleValue={'Contact'} collapsed={accordionCollapsed}
                       callback={() => setAccordionCollapsed(!accordionCollapsed)} items={props.items}/>*/}
            {/*Article2*/}
            <Ratting value={ratingValue} onClick={setRatingValue} />
            <UncontrolledRatting/>
            <Onoff on={switchOn} onChange={setSwitchOn}/>
           {/* <UncontroledOnoff callback={(on) => setSwitchOn(on)}/> {switchOn.toString()}*/}
        </div>)

}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return (<h1>{props.title}</h1>)
}


export default App;

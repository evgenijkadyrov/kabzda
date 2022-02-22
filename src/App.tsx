import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Ratting} from "./components/Ratting/Ratting";
import Onoff from "./components/Onoff/Onoff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRatting} from "./components/UncontrolledRatting/UncontrolledRatting";

function App() {
    console.log('App rendering')
    return (
        <div className={'App'}>
           {/* <PageTitle title={'This APP component'}/>
            <PageTitle title={'My friends'}/>
            Article1
            <Ratting value={2}/>*/}
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Contact'}/>
           {/* <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Contact'} collapsed={false}/>*/}
            {/*Article2*/}
            {/*<Ratting value={5}/>
            <Ratting value={3}/>
            <Ratting value={1}/>
            <Ratting value={5}/>*/}
            <UncontrolledRatting />
{/*<Onoff />*/}
        </div>)
}
type PageTitlePropsType={
    title: string
}
function PageTitle(props:PageTitlePropsType) {
    console.log('PageTitle rendering')
    return (<h1>{props.title}</h1>)
}


export default App;

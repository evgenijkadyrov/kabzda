import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Ratting} from "./components/Ratting/Ratting";

function App() {
    console.log('App rendering')
    return (
        <div>
           {/* <PageTitle title={'This APP component'}/>
            <PageTitle title={'My friends'}/>
            Article1
            <Ratting value={2}/>*/}
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Contact'} collapsed={false}/>
            Article2
            <Ratting value={5}/>
            <Ratting value={3}/>
            <Ratting value={1}/>
            <Ratting value={5}/>

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

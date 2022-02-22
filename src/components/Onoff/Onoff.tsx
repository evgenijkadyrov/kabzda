import React, {useState} from "react";

type OnoffType = {

}

export const Onoff = (props: OnoffType) => {
    const[on, setOn]=useState(false)
    const onStyle = {
        width: '40px',
        height: '20px',
        borderRadius: '2px',
        backgroundColor: on ? 'green' : 'white',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px'
    }
    const ofStyle = {
        width: '40px',
        height: '20px',
        borderRadius: '2px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',

        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on?'green':'red'


    }
    return (
        <div>
            <div style={onStyle} onClick={()=>setOn(true)}>On</div>
            <div style={ofStyle} onClick={()=>setOn(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default Onoff;
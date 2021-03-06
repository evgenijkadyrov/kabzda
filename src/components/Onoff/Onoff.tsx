import React, {useState} from "react";

type OnoffType = {
    on: boolean
    onChange: (on: boolean) => void
}

export const Onoff = ({onChange, ...props}: OnoffType) => {

    const onStyle = {
        width: '40px',
        height: '20px',
        borderRadius: '2px',
        backgroundColor: props.on ? 'green' : 'white',
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
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'red'

    }
    return (
        <div>
            <div style={onStyle} onClick={() => onChange(true)}>On</div>
            <div style={ofStyle} onClick={() => onChange(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
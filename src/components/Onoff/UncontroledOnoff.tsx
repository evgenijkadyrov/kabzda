import React, {useState} from "react";

type UncontroledOnoffType = {
    callback: (on: boolean) => void
}

export const UncontroledOnoff = (props: UncontroledOnoffType) => {
    const [on, setOn] = useState(false)
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
        backgroundColor: on ? 'green' : 'red'

    }

    const onClickHandler = () => {
        setOn(true);
        props.callback(true)
    }
    const offClickHandler = () => {
        setOn(false);
        props.callback(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClickHandler}>On</div>
            <div style={ofStyle} onClick={offClickHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
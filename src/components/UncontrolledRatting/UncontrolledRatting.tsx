import React, {useState} from "react";
type UncontrolledRattingRattingPropsType={

}
export const UncontrolledRatting = function (props: UncontrolledRattingRattingPropsType) {
    console.log('Ratting rendering')
    const[value, setValue]=useState(0)
    return (<div>
            <Star selected={value>0}/><button onClick={()=>setValue(1)}>*</button>
            <Star selected={value>1}/><button onClick={()=>setValue(2)}>*</button>
            <Star selected={value>2}/><button onClick={()=>setValue(3)}>*</button>
            <Star selected={value>3}/><button onClick={()=>setValue(4)}>*</button>
            <Star selected={value>4}/><button onClick={()=>setValue(5)}>*</button>
        </div>
    )

}
type StarPropsType={
    selected:boolean
}
function Star(props: StarPropsType) {
    console.log('Star rendering')

    return ((props.selected) ? <span><b>Star </b></span>:<span>Star </span>)

}
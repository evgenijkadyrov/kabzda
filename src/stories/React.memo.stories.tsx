import {useState} from "react";
import React from "react";
export default {
    title: 'React.memo demonstration'
}

const MessaCounter = (props: { count: number }) => {
    console.log('yo')
    return <div>{props.count}</div>
}
const NewUsers = (props: { users: Array<any> }) => {
    console.log('ee')
    return <div>{props.users.map(el => <div>{el}</div>)}</div>
}
const Users = React.memo(NewUsers)
const NewMessageCounter=React.memo(MessaCounter)


export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Kolia', 'Vasia','Petya'])

    const onClickHandler = () => {
        setCounter(counter + 1)
    }
    const onClickHandlerName = () => {
        setUsers([...users, 'hey'])
    }

    return <>
        <button onClick={onClickHandler}>+</button>
        <button onClick={onClickHandlerName}>add Name</button>
        <NewMessageCounter count={counter}/>

        <Users users={users}/>
    </>
}


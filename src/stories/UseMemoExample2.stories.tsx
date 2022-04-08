import {useMemo, useState} from "react";
import React from "react";

export default {
    title: 'UseMemo with ReactMemo'
}


const NewUsers = (props: { users: Array<string> }) => {
    console.log('Users_Secret')
    return <div>{props.users.map((el, i) => <div key={i}>{el}</div>)}</div>
}
const Users = React.memo(NewUsers)

export const HelpsToReactMemo = () => {

    console.log("HelpsToReact")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Kolia', 'Vasia', 'Petya'])


    const newArr = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        setUsers([...users, 'Sveta ' + new Date().getTime()])
    }

    const onClickHandler = () => {
        setCounter(counter + 1)
    }

    return <>
        <button onClick={onClickHandler}>+</button>
        <button onClick={addUser}>addUser</button>

        {counter}
        <Users users={newArr}/>
    </>
}


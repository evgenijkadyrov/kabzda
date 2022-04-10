import {useCallback, useMemo, useState} from "react";
import React from "react";

export default {
    title: 'UseMemo with LikeUseCallback'
}


const NewBooks = (props: { books: Array<string>, addBook: () => void }) => {
    console.log('Books_Secret')
    return <div>
        <button onClick={() => props.addBook()}>addbook</button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}</div>
}
const Book = React.memo(NewBooks)

export const LikeUseCallback = () => {

    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['JS', 'HTML', 'CSS', 'React'])

    const newArr = useMemo(() => {

        return books.filter(book => book.toLowerCase().indexOf('a') > -1)
    }, [books])
    const addBook = () => {
        console.log(books)
        setBooks([...books, 'Angular ' + new Date().getTime()])
    }
    /*const memoizedAddBook=useMemo(()=>{return addBook},[books])*/
    //useCallback запоминает функцию, отличие от useMemo в отсутствии return
    const memoizedAddBook=useCallback( addBook,[books])
    const onClickHandler = () => {
        setCounter(counter + 1)
    }
    return <>
        <button onClick={onClickHandler}>+</button>
        {counter}
        <Book books={newArr} addBook={memoizedAddBook}/>
    </>
}


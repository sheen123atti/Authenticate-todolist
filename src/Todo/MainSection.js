import React, { useState } from 'react'
import Inbox from './Inbox'
import Next from './Next'
import Today from './Today'
import './App.css';

const list = [
    { number: 1, title: "Get gifts", date: new Date("03/25/2023") },
    { number: 2, title: "Go to sleep at 10pm", date: new Date("02/10/2023") },
    { number: 3, title: "Bring vegetables", date: new Date("02/02/2023") }
]

export default function MainSection(props) {
    const [filteredList, setFilteredList] = useState(list)
    const addToList = (obj) => {
        list.push(obj)
        setFilteredList(list)
    }
    return (
        <div className='main-section'>
            {props.active === "INBOX" && (<Inbox list={filteredList} append={addToList} />)}
            {props.active === "TODAY" && <Today list={filteredList} />}
            {props.active === "NEXT" && <Next list={filteredList} />}
        </div>
    )
}
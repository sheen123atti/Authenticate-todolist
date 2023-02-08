import React from 'react'
import ListRender from './ListRender'

export default function Next(props) {
    const date = new Date()
    const filteredList = props.list.filter((task) => {
        const diffTime = task.date - date
        const diffDays = Math.ceil((diffTime) / (1000 * 60 * 60 * 24)) // time we get is in ms 
        if (diffDays > 0 && diffDays < 8) {
            return true
        }
        return false
    })
    return (
        <div>
            <h2>NEXT 7 DAYS</h2>
            <ListRender list={filteredList} />
        </div>
    )
}
import React from 'react'
import './App.css'

export default function SideNav(props) {
    return (
        <div className='side-nav'>
            <button className='inbox' onClick={() => { props.change("INBOX") }}>
                INBOX
            </button><br/>
            <button className='today' onClick={() => { props.change("TODAY") }}>
                TODAY
            </button><br/>
            <button className='next' onClick={() => { props.change("NEXT") }}>
                NEXT 7 DAYS
            </button>
        </div>
    )
}
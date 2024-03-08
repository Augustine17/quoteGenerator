import React from 'react'
import './Quotes.css'

export const Quotes = (props) => {
  return (
    <div className='quoteContainer'>
        <h1 className='quote'>{props.quote}</h1>
        <p className='author'>{props.author}</p>
    </div>
  )
}

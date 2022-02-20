import React from 'react'
// line 3 where {title, color} is at is known as destructuring they are comming through as an object (you actually use props)
const MyButton = (props) => {
    return <button style={{ backgroundColor: props.color }}> {props.title} </button>
}

export default MyButton

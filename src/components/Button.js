import React from 'react'

const Button = (props) => (
    <button 
        onClick={props.onClick}>
        {props.text || props.children}
    </button>
)

export default Button
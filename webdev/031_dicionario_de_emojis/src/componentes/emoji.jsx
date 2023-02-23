import React from 'react'
import emojipedia from './emojipedia'

function emoji(props) {
    return (
        <span className="emoji" role="img" aria-label="{props.name}"> {props.emoji} </span>
    )
    
}

export default emoji
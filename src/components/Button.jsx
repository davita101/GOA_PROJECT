import React from 'react'

function Button(props) {
    return (
        <div className={`cursor-pointer transition-all hover:bg-white hover:text-black py-[.2rem] px-[1.5rem] rounded-lg border-2 border-white ${props.className}`}>
            <div>{props.value}</div>
        </div>
    )
}

export default Button

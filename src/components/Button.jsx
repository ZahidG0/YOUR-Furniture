import React from 'react'
import btnIcon from "../assets/button-icon.png"

const Button = ({ text }) => {
    return (
        <button className='text-sm text-amber-400 flex items-center gap-1'>
            {text}
            <img src={btnIcon} alt="btn-Icon" />
        </button>
    )
}

export default Button
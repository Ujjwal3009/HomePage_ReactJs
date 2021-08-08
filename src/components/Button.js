import React from 'react'
import PropTypes from 'prop-types'
import '../index.css'

function Button({ color, text, width, heigth, Class, onClick }) {
    return (
            <button 
                type="button" 
                class={Class} 
                onClick={onClick}
                style={ {backgroundColor: color, width: width, heigth: heigth} }
            >
                {text}
            </button>
    )
}

Button.propTypes={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button

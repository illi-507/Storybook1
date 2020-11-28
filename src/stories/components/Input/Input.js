import React from 'react'
import './Input.css'

function Input (props) {
  const { sIze = 'medium', ...rest } = props
  return (
    <input className={`input ${sIze}`} {...rest} />
  )
}

export default Input;
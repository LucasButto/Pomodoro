import React from 'react'

const Button = ({name, buttonHandler}) => {
  return (
    <div>
      <button onClick={buttonHandler}>{name}</button>
    </div>
  )
}

export default Button

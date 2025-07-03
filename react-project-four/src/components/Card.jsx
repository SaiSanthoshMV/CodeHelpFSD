import React from 'react'

const Card = (props) => {
  return (
    <div>
        {/* {props.name} */}
        <h2>{props.children}</h2>
    </div>
  )
}

export default Card
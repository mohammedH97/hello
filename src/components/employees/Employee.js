import React from 'react'

const Employee = (props) => {
  return (
    <div className='employee employee-primary'>
      <h3>{props.name}</h3>
      <small>{props.job}</small>
      {props.children}
    </div>
  )
}

export default Employee
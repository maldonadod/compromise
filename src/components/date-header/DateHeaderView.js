import React, { Component } from 'react'

const View = ({
  date
  ,sustractDay
  ,addDay
}) => {

  return (
    <div>
      <button onClick={sustractDay}>&#8592;</button>
      <span>{date.toDateString()}</span>
      <button onClick={addDay}>&#8594;</button>
    </div>
  )
}

export default View

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
      <button disabled={new Date(date).setHours(0,0,0,0) >= new Date().setHours(0,0,0,0)} onClick={addDay}>&#8594;</button>
    </div>
  )
}

export default View

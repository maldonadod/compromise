import React, { Component } from 'react'

const View = ({ date }) => {

  console.log(date)

  return (
    <span>{date.toString()}</span>
  )

}
export default View;

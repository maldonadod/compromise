import React, { Component } from 'react'

const TodoItem = (props) => {

  console.log(props);

  return (
    <li>{props.text}</li>
  )
}

export default TodoItem;

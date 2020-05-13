import React from "react"

import Item from "./Item"

const List = (props) => {
  return (
    <>
    {/* {props.todos.map((todo, index) => {
      return (
        <Item todo={todo} index={index} todos={props.todos} setTodos={setTodos}></Item>
      )
    })} */}
    {props.todos.map((todo) => {
      return (
        <Item todo={todo}></Item>
      )
    })}

    {/* <Item todo={props.todos[0]}></Item>
    <Item todo={props.todos[1]}></Item>
    <Item todo={props.todos[2]}></Item> */}
    </>
  )
}



export default List

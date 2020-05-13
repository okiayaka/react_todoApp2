import React from "react"

import Form from "./Form"
import List from "./List"

const App = () => {

  const [todos, setTodos] = React.useState([
    "htmlを書く",
    "cssを書く",
    "jsを書く"
  ])
  return (
    <>
      <Form todos={todos} setTodos={setTodos}></Form>

      <List todos={todos} setTodos={setTodos}></List>
    </>
  )

}


export default App

import React from "react"

const Form = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodos = props.todos.slice()

    const task = e.target.task.value

      newTodos.push(task)

      props.setTodos(newTodos)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
      <input type="text" name="task"/>
      <button type="submit">追加</button>
      </form>
    </>
  )

}

export default Form

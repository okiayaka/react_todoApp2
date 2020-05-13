import React from "react"

const Item = (props) => {
  // (1)完了or保存
  const [isDone, setIsDone] = React.useState(false)
  // (3)編集→編集完了
  const [isEdit, setIsEdit] = React.useState(false)

  // (2)削除
  const handleDelete = () => {
    const newTodos = props.todos.slice()
    newTodos.splice(props.index, 1)
    props.setTodos(newTodos)
  }

  // (3)編集→編集完了
    // 入力された文字列を反映させる
  const handleEdit = (e) => {
    const reTodos = props.todos.slice()
    const edittask = e.target.edittask.value
    reTodos.push(edittask)
    props.setTodos(reTodos)

  }

  return (
    <>
      {
        // isEditがtrue->formのhtml
        // isEditがfalse->編集前のhtml
        isEdit ?
          // isEditがtrue
          <form onSubmit={handleEdit}>
            <input type="text" name="edittask"/>
            <button type="submit" onClick={() => { setIsEdit(!isEdit) }}>編集完了</button>
          </form>
          :
          // isEditがfalse
          <p>{props.todo}</p>
          
          <>
            {
              isDone ? <p style={{ textDecoration: "line-through" }}>{props.todo}</p> : <p>{props.todo}</p>
            }
            
            <button onClick={() => {
              setIsDone(!isDone)
            }}>{isDone ? "戻す" : "完了"}</button>
            {/* (2)削除 */}
            <button onClick={handleDelete}>削除</button>
            {/* (3)編集→編集完了 */}
            <button onClick={() => { setIsEdit(!isEdit) }}>編集</button>
          </>
      }
    </>
  )

}

export default Item

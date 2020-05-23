// reactをインポート
import React from "react"
// Itemコンポーネントをインポート
import Item from "./Item"

// Listコンポーネントを定義(コンポーネント関数を定義)
// props = 親（App.js）からのデータを受け継ぐ。
const List = (props) => {

    // return () の ()内は一つのHTML。<> </>で囲う
  return (
    <>

    {/* 配列.map() … 与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成する*/}
    {props.todos.map((todo, index) => {
      return (
        <Item todo={todo} index={index} todos={props.todos} setTodos={props.setTodos}></Item>
      )
    })}

    {/* {props.todos.map((todo, index) => {
      return (
        <Item todo={todo} index={index} todos={props.todos} setTodos={setTodos}></Item>
        // listのなかでsetTodosを探してしまう→undefinde
      )
    })} */}

    {/* {props.todos.map((todo) => {
      return (
        <Item todo={todo}></Item>
      )
    })} */}

    {/* <Item todo={props.todos[0]}></Item>
    <Item todo={props.todos[1]}></Item>
    <Item todo={props.todos[2]}></Item> */}
    </>
  )
}


// Listコンポーネント関数をエクスポート
export default List

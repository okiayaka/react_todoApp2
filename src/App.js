// reactをインポート
import React from "react"

// 子コンポーネントをインポート
import Form from "./Form"
import List from "./List"

// Reactで扱うデータ
  // state : コンポーネントが持っているデータ
  // props : 親コンポーネントから渡されたデータ

// Appコンポーネントを定義(コンポーネント関数を作成)
const App = () => {
  // データを定義
  // const [データ名, データの再定義する関数名] = React.useState(データの初期値)
  const [todos, setTodos] = React.useState([
    // todos: state (データの初期値)
    // setTodos: setState (データを再定義する関数)
      // 以下 todos[i]のこと? = データの初期値
    "htmlを書く",
    "cssを書く",
    "jsを書く"
  ])

  // stateであるtodosを定義 → 反映させる → Listコンポーネントに渡す

  return (
    // return () の ()内は一つのHTML。<> </>で囲う
    // 他のコンポーネントにデータを渡す↓
      // <コンポーネント名 子コンポーネントで使う名前={親コンポーネントでの名前}></コンポーネント名>
    <>
      {/* Formコンポーネント */}
      <Form todos={todos} setTodos={setTodos}></Form>

      {/* Listコンポーネント */}
      <List todos={todos} setTodos={setTodos}></List>

      {/* setTodos={setTodos}　はどういう意味？ */}

    </>
  )

}

// コンポーネント関数をエクスポート
export default App

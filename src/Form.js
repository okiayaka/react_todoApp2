// reactをインポート
import React from "react"

// Formコンポーネントを定義(コンポーネント関数を定義)
// パラメータ（引数）は親コンポーネントからのprops。
// props = (親の持っている)プロパティ。データ。
const Form = (props) => {

  // todoの追加機能を定義
  // 機能はjsで記述する
  const handleSubmit = (e) => {
    // 0. submitイベントが発生時、デフォルトのリロードを阻止する。
    e.preventDefault()

    // 1. データ(state : todos[i] ? )のコピー
      // 配列.slice():コピー。
    const newTodos = props.todos.slice()

    // 2. 追加するデータをコピーしたデータに追加
      // (1) 入力された文字列を取得する(イベントを使う)
    const task = e.target.task.value
      // (2) todosを再定義するため、newTodosに追加する。
      // 配列.push():末尾に追加。
    newTodos.push(task)

    // 3. コピーしたデータ(newTodos)でstateを再定義(setTodos)
    props.setTodos(newTodos)
  }

  return (
    // return () の ()内は一つのHTML。<> </>で囲う
    <>
      {/* 入力・送信フォームを作成 */}
      {/* onSubmit = イベント = 送信ボタンがおされたら */}
      {/* {handleSubmit} ← js */}
      <form onSubmit={handleSubmit}>
        {/* フォーム部品。（テキスト入力） */}
        <input type="text" name="task"/>
        {/* ボタン。ボタンの種類＝入力内容を送信するボタン */}
        <button type="submit">追加</button>
      </form>
    </>
  )

}

// コンポーネント関数をエクスポート
export default Form

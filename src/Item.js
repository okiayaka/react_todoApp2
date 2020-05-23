// reactをインポート
import React from "react"

// css2. .cssファイルを使って、classNameを指定するやり方
import "./Item.css"

// css.3 css in js を使う。styled-componentsを使う方法。1と2を組みあわせたもの。(おすすめ)
// $ yarn add styled-componentsを行う
import styled from "styled-components"

const EditButton = styled.button`
background-color: brown;
span {
  background-color: white;
}
`

// css1. jsで連想配列の形でcssを入力する方法
const isDoneStyle = {
  // jsなので-は使えない。backgroung-color -> backgroundColor
  backgroundColor: "green"
}






// Itemコンポーネントを定義(コンポーネント関数を定義)
// props = 親（App.js）からのデータを受け継ぐ。
const Item = (props) => {

  // (1)完了かどうか保存するデータを作成。
    // （データを定義…const [データ名, データの再定義する関数名] = React.useState(データの初期値)）
  const [isDone, setIsDone] = React.useState(false)

  // (3)編集中かどうかを保存するデータを作成。
    // （データを定義…const [データ名, データの再定義する関数名] = React.useState(データの初期値)）
    // 編集中…true / 編集していない…false
  const [isEdit, setIsEdit] = React.useState(false)

  // (2)todoの削除機能（todos(配列)の要素を削除する）
    // 削除機能の関数宣言（削除ボタンが押されたら発動）
  const handleDelete = () => {

    // newTodosとして親コンポーネント(props)のtodos（配列）をコピー(slice())する
    const newTodos = props.todos.slice()

    // todosの中から該当する要素（todo）を削除する。
      // 該当する要素を特定…インデックス番号を使う
      // a.親コンポーネント（List.js）から、props.indexで取得
    // コピーしたtodos(newTodos)から該当する要素を削除する。…配列.splice(削除する要素のインデックス番号 , 削除する個数)
    newTodos.splice(props.index, 1)

    // todosを更新→setTodosを使う
    props.setTodos(newTodos) 

      //  b.文字の一致を調べるやり方（今回扱わない）
  }

  // (3)編集機能
  // 入力された文字列を反映させる
    // 関数handleEditを定義
  // const handleEdit = (e) => {
  //     // 配列をコピー
  //   const reTodos = props.todos.slice()
  //   // const edittask = e.target.edittask.value
  //   // reTodos.push(edittask)
  //   props.setTodos(reTodos)
  // }

    // 編集ボタンが押されたら　編集→編集完了になる
      // <button onClick={() => { setIsEdit(!isEdit) }}>{isEdit ? "編集完了" : "編集"}</button>
    // 該当するprops.todoを取得（インデックス番号？）
    // editTodos.splice(props.index, 1)
    // 該当するprops.todoを削除（置き換え？）→入力フォームがでる
    // 入力された文字列を取得
    // 編集完了ボタンが押されたら→入力された文字列を反映

    // 編集ボタンが押されたら　編集→編集完了になる　<- ここはreturn内を変更する。入力フォームもreturn内につくる形ですので、今の状態です。
    // 入力された文字列を取得
    // 該当するprops.todoを取得（インデックス番号？）
    // 該当するprops.todoを削除（置き換え？） <- 配列のメソッドで置き換えできるものを使うと短いコードで書けます。
    // 編集完了ボタンが押されたら→入力された文字列を反映
    const handleEdit = (e) => {
      e.preventDefault()
      // todosをコピー
      const reTodos = props.todos.slice()
      // 入力された文字列を取得
      const editTask = e.target.editTask.value
      // reTodos = editTask.value
    // 該当するprops.todoを取得（インデックス番号？）
    // 該当するprops.todoを削除（置き換え） <- 配列のメソッドで置き換えできるものを使うと短いコードで書けます。
      reTodos.splice(props.index, 1, editTask)
    // 編集完了ボタンが押されたら→入力された文字列を反映
    // todosを更新
      // onSubmit(props.setTodos(reTodos))
      props.setTodos(reTodos)

      // 確認のためコンソールに表示
      console.log(reTodos)
      

      // isEditが変更される前にsetTodosを行いたいため、以下の処理をこちらに記入
      setIsEdit(!isEdit) 

    }

  return (
    // return () の ()内は一つのHTML。<> </>で囲う
    <>
      {  // if文のようなもの。js。{}で囲う。
        // isEditがtrue->編集後ののhtml
        // isEditがfalse->編集前のhtml
        isEdit ?

          // isEditがtrue
          <>
          <form onSubmit={handleEdit}>
            <input type="text" name="editTask"/>
            {/* <button type="submit" onClick={() => { setIsEdit(!isEdit) }}>編集完了</button> */}
            <button type="submit">編集完了</button>
          </form>
          </>
          :

          // isEditがfalse
          // <p>{props.todo}</p>
          <p></p>
      }

      {
        // isDone ? <>true</> : <>false</> の形。
        // {props.todo}はjs？
        isDone ? <p style={{ textDecoration: "line-through" }}>{props.todo}</p> : <p>{props.todo}</p>
      }

      {/* 完了か戻すかボタン */}
      {/* ボタンがクリック（イベント発生）されたら */}
      <button style={isDoneStyle} onClick={() => {
        // 完了かどうか保存するデータを再定義する関数
        // 引数にデータ
        setIsDone(!isDone)
        // データ（isDone）がtrueならfalse、falseならtrueにする。→isDoneがtrue(false)とは？
      }}>{isDone ? "戻す" : "完了"}</button>


      {/* (2)削除ボタン */}
      {/* ボタンがクリック（イベント発生）されたら、関数handleDeleteの処理をする */}
      <button onClick={handleDelete} className="delete-button">削除</button>

      {/* (3)編集→編集完了ボタン */}
      {/* ボタンがクリック（イベント発生）されたら関数を実行。編集中かどうか保存するデータ */}
      {/* <button onClick={() => { setIsEdit(!isEdit) }}>編集</button> */}
      {/* <button onClick={() => { setIsEdit(!isEdit) }}>{isEdit ? "編集完了" : "編集"}</button> */}
      <EditButton onClick={() => { setIsEdit(!isEdit) }}>{isEdit ? "編集完了" : "編集"}</EditButton>
    </>
  )
}

// コンポーネント関数をエクスポート
export default Item

問題点

1.Listのtodosが2つずつできてしまう

2.削除機能が機能していない

3.編集機能


不明点
---App.js 
todos={todos} setTodos={setTodos}

---List.js
<Item todo={todo} index={index} todos={props.todos}></Item>

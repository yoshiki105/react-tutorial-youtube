import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  // useStateでtodosという変数を定義し、初期値を["Todo1", "Todo2"]とする
  const [todos] = useState([
    {id: 1, name: "Todo1", completed: false},
    {id: 2, name: "Todo2", completed: true},
  ]);

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </>
  );
}

export default App;

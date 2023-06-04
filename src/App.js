import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

function App() {
  // useStateでtodosという変数を定義し、初期値を["Todo1", "Todo2"]とする
  const [todos, setTodos] = useState([
    {id: 1, name: "Todo1", completed: false},
    {id: 2, name: "Todo2", completed: true},
  ]);

  const todoNameRef = useRef();

  // todosの末尾に新しいTodoを追加する
  const handleAddTodo = () => {
    // useRefでinputの文字列を取得する
    const name = todoNameRef.current.value;
    if (name === "") return;
    // todosの中身を更新する時に、setTodosを使う
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
    });
    todoNameRef.current.value = null;

    // TODO: ローカルストレージに保存する
  };

  const toggleTodo = (id) => {
    // todosの中身をnewTodosにコピーする
    const newTodos = [...todos];
    // newTodosの中からidが一致するtodoを探す=todosの中からidが一致するtodoを探す
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);

    // TODO: ローカルストレージに保存する
  }

  const handleDeleteTodo = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);

    // TODO: ローカルストレージに保存する
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleDeleteTodo}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;

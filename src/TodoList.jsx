import React from 'react'
import Todo from './Todo'

// 関数コンポーネント
const TodoList = ({ todos, toggleTodo }) => {
  // todosをmapで回してTodoコンポーネントにtodoとして渡す
  return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />)
}

export default TodoList

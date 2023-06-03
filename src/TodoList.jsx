import React from 'react'
import Todo from './Todo'

// 関数コンポーネント
const TodoList = ({ todos }) => {
  // todosをmapで回してTodoコンポーネントにtodoとして渡す
  return todos.map((todo) => <Todo todo={todo} key={todo.id} />)
}

export default TodoList

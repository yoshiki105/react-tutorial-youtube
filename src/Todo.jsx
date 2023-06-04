import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClickClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.completed} readOnly onChange={handleTodoClickClick} />
      </label>
      {todo.name}
      {/* TODO: 個別の削除ボタンを設置 */}
    </div>
  )
}

export default Todo

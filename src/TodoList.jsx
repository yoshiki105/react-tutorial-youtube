import React from 'react'

// 関数コンポーネント
const TodoList = ({ todos }) => {
  return (
    // {}はJSX記法で、JSの変数を埋め込むためのもの
    <div>{todos}</div>
  )
}

export default TodoList

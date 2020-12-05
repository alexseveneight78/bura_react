import React from 'react';

import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({todoData, onTaskDone, onTaskImportant, onDelete}) => {
  const elements = todoData.map((item) => {
    let {id, ...items} = item;

    return (
      <li key={id}>
        <TodoListItem 
          {...items}
          onTaskDone={() => onTaskDone(id)}
          onTaskImportant={() => onTaskImportant(id)}
          onDelete={() => onDelete(id)}
          />
      </li>
    )
  })

  return (
    <ul>
      {elements}
    </ul>
  )
}

  export default TodoList;
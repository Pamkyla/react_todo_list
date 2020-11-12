import React from 'react';

import TodoListItem from '../TodoListItem';
import './TodoList.css';
const TodoList = ( {todoItems, onToggleImportant} ) => {

  const elements = todoItems.map((element) => {
    const { id, ...otherProps } = element;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
          {...otherProps} 
          onToggleImportant={() => onToggleImportant(id)}
        />
        </li>
    );
  });

    return (
      <ul className="list-group todo-list">
        { elements }
      </ul>
      );
  }

  export default TodoList;
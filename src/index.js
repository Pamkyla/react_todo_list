import React from 'react';
import ReactDOM from 'react-dom';
//название компонента пишем с большой буквы. Компонентa должна возвращать JSX
const AppHeader = () => {
  return <h1>Todo List</h1>;
}

const SearchBlock = ()=> {
  return <input placeholder='search'/>;
}
const TodoList = () => {
  return (<ul>
      <li>Learn JS</li>
      <li>Learn React</li>
    </ul>)
}

const el = (
  <div>
    <AppHeader/>
    <SearchBlock/>
    <TodoList/>
  </div>

);

ReactDOM.render(el, document.getElementById('root'));
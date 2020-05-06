import React from 'react';
import ReactDOM from 'react-dom';
//название компонента пишем с большой буквы. Компонентa должна возвращать JSX
 // Aтрибуты называются верблюдом
  // Атрибут class = className
  // Атрибут for = htmlFor
  // key for proizvoditel'nocti, а т.е. React узнает какие элементы измениились(чтобы изменить ТОЛЬКО это)

import AppHeader from './components/AppHeader';
import SearchBlock from './components/SearchBlock/SearchBlock';
import TodoList from './components/TodoList/TodoList';

const App = () => {

  const todoData = [
    { label: 'Learn HTML', important: true, id: 1 },
    { label: 'Learn JS', important: true, id: 2 },
    { label: 'Learn React', important: false, id: 3 }
  ];

  return (
  <div>
    <AppHeader/>
    <SearchBlock/>
    <TodoList todoItems = {todoData}/>
  </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
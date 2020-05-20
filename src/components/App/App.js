import React from 'react';


import './App.css';
import AppHeader from '../AppHeader';
import SearchBlock from '../SearchBlock';
import TodoList from '../TodoList';
import ItemAddForm from '../ItemAddForm';

class App extends React.Component {

ids = 10;

state = {
  todoData: [
    { label: 'Learn HTML', important: false, done: false, id: 1, },
    { label: 'Learn JS', important: false, done: false, id: 2, },
    { label: 'Learn React', important: false, done: false, id: 3, },
  ]
};

deleteItem = (id) => {
  this.setState(({ prevState }) => {
    const index = prevState.todoData.findIndex((elem) => elem.id === id);
    
    const newTodoData = [
      ...prevState.todoData.slice(0, index),
      ...prevState.todoData.slice(index + 1)
    ];

    return{
      todoData: newTodoData 
    }
  });
}

addItem = (text) => {
  
  const item = {
    label: text,
    important: false,
    id: this.ids++
  }

  this.setState(({ todoData }) => {
    const newArr = [...todoData, item];


    return {
      todoData: newArr
    }
  });
}

toggleDone = (id) => {
  this.setState(( {todoData} ) => {
    const index = todoData.findIndex((elem) => elem.id === id);

    const oldObj = todoData[index];
    const newObj = {...oldObj, done: !oldObj.done};

    const newArr = [
      ...todoData.slice(0, index),
      ...todoData.slice(index + 1)
    ];
  
    return {
      todoData: newArr
    }
  });

  
}

toggleImportant = () => {

}

  render() {

    const done = this.state.todoData.filter((el) => el.done).length;

    return (
      <div className="App">
        <AppHeader 
        toDo={3} 
        done={done} 
        />
        <SearchBlock/>
        <TodoList 
        todoItems = {this.state.todoData} 
        onDelete={ this.deleteItem } 
        onToggleImportant = { this.toggleImportant }
        onToggleDone = { this.toggleDone }
        />
        <ItemAddForm 
        onItemAdd={ this.addItem }
        />
      </div>
      );
  }
}



 
  


export default App;
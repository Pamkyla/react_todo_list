import React from 'react';


import './App.css';
import AppHeader from '../AppHeader';
import SearchBlock from '../SearchBlock';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

class App extends React.Component {

  ids = 10;

  state = {
    todoData: [],
    detectedText: '',
    filter: 'all'
  };

  componentDidMount() {
    const URL = "https://api.github.com/users/Pamkyla/repos";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ todoData: json });
      
    });
  }

  toggleProp = (id, arr, prop) => {
    const index = arr.findIndex((elem) => elem.id === id);

    const oldObj = arr[index];
    const newObj = { ...oldObj, [prop]: !oldObj[prop] };

    return [
      ...arr.slice(0, index),
      newObj,
      ...arr.slice(index + 1)
    ];
  }

  toggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(id, todoData, 'important')
      }
    });
  }

  onSearchChange = (detectedText) => {
    this.setState({ detectedText });
  }

  search = (arr, detectedText) => {
    if (detectedText.length === 0) {
      return arr;
    }
    return arr.filter((el) => {
      return el.name.toUpperCase()
        .indexOf(detectedText.toUpperCase()) > -1;
    });
  }

  itemsFilter = (arr, filterText) => {
    switch (filterText) {
      case 'all':
        return arr;
      case 'HTML':
        return arr.filter((el) => el.language === 'HTML');
      case 'CSS':
        return arr.filter((el) => el.language === 'CSS');
      case 'JS':
        return arr.filter((el) => el.language === 'JavaScript');
      case 'public':
        return arr.filter((el) => !el.private);
      case 'private':
        return arr.filter((el) => el.private);
        case 'sources':
        return arr.filter((el) => !el.private);
        case 'forks':
        return arr.filter((el) => el.forks);
        case 'archived':
        return arr.filter((el) => el.archived);
      case 'mirrors':
        return arr.filter((el) => el.mirrors);
      default:
        return arr;
    }
  }

  onItemsFilterChange = (filter) => {
    this.setState({ filter });
  }

  render() {
    const { todoData, detectedText, filter } = this.state;
    const detectedItems = this.itemsFilter(this.search(todoData, detectedText), filter);

    return (
      <div className="App">
        <AppHeader
        />
        <div className="searchPanel d-flex">
          <SearchBlock
            onSearchChange={this.onSearchChange}
          />
          <ItemStatusFilter
            filter={filter}
            onItemsFilterChange={this.onItemsFilterChange}
          />
        </div>
        <TodoList
          todoItems={detectedItems}
          onToggleImportant={this.toggleImportant}
        />
      </div>
    );
  }
}







export default App;
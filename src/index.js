import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';

const App = () => {

  const todoData = [
    { label: 'Drink Coffe', important: false },
    { label: 'Make Awesome App', important: true },
    { label: 'Buy Book', important: false }
  ];
  

  return (
    <div>
    <AppHeader />
    <SearchPanel />
    <TodoList todos={todoData}/>
  </div>

  )
}


ReactDOM.render(<App />, document.querySelector('#root'))
import React, {Component} from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAdd from '../item-add/item-add';

import './app.css';


export default class App extends Component {

  maxId = 100

  state = {
    todoData: [
      { task: 'Drink Coffe', done: false, important: false, id: 1 },
      { task: 'Build Awesome App', done: false, important: false, id: 2 },
      { task: 'Buy Book', done: false, important: false, id: 3 }
    ],
    term: ''
  }


  onTaskDone = (id) => {
    const idx = this.state.todoData.findIndex((el) => el.id === id);
    this.setState(({todoData}) => {
      let oldData = [...todoData];
      oldData[idx].done = !oldData[idx].done;
      return {
        todoData: oldData
      }
    })
  }

  onTaskImportant = (id) => {
    const idx = this.state.todoData.findIndex((el) => el.id === id);
    this.setState(({todoData}) => {
      let oldData = [...todoData];
      oldData[idx].important = !oldData[idx].important;
      return {
        todoData: oldData
      }
    })
  }

  onDelete = (id) => {
    const idx = this.state.todoData.findIndex((el) => el.id === id);
    this.setState(({todoData}) => {
      const newData = [
        ...todoData.slice(0,idx),
        ...todoData.slice(idx + 1)
      ]
      return {
        todoData: newData
      }
    })
  }

  onAddTask = (text) => {
    let newTask = {
      task: text,
      done: false,
      important: false,
      id: this.maxId++
    };
    this.setState(({todoData}) => {
      let newData = [...todoData];
      let updatedData = [
        ...newData,
        newTask
      ]
      return {
        todoData: updatedData
      }
    })
  }

  onSearchChange = (term) => {
    this.setState({term})
  }

  search(items, term) {
    if(term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.task.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }


  render() {
    const {todoData, term} = this.state;
    const visibleItems = this.search(todoData, term);
    let doneCount = this.state.todoData.filter((item) => item.done).length;
    let remainingTasks = this.state.todoData.length - doneCount;
    return (
      <div className='app'>
        <SearchPanel 
          onSearchChange={this.onSearchChange}
        />
        <AppHeader 
          doneCount={doneCount}
          remainingTasks={remainingTasks}
        />
        <ItemStatusFilter 

        />
        <TodoList 
          todoData={visibleItems}
          onTaskDone={this.onTaskDone}
          onTaskImportant={this.onTaskImportant}
          onDelete={this.onDelete}
          />
          <ItemAdd 
            onAddTask={this.onAddTask}
          />
      </div>
    )
  }
}
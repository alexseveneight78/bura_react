import React, { Component } from 'react';
import './item-add.css';

export default class ItemAdd extends Component {
    state = {
        newTask: ''
    }
    onListeningChanges = (e) => {
        this.setState({
            newTask: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddTask(this.state.newTask)
        this.setState({
            newTask: ''
        })
    }
    render(){
        return (
            <form 
                className='item-add'
                onSubmit={this.onSubmit}
                >
                <input 
                    placeholder='type a task'
                    onChange={this.onListeningChanges}
                    value={this.state.newTask}
                />
                <button
                    //onClick={() => this.props.onAddTask(this.state.newTask)}
                >
                    Add Task
                </button>
            </form>
        )
    }
}
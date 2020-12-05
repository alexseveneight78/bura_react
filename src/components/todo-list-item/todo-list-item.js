import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    render() {
        const {
            task, 
            onTaskDone, 
            onTaskImportant,
            onDelete,
            done, 
            important} = this.props;

        let classNames = 'todo-list-item';
        if(done) {
            classNames += ' done';
        }
        if(important) {
            classNames += ' important'
        }
        return (
            <div>
                <span 
                className={classNames}
                onClick={onTaskDone}
                >
                { task }
            </span>
            <button
                    onClick={onTaskImportant}
                >!!!</button>
            <button
                onClick={onDelete}
            >delete</button>
            </div>
        )
    }
}
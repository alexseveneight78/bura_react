import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    constructor(){
        super();
        this.state = {
            done: false,
            important: false
        }
        this.onLabelClick = () => {
            this.setState(({done}) => {
                return {
                    done:!done
                }
            })
        };
        this.onMakeImportant = () => {
            this.setState((state) => {
                return {
                    important: !state.important
                }
            })
        }
    }


    render(){
        const { label } = this.props;
        const { done, important } =  this.state;

        let classNames = "todo-list-item";

        if(done) {
            classNames += ' done';
        }
        if(important) {
            classNames += ' important';
        }
        
            return (
                <span className={classNames}>
                    <span 
                        className="todo-list-item-label"
                        onClick={ this.onLabelClick }>
                            {label}
                    </span>
                    
                    <button
                        type="button"
                        className="btn btn-outline-success btn-small"
                        onClick={ this.onMakeImportant }>
                        <i className="fa fa-exclamation"></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-danger btn-small">
                        <i className="fa fa-trash-o"></i>
                    </button>
                </span>
            )
    }
}
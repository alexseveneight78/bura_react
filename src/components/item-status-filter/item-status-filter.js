import React, {Component} from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    render(){
        return (
            <div className='item-status'>
                <button>All</button>
                <button>Active</button>
                <button>Done</button>
            </div>
        )
    }
}
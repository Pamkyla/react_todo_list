import React from 'react';

import './TodoListItem.css';
import Chrat from '../Chart';


class TodoListItem extends React.Component {

    render() {
        const { name, html_url, important, onToggleImportant, language } = this.props;
        let classNames = 'todo-list-item';

        if (important) {
            classNames += ' important'
        }
        return (
            <div className={classNames}>
                <p
                    className="todo-list-label"
                >
                    <a href={html_url}>{name}</a>
                    <span>{language}</span>
                </p>
                <div className='todo-list-label'>
                <button
                    className="btn btn-outline-success btn-important"
                    onClick={onToggleImportant}
                >
                   <i className="fa fa-star"></i>
                   Star
                </button>

                <Chrat name={name}/>
                </div>
                
            </div>

        );
    }
}

export default TodoListItem;
import React from 'react';

import './TodoListItem.css';

class TodoListItem extends React.Component{

    
    render() {
        const { label, onDelete, done, important, onToggleImportant, onToggleDone } = this.props;
        

        let classNames = 'todo-list-item';

         if(done) {
            classNames += ' done';
        }

        if(important) {
            classNames += ' important'
        } 
    
        return(
            <div className={classNames}>
                <span
                    className="todo-list-label"
                    onClick={ onToggleDone }
                >
                    { label }
                </span>
                <button 
                className="btn btn-outline-success btn-important"
                onClick={ onToggleImportant }
                >
                    <i className="fa fa-star" aria-hidden="true"></i>
                </button>
                <button 
                    className="btn btn-outline-danger"
                    onClick={ onDelete }
                >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
            
        );
    }
}

/* const TodoListItem = ( {label, important} ) => {

    const style = {
        color:important ? 'tomato' : 'black',
    };

    return(
        <div className="todo-list-item">
            <span
                className="todo-list-label"
                style={style}
            >
                { label }
            </span>
            <button className="btn btn-outline-success btn-important">
                <i className="fa fa-star" aria-hidden="true"></i>
            </button>
            <button className="btn btn-outline-danger">
                <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>
        
    );
} */

export default TodoListItem;
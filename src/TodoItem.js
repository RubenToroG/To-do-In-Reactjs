import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon__check ${props.completed && 'Icon__check--active'}`}>
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p__completed'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete">
                X
            </span>
        </li>
    );
}

export { TodoItem };
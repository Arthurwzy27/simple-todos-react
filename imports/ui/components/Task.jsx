import React from 'react';
import './Task.css';

export const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
  return (
    <div className="task__header">
      <li>
        <input
        type="checkbox"
        checked={!!task.isChecked}
        onClick={() => onCheckboxClick(task)}
        readOnly
        />

        <span>{task.text}</span>
        <button onClick={ () => onDeleteClick(task) }>&times;</button>
      </li>
    </div>
  )
}

export default Task;

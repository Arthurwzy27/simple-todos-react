import React from 'react';
import './css/Task.css';

export const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
  return (
      <li>
        <input
          type="checkbox"
          className="checkbox"
          data-cy="checkbox"
          checked={!!task.isChecked}
          onClick={() => onCheckboxClick(task)}
          readOnly
        />

        <span data-cy="task-item">{task.text}</span>
        <button onClick={() => onDeleteClick(task)}
        data-cy="delete-task-item">
          &times;
        </button>
      </li>
  );
};

export default Task;

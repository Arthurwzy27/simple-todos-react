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

        <span>{task.text}</span>
        <button onClick={() => onDeleteClick(task)}>&times;</button>
      </li>
  );
};

export default Task;

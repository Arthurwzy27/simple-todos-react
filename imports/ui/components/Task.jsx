import React from 'react';
import './Task.css';

export const Task = ({ task }) => {
  return (
    <div className="task__header">
      <li>{task.text}</li>
    </div>
  )
}

export default Task;

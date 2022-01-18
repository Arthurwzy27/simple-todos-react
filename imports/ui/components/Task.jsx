import React from 'react';
import './Task.scss';

export const Task = ({ task }) => {
  return (
    <div>
      <li>{task.text}</li>
    </div>
  )
}

export default Task;

import React from 'react';
import './Task.scss';

const Task = ({ task }) => {
  return (
    <div>
      <h1>Create a task</h1>
      <li>{task.text}</li>
    </div>
  )
}

export default Task;
